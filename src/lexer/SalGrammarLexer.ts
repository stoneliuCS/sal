// Generated from /Users/stoneliu/Playground/sal/src/grammar/SalGrammar.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class SalGrammarLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly DECLARE = 6;
	public static readonly SCHEMA = 7;
	public static readonly ROUTE = 8;
	public static readonly TYPE = 9;
	public static readonly NUMBER_TYPE = 10;
	public static readonly STRING_TYPE = 11;
	public static readonly BOOL_TYPE = 12;
	public static readonly ID = 13;
	public static readonly INT = 14;
	public static readonly STRING = 15;
	public static readonly LINE_COMMENT = 16;
	public static readonly COMMENT = 17;
	public static readonly WS = 18;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "';'", "'{'", "','", 
                                                   "'}'", "':'", "'DECLARE'", 
                                                   "'SCHEMA'", "'ROUTE'", 
                                                   "'TYPE'", "'number'", 
                                                   "'string'", "'bool'" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, "DECLARE", 
                                                    "SCHEMA", "ROUTE", "TYPE", 
                                                    "NUMBER_TYPE", "STRING_TYPE", 
                                                    "BOOL_TYPE", "ID", "INT", 
                                                    "STRING", "LINE_COMMENT", 
                                                    "COMMENT", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "DECLARE", "SCHEMA", "ROUTE", 
		"TYPE", "NUMBER_TYPE", "STRING_TYPE", "BOOL_TYPE", "ID", "INT", "STRING", 
		"ESC", "LINE_COMMENT", "COMMENT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SalGrammarLexer._ATN, SalGrammarLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "SalGrammar.g4"; }

	public get literalNames(): (string | null)[] { return SalGrammarLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SalGrammarLexer.symbolicNames; }
	public get ruleNames(): string[] { return SalGrammarLexer.ruleNames; }

	public get serializedATN(): number[] { return SalGrammarLexer._serializedATN; }

	public get channelNames(): string[] { return SalGrammarLexer.channelNames; }

	public get modeNames(): string[] { return SalGrammarLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,18,157,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
	1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,4,12,96,8,12,11,12,12,12,97,
	1,13,4,13,101,8,13,11,13,12,13,102,1,14,1,14,1,14,5,14,108,8,14,10,14,12,
	14,111,9,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,119,8,15,1,16,1,16,1,16,
	1,16,5,16,125,8,16,10,16,12,16,128,9,16,1,16,3,16,131,8,16,1,16,1,16,1,
	16,1,16,1,17,1,17,1,17,1,17,5,17,141,8,17,10,17,12,17,144,9,17,1,17,1,17,
	1,17,1,17,1,17,1,18,4,18,152,8,18,11,18,12,18,153,1,18,1,18,3,109,126,142,
	0,19,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,0,33,16,35,17,37,18,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,
	10,13,13,32,32,164,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
	1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
	0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,33,
	1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,41,1,0,0,0,5,43,1,0,0,
	0,7,45,1,0,0,0,9,47,1,0,0,0,11,49,1,0,0,0,13,57,1,0,0,0,15,64,1,0,0,0,17,
	70,1,0,0,0,19,75,1,0,0,0,21,82,1,0,0,0,23,89,1,0,0,0,25,95,1,0,0,0,27,100,
	1,0,0,0,29,104,1,0,0,0,31,118,1,0,0,0,33,120,1,0,0,0,35,136,1,0,0,0,37,
	151,1,0,0,0,39,40,5,59,0,0,40,2,1,0,0,0,41,42,5,123,0,0,42,4,1,0,0,0,43,
	44,5,44,0,0,44,6,1,0,0,0,45,46,5,125,0,0,46,8,1,0,0,0,47,48,5,58,0,0,48,
	10,1,0,0,0,49,50,5,68,0,0,50,51,5,69,0,0,51,52,5,67,0,0,52,53,5,76,0,0,
	53,54,5,65,0,0,54,55,5,82,0,0,55,56,5,69,0,0,56,12,1,0,0,0,57,58,5,83,0,
	0,58,59,5,67,0,0,59,60,5,72,0,0,60,61,5,69,0,0,61,62,5,77,0,0,62,63,5,65,
	0,0,63,14,1,0,0,0,64,65,5,82,0,0,65,66,5,79,0,0,66,67,5,85,0,0,67,68,5,
	84,0,0,68,69,5,69,0,0,69,16,1,0,0,0,70,71,5,84,0,0,71,72,5,89,0,0,72,73,
	5,80,0,0,73,74,5,69,0,0,74,18,1,0,0,0,75,76,5,110,0,0,76,77,5,117,0,0,77,
	78,5,109,0,0,78,79,5,98,0,0,79,80,5,101,0,0,80,81,5,114,0,0,81,20,1,0,0,
	0,82,83,5,115,0,0,83,84,5,116,0,0,84,85,5,114,0,0,85,86,5,105,0,0,86,87,
	5,110,0,0,87,88,5,103,0,0,88,22,1,0,0,0,89,90,5,98,0,0,90,91,5,111,0,0,
	91,92,5,111,0,0,92,93,5,108,0,0,93,24,1,0,0,0,94,96,7,0,0,0,95,94,1,0,0,
	0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,26,1,0,0,0,99,101,7,1,0,
	0,100,99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,28,
	1,0,0,0,104,109,5,34,0,0,105,108,3,31,15,0,106,108,9,0,0,0,107,105,1,0,
	0,0,107,106,1,0,0,0,108,111,1,0,0,0,109,110,1,0,0,0,109,107,1,0,0,0,110,
	112,1,0,0,0,111,109,1,0,0,0,112,113,5,34,0,0,113,30,1,0,0,0,114,115,5,92,
	0,0,115,119,5,34,0,0,116,117,5,92,0,0,117,119,5,92,0,0,118,114,1,0,0,0,
	118,116,1,0,0,0,119,32,1,0,0,0,120,121,5,47,0,0,121,122,5,47,0,0,122,126,
	1,0,0,0,123,125,9,0,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,127,1,0,0,0,
	126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,129,131,5,13,0,0,130,129,
	1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,10,0,0,133,134,1,0,0,
	0,134,135,6,16,0,0,135,34,1,0,0,0,136,137,5,47,0,0,137,138,5,42,0,0,138,
	142,1,0,0,0,139,141,9,0,0,0,140,139,1,0,0,0,141,144,1,0,0,0,142,143,1,0,
	0,0,142,140,1,0,0,0,143,145,1,0,0,0,144,142,1,0,0,0,145,146,5,42,0,0,146,
	147,5,47,0,0,147,148,1,0,0,0,148,149,6,17,0,0,149,36,1,0,0,0,150,152,7,
	2,0,0,151,150,1,0,0,0,152,153,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
	155,1,0,0,0,155,156,6,18,0,0,156,38,1,0,0,0,10,0,97,102,107,109,118,126,
	130,142,153,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SalGrammarLexer.__ATN) {
			SalGrammarLexer.__ATN = new ATNDeserializer().deserialize(SalGrammarLexer._serializedATN);
		}

		return SalGrammarLexer.__ATN;
	}


	static DecisionsToDFA = SalGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}