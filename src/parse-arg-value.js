import * as t from 'babel-types';

export default function parseArgValue(argValue, enumId = t.identifier('_enum')) {
  if (argValue.kind === 'StringValue') {
    return t.stringLiteral(argValue.value);
  } else if (argValue.kind === 'EnumValue') {
    return t.callExpression(enumId, [t.stringLiteral(argValue.value)]);
  } else if (argValue.kind === 'IntValue') {
    return t.numericLiteral(parseInt(argValue.value, 10));
  } else if (argValue.kind === 'FloatValue') {
    return t.numericLiteral(parseFloat(argValue.value));
  } else if (argValue.kind === 'BooleanValue') {
    return t.booleanLiteral(argValue.value);
  } else {
    throw Error(`Unrecognized type "${argValue.kind}"`);
  }
}
