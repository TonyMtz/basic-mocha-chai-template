'use strict';

module.exports = function Cat() {
    this.talk = function (times) {
        times = times || 1;
        return new Array(times + 1).join('meow~');
    }
};