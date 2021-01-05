import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {KeyValueResult, KeyValueResultVisitor} from "../KeyValueResultVisitor";
import {KeyValueLexer} from "../grammar/KeyValueLexer";
import {KeyValueParser} from "../grammar/KeyValueParser";

export const parseQuery = (query: string, caretPosition: number): KeyValueResult => {
    // Create input stream from the given query string
    const inputStream = CharStreams.fromString(prepareQuery(query));
    // Create lexer
    const lexer = new KeyValueLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    // Create parser based on the tokens from lexer
    const parser = new KeyValueParser(tokenStream);

    // Create Abstract Syntax Tree based on the root 'expression' from the parser
    const tree = parser.expression();

    // Visit the tree to gather the result
    const visitor = new KeyValueResultVisitor(caretPosition);
    return visitor.visit(tree);
};

const prepareQuery = (query: string): string => {
    // Remove whitespaces at the end of query string
    return query.trimEnd();
};
