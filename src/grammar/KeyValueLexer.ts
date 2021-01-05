// Generated from ./src/grammar/KeyValue.g4 by ANTLR 4.7.3-SNAPSHOT

// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class KeyValueLexer extends Lexer {
	public static readonly ALPHANUMERIC = 1;
	public static readonly EQ = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"ALPHANUMERIC", "EQ",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ALPHANUMERIC", "EQ",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KeyValueLexer._LITERAL_NAMES, KeyValueLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KeyValueLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(KeyValueLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "KeyValue.g4"; }

	// @Override
	public get ruleNames(): string[] { return KeyValueLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return KeyValueLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return KeyValueLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return KeyValueLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x04\x10\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x07\x02\n\n\x02\f\x02\x0E" +
		"\x02\r\v\x02\x03\x03\x03\x03\x02\x02\x02\x04\x03\x02\x03\x05\x02\x04\x03" +
		"\x02\x04\x04\x02C\\c|\x05\x022;C\\c|\x02\x10\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x03\x07\x03\x02\x02\x02\x05\x0E\x03\x02\x02\x02\x07" +
		"\v\t\x02\x02\x02\b\n\t\x03\x02\x02\t\b\x03\x02\x02\x02\n\r\x03\x02\x02" +
		"\x02\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02\f\x04\x03\x02\x02\x02\r\v" +
		"\x03\x02\x02\x02\x0E\x0F\x07?\x02\x02\x0F\x06\x03\x02\x02\x02\x04\x02" +
		"\v\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KeyValueLexer.__ATN) {
			KeyValueLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KeyValueLexer._serializedATN));
		}

		return KeyValueLexer.__ATN;
	}

}

