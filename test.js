// Test runner
var reporter = require('nodeunit').reporters.default;

// Tests

var tests = [
    '/interface'
];

tests.forEach(function(test, i) {
    tests[i] = __dirname + '/test' + test + '.js';
});

reporter.run(tests);