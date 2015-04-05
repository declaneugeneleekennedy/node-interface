
function Implements(object, interfaces) {
    if(!Array.isArray(interfaces)) {
        interfaces = [ interfaces ];
    }

    interfaces.forEach(function(interface) {
        checkInterface(object, interface);
    });
};

function checkInterface(object, interface) {
    for(var m in interface.method) {
        if(!object[m] || typeof object[m] !== 'function') {
            throw 'Interface Method not implemented: ' + interface.name + '.' + m;
        }

        var signature = getMethodSignature(object[m]);

        if(signature.toString() != interface.method[m].toString()) {
            throw 'Interface Method Signature incompatible: ' + interface.name + '.' + m;
        }
    }
}

function getMethodSignature(method) {
    var signature = method.toString()
                            .match(/function\s*\((.*?)\)\s*{/)[1];

     return (signature) ? signature.replace(/\s/g, '').split(',') : [];
}

module.exports = Implements;