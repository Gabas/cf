'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');

describe('greet_test', function() {
	it('should greet with given name', function() {
		expect(greet('Roman')).to.eql('hello Roman');
	});
});