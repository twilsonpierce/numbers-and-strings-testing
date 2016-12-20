const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;
const secondSmallest = require('../js/numbers-funcs').secondSmallest;
const getUnique = require('../js/numbers-funcs').getUnique;

describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    let result1 = add(1, 2);
    let result2 = add(5, 11);
    let result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  //Add more tests here:
  it('filterEvens() should return even numbers', function() {
  	let result1 = filterEvens([1,2,3,4,5,6,7,8,9,10]);
  	expect(result1).eql([2,4,6,8,10]);
  	expect(result1).be.a('array'); 
  })
// may need if conditional if array has less that 2 indexes
  it('secondSmallest() should return second smallest number', function() {
  	let result1 = secondSmallest([1,2,5,'butterfly', 200, -5]);
  	let result2 = secondSmallest([1])
  	expect(result1).be.a('number');
  	expect(result1).equal(1);
  	expect(result2).equal('Array must have a length of 2 or more');
  })
  it('getUnique() should return an array of unique numbers', function() {
  	let result1 = getUnique([1,1,2,2,3,4,5,6]);
  	expect(result1).be.a('array');
  	expect(result1).eql([3,4,5,6]);
  })
});

