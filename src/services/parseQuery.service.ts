import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {KeyValueResult, KeyValueResultVisitor} from "../KeyValueResultVisitor";
import {KeyValueLexer} from "../grammar/KeyValueLexer";
import {KeyValueParser} from "../grammar/KeyValueParser";

export const parseQuery = (query: string, caretPosition: number): KeyValueResult => {
    // Create the lexer and parser
    const inputStream = CharStreams.fromString(query);
    const lexer = new KeyValueLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new KeyValueParser(tokenStream);

    // Parse the input, where `query` is whatever entry point you defined
    const tree = parser.expression();

    // Visit the tree
    const visitor = new KeyValueResultVisitor(caretPosition);
    return visitor.visit(tree);
};
