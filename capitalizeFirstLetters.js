const assert = require('assert');

function capitalizeFirstLetters(string) {
  return string.length > 0
  ?
  string
  .split(' ')
  .map( function(word) {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join(' ')
  : '';
}
//console.log(capitalizeFirstLetters("la première lettre doit être en majuscule"))

module.exports = capitalizeFirstLetters;

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters('zozo'), 'Zozo');
// Check that it works for a string
assert.strictEqual(capitalizeFirstLetters('zozo is in the zoo'), 'Zozo Is In The Zoo');