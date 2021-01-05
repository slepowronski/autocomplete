grammar KeyValue;

// Parser

expression: (key | keyValueExpression) EOF;
keyValueExpression: key EQ value;
key: ALPHANUMERIC;
value: ALPHANUMERIC | /* empty */;

// Lexer

ALPHANUMERIC: [a-zA-Z] [0-9a-zA-Z]*;
EQ: '=';
