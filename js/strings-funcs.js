const capitalize = (str) => str.split('').map((letter) => letter.toUpperCase()).join('');

function capitalizeFirst(arr)  {
	let capitalized = []
	for(let i = 0; i < arr.length; i++) {
		var word = arr[i].split('');
		word[0] = word[0].toUpperCase()
		capitalized.push(word.join(''))
	}
	return capitalized.join(' ');
}

function replaceZero(string){
var newString = string.split("");
for(var i = 0; i < newString.length;i++){
	if(newString[i] === 'o' || newString[i] === 'O'){
		newString[i] = 0;
	}
}
return newString.join("")
}

function countTheLetters(string){
	var obj = {};
	var count = 0;

	var newName = string.split("");
	for(var i = 0; i < newName.length;i++){
		if(obj[newName[i]]){
			obj[newName[i]] += 1
		}else{
			obj[newName[i]] = 1
		}
	}
	return obj;
}
