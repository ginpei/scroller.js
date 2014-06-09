var expect = require('chai').expect;

var window = {};
eval(require('fs').readFileSync(__dirname+'/../scroller.js', 'utf8'));
var scroller = window.scroller;

// to revert properties
var org = {};
for (var p in scroller) {
	org[p] = scroller[p];
}

describe('scroller.js', function() {
	beforeEach(function() {
		for (var p in org) {
			scroller[p] = org[p];
		}
	});

	it('is OK', function() {
		expect(scroller).not.to.eql(null);
	});
});
