// Generated from ./src/grammar/KeyValue.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./KeyValueParser";
import { KeyValueExpressionContext } from "./KeyValueParser";
import { KeyContext } from "./KeyValueParser";
import { ValueContext } from "./KeyValueParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KeyValueParser`.
 */
export interface KeyValueListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KeyValueParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KeyValueParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KeyValueParser.keyValueExpression`.
	 * @param ctx the parse tree
	 */
	enterKeyValueExpression?: (ctx: KeyValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KeyValueParser.keyValueExpression`.
	 * @param ctx the parse tree
	 */
	exitKeyValueExpression?: (ctx: KeyValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KeyValueParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `KeyValueParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `KeyValueParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `KeyValueParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

