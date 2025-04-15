// Generated from /Users/stoneliu/Desktop/Playground/sal/src/grammar/SalGrammar.g4 by ANTLR 4.12.0
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
	public static readonly SCHEMA = 6;
	public static readonly DECLARE = 7;
	public static readonly NUMBER_TYPE = 8;
	public static readonly STRING_TYPE = 9;
	public static readonly BOOL_TYPE = 10;
	public static readonly ID = 11;
	public static readonly INT = 12;
	public static readonly STRING = 13;
	public static readonly LINE_COMMENT = 14;
	public static readonly COMMENT = 15;
	public static readonly WS = 16;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "';'", "'{'", "','", 
                                                   "'}'", "':'", "'SCHEMA'", 
                                                   "'DECLARE'", "'number'", 
                                                   "'string'", "'bool'" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, "SCHEMA", 
                                                    "DECLARE", "NUMBER_TYPE", 
                                                    "STRING_TYPE", "BOOL_TYPE", 
                                                    "ID", "INT", "STRING", 
                                                    "LINE_COMMENT", "COMMENT", 
                                                    "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "SCHEMA", "DECLARE", "NUMBER_TYPE", 
		"STRING_TYPE", "BOOL_TYPE", "ID", "INT", "STRING", "ESC", "LINE_COMMENT", 
		"COMMENT", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,16,142,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,4,10,81,8,10,11,10,12,10,82,1,
	11,4,11,86,8,11,11,11,12,11,87,1,12,1,12,1,12,5,12,93,8,12,10,12,12,12,
	96,9,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,104,8,13,1,14,1,14,1,14,1,14,
	5,14,110,8,14,10,14,12,14,113,9,14,1,14,3,14,116,8,14,1,14,1,14,1,14,1,
	14,1,15,1,15,1,15,1,15,5,15,126,8,15,10,15,12,15,129,9,15,1,15,1,15,1,15,
	1,15,1,15,1,16,4,16,137,8,16,11,16,12,16,138,1,16,1,16,3,94,111,127,0,17,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,0,29,
	14,31,15,33,16,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,149,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
	1,0,0,0,0,25,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,1,35,1,0,0,
	0,3,37,1,0,0,0,5,39,1,0,0,0,7,41,1,0,0,0,9,43,1,0,0,0,11,45,1,0,0,0,13,
	52,1,0,0,0,15,60,1,0,0,0,17,67,1,0,0,0,19,74,1,0,0,0,21,80,1,0,0,0,23,85,
	1,0,0,0,25,89,1,0,0,0,27,103,1,0,0,0,29,105,1,0,0,0,31,121,1,0,0,0,33,136,
	1,0,0,0,35,36,5,59,0,0,36,2,1,0,0,0,37,38,5,123,0,0,38,4,1,0,0,0,39,40,
	5,44,0,0,40,6,1,0,0,0,41,42,5,125,0,0,42,8,1,0,0,0,43,44,5,58,0,0,44,10,
	1,0,0,0,45,46,5,83,0,0,46,47,5,67,0,0,47,48,5,72,0,0,48,49,5,69,0,0,49,
	50,5,77,0,0,50,51,5,65,0,0,51,12,1,0,0,0,52,53,5,68,0,0,53,54,5,69,0,0,
	54,55,5,67,0,0,55,56,5,76,0,0,56,57,5,65,0,0,57,58,5,82,0,0,58,59,5,69,
	0,0,59,14,1,0,0,0,60,61,5,110,0,0,61,62,5,117,0,0,62,63,5,109,0,0,63,64,
	5,98,0,0,64,65,5,101,0,0,65,66,5,114,0,0,66,16,1,0,0,0,67,68,5,115,0,0,
	68,69,5,116,0,0,69,70,5,114,0,0,70,71,5,105,0,0,71,72,5,110,0,0,72,73,5,
	103,0,0,73,18,1,0,0,0,74,75,5,98,0,0,75,76,5,111,0,0,76,77,5,111,0,0,77,
	78,5,108,0,0,78,20,1,0,0,0,79,81,7,0,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,
	80,1,0,0,0,82,83,1,0,0,0,83,22,1,0,0,0,84,86,7,1,0,0,85,84,1,0,0,0,86,87,
	1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,24,1,0,0,0,89,94,5,34,0,0,90,93,
	3,27,13,0,91,93,9,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,96,1,0,0,0,94,95,
	1,0,0,0,94,92,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,5,34,0,0,98,26,
	1,0,0,0,99,100,5,92,0,0,100,104,5,34,0,0,101,102,5,92,0,0,102,104,5,92,
	0,0,103,99,1,0,0,0,103,101,1,0,0,0,104,28,1,0,0,0,105,106,5,47,0,0,106,
	107,5,47,0,0,107,111,1,0,0,0,108,110,9,0,0,0,109,108,1,0,0,0,110,113,1,
	0,0,0,111,112,1,0,0,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,114,
	116,5,13,0,0,115,114,1,0,0,0,115,116,1,0,0,0,116,117,1,0,0,0,117,118,5,
	10,0,0,118,119,1,0,0,0,119,120,6,14,0,0,120,30,1,0,0,0,121,122,5,47,0,0,
	122,123,5,42,0,0,123,127,1,0,0,0,124,126,9,0,0,0,125,124,1,0,0,0,126,129,
	1,0,0,0,127,128,1,0,0,0,127,125,1,0,0,0,128,130,1,0,0,0,129,127,1,0,0,0,
	130,131,5,42,0,0,131,132,5,47,0,0,132,133,1,0,0,0,133,134,6,15,0,0,134,
	32,1,0,0,0,135,137,7,2,0,0,136,135,1,0,0,0,137,138,1,0,0,0,138,136,1,0,
	0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,6,16,0,0,141,34,1,0,0,0,10,
	0,82,87,92,94,103,111,115,127,138,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SalGrammarLexer.__ATN) {
			SalGrammarLexer.__ATN = new ATNDeserializer().deserialize(SalGrammarLexer._serializedATN);
		}

		return SalGrammarLexer.__ATN;
	}


	static DecisionsToDFA = SalGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}