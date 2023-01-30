var anyUpper = "ABCDEFHJKLMNIOPQRUSTUVWXYZ";
var anyLower = "abcdefghijklmnopqrstuvwxyz";
var anyNum = "0123456789";
var anySpecial = "!@#$%^&*(),.;:_-=+{}|/`";

//Prompt asks what you want to include in the password
// Code must be between 8-128 words
function generatePassword() {
  var wordArray = "";
  var password = "";

  var wordLength = prompt("Choose a length for your password");
  if (wordLength === null) {
   return;
  }
  if (isNaN(wordLength)) {
    alert("You must answer with with a number")
    return;
  }
  if(wordLength < 8) {
    alert("You need to choose a Password Length greater than 8");
    return;
  }
  if(wordLength > 128) {
    alert("You need to chose a Password Length less than 128");
    return;
  }
  console.log(wordLength);
}


console.log(anyLower);
console.log(anyUpper);
console.log(anySpecial);
console.log(anyNum);

var lowerCase = confirm("Use Lower-Case letters?");
var upperCase = confirm("Use Upper Case?");
var specChar = confirm("Use Symbols?");
var number = confirm("Use Numbers?");


var veryRandom = {
  lowerCase: anyLower,
  upperCase: anyUpper,
  number: anyNum,
  specChar: anySpecial,
};

console.log(
  "Length",
  wordLength,
  "Symbols",
  specChars,
  "Numbers",
  number,
  "Lower-Case",
  lowerCase,
  "Upper-Case",
  upperCase
);


if (specChar) {
  wordArray = wordArray.concat(anySpecial);
  console.log(wordArray);
}

if (number) {
  wordArray = wordArray.concat(anyNum);
  console.log(wordArray);
}

if (lowerCase) {
  wordArray = wordArray.concat(anyLower);
  console.log(wordArray);
}

if (upperCase) {
  wordArray = wordArray.concat(anyUpper);
  console.log(wordArray);
}
if (!specChar && !number && !lowerCase && !upperCase) {
  alert("You must chose at least one chracther type");
  generatePassword();
}

console.log("word-Array", wordArray);

for (var i = 0; i <= wordLength; i++) {
  var randomNumber = Math.floor(Math.random() * wordArray.length);
  password += wordArray.substring(randomNumber, randomNumber + 1);
};
 return password;

 
 
 var generatebtn = document.querySelector("generate");

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 }
 generatebtn.addEventListener("click", writePassword);
