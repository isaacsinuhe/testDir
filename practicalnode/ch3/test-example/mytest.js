// var assert = require('assert');
// var assert = require('chai').assert;
// var expect = require('expect.js');
var expect = require('chai').expect;
var expected, current;

before(function () {
    expected = ['a', 'b', 'c'];
});

describe('String#split', function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',');
    });

    it('should return an array', function () {
        // assert(Array.isArray(current));
        expect(Array.isArray(current)).to.be.true;
    });

    it('should return the same array', function () {
        // assert.equal(expected.length, current.length, 'arrays have equal length');
        expect(expected.length) .to .equal (current.length);
        for (var i = 0; i < expected.length; i++) {
            // assert.equal(expected[i], current[i], i + ' element is equal');            
            expect(expected[i]) .equal (current[i]);            
        }
    });
});