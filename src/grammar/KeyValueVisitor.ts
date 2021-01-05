// Generated from ./src/grammar/KeyValue.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionContext } from "./KeyValueParser";
import { KeyValueExpressionContext } from "./KeyValueParser";
import { KeyContext } from "./KeyValueParser";
import { ValueContext } from "./KeyValueParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KeyValueParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KeyValueVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `KeyValueParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KeyValueParser.keyValueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValueExpression?: (ctx: KeyValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KeyValueParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `KeyValueParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

