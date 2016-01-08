"use strict";

function userInput(){
    var palindrome,check;
    palindrome = prompt("Enter your palindrome");
    return palindrome; 
}
function removeSpace(palindrome){
	var noSpace, paliCheck;
    noSpace = palindrome.replace(/\s/g, '');
    return noSpace;
}

function inputChecker(palindrome,check){
    if (palindrome === check){
    	console.log( palindrome, " is a palindrome!");
    }else {
    	console.log( palindrome, " is not a palindrome!");
    };
}

function reverse(palindrome) {
  var pal = [];
  for (var i = palindrome.length - 1, j = 0; i >= 0; i--, j++)
    pal[j] = palindrome[i];
  return pal.join('');
}

function main(){
    var input, palindrome, check;

    input = userInput();
    palindrome = removeSpace(input);
    check = reverse(palindrome);
	inputChecker(palindrome,check);
}

main();