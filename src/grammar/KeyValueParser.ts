// Generated from ./src/grammar/KeyValue.g4 by ANTLR 4.7.3-SNAPSHOT

// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { KeyValueListener } from "./KeyValueListener";
import { KeyValueVisitor } from "./KeyValueVisitor";


export class KeyValueParser extends Parser {
	public static readonly ALPHANUMERIC = 1;
	public static readonly EQ = 2;
	public static readonly RULE_expression = 0;
	public static readonly RULE_keyValueExpression = 1;
	public static readonly RULE_key = 2;
	public static readonly RULE_value = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "keyValueExpression", "key", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ALPHANUMERIC", "EQ",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KeyValueParser._LITERAL_NAMES, KeyValueParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KeyValueParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "KeyValue.g4"; }

	// @Override
	public get ruleNames(): string[] { return KeyValueParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return KeyValueParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KeyValueParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KeyValueParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 8;
				this.key();
				}
				break;

			case 2:
				{
				this.state = 9;
				this.keyValueExpression();
				}
				break;
			}
			this.state = 12;
			this.match(KeyValueParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyValueExpression(): KeyValueExpressionContext {
		let _localctx: KeyValueExpressionContext = new KeyValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KeyValueParser.RULE_keyValueExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.key();
			this.state = 15;
			this.match(KeyValueParser.EQ);
			this.state = 16;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KeyValueParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(KeyValueParser.ALPHANUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KeyValueParser.RULE_value);
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KeyValueParser.ALPHANUMERIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.match(KeyValueParser.ALPHANUMERIC);
				}
				break;
			case KeyValueParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x04\x1B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x05\x02" +
		"\r\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x05\x05\x19\n\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04" +
		"\x02\x06\x02\b\x02\x02\x02\x02\x18\x02\f\x03\x02\x02\x02\x04\x10\x03\x02" +
		"\x02\x02\x06\x14\x03\x02\x02\x02\b\x18\x03\x02\x02\x02\n\r\x05\x06\x04" +
		"\x02\v\r\x05\x04\x03\x02\f\n\x03\x02\x02\x02\f\v\x03\x02\x02\x02\r\x0E" +
		"\x03\x02\x02\x02\x0E\x0F\x07\x02\x02\x03\x0F\x03\x03\x02\x02\x02\x10\x11" +
		"\x05\x06\x04\x02\x11\x12\x07\x04\x02\x02\x12\x13\x05\b\x05\x02\x13\x05" +
		"\x03\x02\x02\x02\x14\x15\x07\x03\x02\x02\x15\x07\x03\x02\x02\x02\x16\x19" +
		"\x07\x03\x02\x02\x17\x19\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x17" +
		"\x03\x02\x02\x02\x19\t\x03\x02\x02\x02\x04\f\x18";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KeyValueParser.__ATN) {
			KeyValueParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KeyValueParser._serializedATN));
		}

		return KeyValueParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(KeyValueParser.EOF, 0); }
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public keyValueExpression(): KeyValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, KeyValueExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KeyValueParser.RULE_expression; }
	// @Override
	public enterRule(listener: KeyValueListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KeyValueListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KeyValueVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyValueExpressionContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public EQ(): TerminalNode { return this.getToken(KeyValueParser.EQ, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KeyValueParser.RULE_keyValueExpression; }
	// @Override
	public enterRule(listener: KeyValueListener): void {
		if (listener.enterKeyValueExpression) {
			listener.enterKeyValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KeyValueListener): void {
		if (listener.exitKeyValueExpression) {
			listener.exitKeyValueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KeyValueVisitor<Result>): Result {
		if (visitor.visitKeyValueExpression) {
			return visitor.visitKeyValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public ALPHANUMERIC(): TerminalNode { return this.getToken(KeyValueParser.ALPHANUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KeyValueParser.RULE_key; }
	// @Override
	public enterRule(listener: KeyValueListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: KeyValueListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KeyValueVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public ALPHANUMERIC(): TerminalNode | undefined { return this.tryGetToken(KeyValueParser.ALPHANUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KeyValueParser.RULE_value; }
	// @Override
	public enterRule(listener: KeyValueListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: KeyValueListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KeyValueVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


