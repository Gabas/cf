'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');

describe('greet_test', function() {
	it('should greet with given name', function() {
		expect(greet('Roman')).to.eql('hello Roman');
	});
});

describe('arguments', function() {
	it('should check 3-rd argument', function() {
		expect().to.eql('');
	});
});