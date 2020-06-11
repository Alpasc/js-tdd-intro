const assert = require('assert');


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters('zozo'), 'Zozo');
// Check that it works for a string
assert.strictEqual(capitalizeFirstLetters('zozo is in the zoo'), 'Zozo Is In The Zoo');