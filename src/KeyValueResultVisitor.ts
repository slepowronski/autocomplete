import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {KeyValueVisitor} from "./grammar/KeyValueVisitor";
import {ExpressionContext, KeyContext, KeyValueExpressionContext, ValueContext} from "./grammar/KeyValueParser";

// Token range - start and end included
export interface Range {
    start: number;
    end: number;
}

// Search key
interface KeyResult {
    type: 'KeyResult';
    key: string;
    range: Range;
}

interface ValueResult {
    type: 'ValueResult';
    key: string;
    value: string;
    range: Range;
}

export type KeyValueResult = KeyResult | ValueResult | undefined;

export class KeyValueResultVisitor extends AbstractParseTreeVisitor<KeyValueResult> implements KeyValueVisitor<KeyValueResult> {

    constructor(private caretPosition: number) {
        super();
    }

    defaultResult(): KeyValueResult {
        return;
    }

    aggregateResult(aggregate: KeyValueResult, nextResult: KeyValueResult) {
        return nextResult ?? aggregate;
    }

    // Visit root node
    visitExpression(node: ExpressionContext): KeyValueResult {
        // If the query string is empty, search all the keys
        if (node.text === '') {
            return {
                type: 'KeyResult',
                key: '',
                range: {
                    start: 0,
                    end: 0,
                }
            };
        }
        // Otherwise, proceed with visiting the child nodes
        return this.visitChildren(node);
    }

    // Visit 'key=value'
    visitKeyValueExpression(node: KeyValueExpressionContext): KeyValueResult {
        const key = node.children?.find((child) => child instanceof KeyContext);
        const value = node.children?.find((child) => child instanceof ValueContext);

        // Both key and value are defined, caret is positioned at the value -> search value withing the given key
        if (key !== undefined && value !== undefined && this.isWithinCaretPosition(value)) {
            return {
                type: 'ValueResult',
                key: key.text,
                value: value.text,
                range: KeyValueResultVisitor.getRange(value),
            };
        }
        // Caret is positioned at the key -> search for keys filtered by the given key text
        else if (key !== undefined && this.isWithinCaretPosition(key)) {
            return {
                type: 'KeyResult',
                key: key.text,
                range: KeyValueResultVisitor.getRange(key),
            };
        }
        return this.defaultResult();
    }

    // Visit 'key'
    visitKey(node: KeyContext): KeyValueResult {
        // Search for keys filtered by the given key text
        return {
            type: 'KeyResult',
            key: node.text,
            range: KeyValueResultVisitor.getRange(node),
        };
    }

    private isWithinCaretPosition(node: any /* TODO */): boolean {
        const range = KeyValueResultVisitor.getRange(node);
        return range.start <= this.caretPosition && this.caretPosition <= range.end + 1;
    }

    private static getRange(node: any /* TODO */): Range {
        return {
            start: node.start.startIndex,
            end: Math.max(
                (node.stop ?? node.start).stopIndex,
                node.start.startIndex,
            ),
        };
    }
}
