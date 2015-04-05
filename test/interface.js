
var Implements = require('../lib/interface');

module.exports.testProperImplementation = function(test) {
    test.expect(1);

    var interface = {
        name: 'Good',
        method: {
            aMethod: [],
            bMethod: ['arg1'],
            cMethod: ['arg1', 'arg2']
        }
    };

    var object = {
        aMethod: function() {},
        bMethod: function(arg1) {},
        cMethod: function(arg1, arg2) {}
    };

    test.doesNotThrow(function() {
        Implements(object, interface);
    });

    test.done();
};

module.exports.testMethodNotFound = function(test) {
    test.expect(1);

    var interface = {
        name: 'MethodNotFound',
        method: {
            aMethod: [],
            bMethod: ['arg1'],
            cMethod: ['arg1', 'arg2']
        }
    };

    var object = {
        aMethod: function() {},
        bMethod: function(arg1) {}
    };

    test.throws(function() {
        Implements(object, interface);
    });

    test.done();
};

module.exports.testIncompatibleSignature = function(test) {
    test.expect(1);

    var interface = {
        name: 'IncompatibleSignature',
        method: {
            aMethod: [],
            bMethod: ['arg1'],
            cMethod: ['arg1', 'arg2']
        }
    };

    var object = {
        aMethod: function() {},
        bMethod: function(arg1) {},
        cMethod: function(arg1, badArg2) {}
    };

    test.throws(function() {
        Implements(object, interface);
    });

    test.done();
};