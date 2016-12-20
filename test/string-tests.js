const expect = require('chai').expect;
const capitalize = require('../js/strings-funcs').capitalize;
const capitalizeFirst = require('../js/strings-funcs').capitalizeFirst;
const replaceZero = require('../js/strings-funcs').replaceZero;
const countTheLetters = require('../js/strings-funcs').countTheLetters;

describe('strings tests', () => {
  it('capitalize() should capitalize all letters in a string', () => {
    let result1 = capitalize('hello');
    let result2 = capitalize('world');
    expect(result1).equal('HELLO');
    expect(result2).equal('WORLD');
  });
  //Add more tests here:
  it('capitalizeFirst() should capitalize the first letter of each string', function() {
  	let result1 = capitalizeFirst(['this', 'is', 'a', 'string']);
  	expect(result1).be.a('string');
  	expect(result1).equal('This Is A String');
  })

  it('replaceZero() should replace any letter of "o" with the number 0', function(){
  	let result1 = replaceZero('TogetherForever');
  	expect(result1).be.a('string');
  	expect(result1).equal('T0getherF0rever');
  })

  it('countTheLetters() should return an object with the count of each letter within the string', function(){
  	let result1 = countTheLetters('mynameismelanie');
  	expect(result1).be.a('object');
  	expect(result1).be.eql({ m: 3, y: 1, n: 2, a: 2, e: 3, i: 2, s: 1, l: 1 });
  })

});