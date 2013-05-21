'use strict';

var domify = require('domify')
  , toString = Object.prototype.toString
;

function isArray(obj) {
    return toString.call(obj) === '[object Array]';
}

function isArguments(obj) {
    return toString.call(obj) === '[object Arguments]';
}

function processArguments(args, fn) {
    if (typeof(args) === 'string') {
        args = domify(args);
    }
    if (isArray(args) || isArguments(args)) {
        var i, l = args.length;
        if (l > 1) {
            i = 0;
            while (i < l) {
                processArguments(args[i], fn);
                i += 1;
            }
            return;
        } else {
            args = args[0];
        }
    }
    fn(args);
}

function Pend(el) {
    this.el = el;
}

Pend.prototype.append = function () {
    var self = this;
    processArguments(arguments, function (el) {
        self.el.appendChild(el);
    });
    return this;
};

Pend.prototype.prepend = function () {
    var self = this;
    processArguments(arguments, function (el) {
        self.el.insertBefore(el, self.el.firstChild);
    });
    return this;
};

module.exports = function (el) {
    return new Pend(el);
};
