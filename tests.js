var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_file.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, for an input of 5", function() {
    assert(
      lib.sum_of_prime(5) == 10
    );
  });
  it("should give 17, for an input of 10", function() {
    assert(
      lib.sum_of_prime(10) == 17
    );
  });
  it("should give 41, for an input of 15", function() {
    assert(
      lib.sum_of_prime(15) == 41
    );
  });
  it("should give false, for an input of negative number", function() {
    assert(
      lib.sum_of_prime(-25) == false
  });
  it("should give false, for an input of a string", function() {
    assert(
      lib.sum_of_prime('s') == false
  }); 
   it("should give 17, for an input of 10", function() {
    assert(
      lib.sum_of_prime(100) == 1060
    );
  });
  it("should give 41, for an input of 15", function() {
    assert(
      lib.sum_of_prime(150) == 2276
    );
  });
   it("should give 17, for an input of 10", function() {
    assert(
      lib.sum_of_prime(120) == 1593
    );
  });
  it("should give 41, for an input of 15", function() {
    assert(
      lib.sum_of_prime(500) == 21536
    );
  });
});