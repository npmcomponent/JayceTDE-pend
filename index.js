'use strict';

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function Pend(el) {
    this.el = el;
}

Pend.prototype.append(els) {
    if (!isArray(els)) {
        return this.append([ els ]);
    }
    var i = 0
      , l = els.length
    ;
    while (i < l) {
        this.el.appendChild(els[i]);
        i += 1;
    }
    return this;
};

Pend.prototype.prepend(els) {
    if (!isArray(els)) {
        return this.prepend([ els ]);
    }
    var i = 0
      , l = els.length
    ;
    while (i < l) {
        this.el.insertBefore(els[i], this.el.firstChild);
        i += 1;
    }
    return this;
};

module.exports = function (el) {
    return new Pend(el);
};
