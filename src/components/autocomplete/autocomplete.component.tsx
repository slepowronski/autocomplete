import {FunctionComponent, useCallback, useEffect, useState} from "react";
import {parseQuery} from "../../services/parseQuery.service";
// react-codemirror2
import {UnControlled as CodeMirrorEditor} from 'react-codemirror2'
// codemirror
import CodeMirror, {Editor} from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-ocean.css';
// codemirror - show-hint
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';

import {usePrevious} from "../../hooks/usePrevious.hook";
import {fetchSuggestions} from "../../services/suggestionsNetwork.service";
import {KeyValueResult} from "../../KeyValueResultVisitor";

// CodeMirror's base and show-hint type
type CodeMirrorEditorType = CodeMirror.Editor & Editor;

// Query info encapsulating the query string and current caret position
interface QueryInfo {
    query: string;
    caretPosition: number;
}

// Store for the fetched suggestions together with the result of parsing
interface SuggestionsInfo {
    result: KeyValueResult;
    suggestions: string[];
}

export const AutoComplete: FunctionComponent = () => {
    const [codeMirrorEditor, setCodeMirrorEditor] = useState<CodeMirrorEditorType>();

    const [queryInfo, setQueryInfo] = useState<QueryInfo>({
        query: '',
        caretPosition: 0,
    });

    const [suggestionsInfo, setSuggestionsInfo] = useState<SuggestionsInfo>({
        result: undefined,
        suggestions: [],
    });

    const onChange = useCallback((editor: CodeMirrorEditorType) => {
        setQueryInfo({
            query: editor.getValue(),
            caretPosition: editor.getCursor().ch,
        });
    }, []);

    const prevQueryInfo = usePrevious(queryInfo);
    useEffect(() => {
        if (
            !codeMirrorEditor ||
            !prevQueryInfo ||
            !queryInfo ||
            (
                prevQueryInfo.query === queryInfo.query &&
                prevQueryInfo.caretPosition === queryInfo.caretPosition
            )
        ) {
            return;
        }

        const result = parseQuery(queryInfo.query, queryInfo.caretPosition);

        console.debug('Query', queryInfo.query);
        console.debug('Caret position', queryInfo.caretPosition);
        console.debug('Result', result);

        fetchSuggestions(result).then((fetchedSuggestions) => setSuggestionsInfo({
            result,
            suggestions: fetchedSuggestions,
        }));
    }, [codeMirrorEditor, prevQueryInfo, queryInfo]);

    useEffect(() => {
        if (!codeMirrorEditor) {
            return;
        }
        const isKeyResult = suggestionsInfo.result?.type === 'KeyResult';
        const options = {
            // Don't complete automatically in case of only one suggestion
            completeSingle: false,
            hint: () => ({
                from: { line: 0, ch: suggestionsInfo.result?.range.start ?? 0 },
                to: {
                    line: 0,
                    ch: (suggestionsInfo.result?.range.end ?? 0) +
                        (isKeyResult ? 1 : 0) + // for key result, extend index by 1 to cover the '=' in query string as well
                        1, // end index is excluded so let's add 1
                },
                list: suggestionsInfo.suggestions.map((text, index) => ({
                    text: isKeyResult ? `${text}=` : `${text} `,
                })),
            }),
        };
        codeMirrorEditor.showHint(options);
    }, [codeMirrorEditor, suggestionsInfo]);

    return (
        <CodeMirrorEditor
            options={{
                theme: 'material',
                lineNumbers: true
            }}
            editorDidMount={setCodeMirrorEditor}
            onCursorActivity={onChange}
        />
    );
};
