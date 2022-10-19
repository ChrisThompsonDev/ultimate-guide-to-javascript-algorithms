const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('replaces a string of text', () => {
  expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch");
});

// test('replaces a string containing numbers', () => {
//   expect(searchReplace('123456789')).toEqual('987654321');
// });

// test('replaces a string containing mixed case characters', () => {
//   expect(searchReplace('AsDfGhJkL')).toEqual('LkJhGfDsA');
// });