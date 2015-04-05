# node-interface
Simple interface implementation for Node

## Usage
The module can be used to declare that an object uses an interface, or to ensure
that an interface is used when using an object.

### Why?
Because the strategy pattern is a useful one, and debugging errors caused by
incompatible implementations is easier if they're validated explicitly.

### Declaring an interface
An interface is simply a node module which describes an implementation:

`module.exports.myInterface = {
    name: "MyInterface",
    method: {
        methodOne:      [],
        methodTwo:      ['arg1'],
        methodThree:    ['arg1', 'arg2']
    }
};`

Methods are declared by name as keys of the property `method`, and the value
assigned to their key is an array of expected arguments.

### Checking an interface
The module exports a single function which can be used to validate an interface:

`var implements = require('node-interface');
 var interface  = require('./my-interface');
 var object     = require('./my-object');

 implements(object, interface);`

If the object does not correctly implement the interface, an exception will be
thrown.