'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');

describe('greet_test', function() {
	it('should greet with given name', function() {
		expect(greet('Roman')).to.eql('hello Roman');
	});
});

describe('arguments test', function() {
	it('should get 3-rd argument from command line', function() {
		expect(require('../lib/addargument')).to.eql('Roman');
	});
});
