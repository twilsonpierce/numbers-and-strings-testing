const add = (a, b) => a + b;

function filterEvens(arr) {
	return arr.filter(function(a) {
		return a % 2 === 0
	})
}

function secondSmallest(arr) {
	let sortedArr = arr.filter(function(a) {
		return typeof a === 'number'
	}).sort(function(a, b) {
		return a > b
	})
	if(sortedArr.length < 2) {
		return 'Array must have a length of 2 or more'
	}
	return sortedArr[1]
}

function getUnique(arr, keys={}){
	let unique = []
	for(let i = 0; i < arr.length; i++) {
		if(keys[arr[i]]) {
			keys[arr[i]] += 1
		}
		else {
			keys[arr[i]] = 1
		}
	}
	for(let val in keys) {
		console.log(keys[val])
		if(keys[val] === 1) {
			unique.push(parseInt(val))
		}
	}
	return unique
}

module.exports = {
  add,
  filterEvens,
  secondSmallest,
  getUnique
};
