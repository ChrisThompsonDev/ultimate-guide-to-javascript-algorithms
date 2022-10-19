const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('converts string to pig latin', () => {
  expect(pigLatin("pig")).toEqual("igpay");
});

test('converts string with consonant cluster to pig latin', () => {
  expect(pigLatin("glove")).toEqual("oveglay");
});

test('converts string with vowel start to pig latin', () => {
  expect(pigLatin("explain")).toEqual("explainway");
});