'use strict';

var domify = require('domify')
  , query = require('query')
  , toString = Object.prototype.toString
;

function isArray(obj) {
    return toString.call(obj) === '[object Array]';
}

function isArguments(obj) {
    return toString.call(obj) === '[object Arguments]';
}

function processArguments(args, fn) {
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
    if (typeof(args) === 'string') {
        try {
            return processArguments(domify(args), fn);
        } catch (e) {
            args = document.createTextNode(args);
        }
    }
    fn(args);
}

function Pend(el) {
    if (typeof(el) === 'string') {
        el = query(el);
    }
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

Pend.prototype.appendTo = function (el) {
    if (typeof(el) === 'string') {
        el = query(el);
    }
    el.appendChild(this.el);
};

Pend.prototype.prependTo = function (el) {
    if (typeof(el) === 'string') {
        el = query(el);
    }
    el.insertBefore(this.el, el.firstChild);
};

module.exports = function (el) {
    return new Pend(el);
};
