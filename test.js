const { add, subtract } = require('./index');

let pass = 0;
let fail = 0;

function assert(name, actual, expected) {
 if (actual === expected) { pass++; console.log('PASS:', name); }
 else { fail++; console.log('FAIL:', name, 'got', actual, 'expected', expected); }
}

assert('add 1+2', add(1,2), 3);
assert('subtract 5-3', subtract(5,3), 2);

console.log(\n passed, failed);
process.exit(fail > 0 ? 1 : 0);
