'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var Cat = require('../lib/cat.js');

describe('cat', function () {
    it('is defined', function () {
        Cat.should.be.a('function');
    });

    describe('can talk', function () {
        var tom;

        before(function () {
            tom = new Cat();
        });

        it('once', function () {
            tom.talk().should.be.equals('meow~');
        });

        it('twice', function () {
            tom.talk(2).should.be.equals('meow~meow~');
        });
    });
});
