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
  if (wordLemgth < 8) {
    alert("Password must be bigger than 8 letters");
  }
  if (isNaN(wordLength)) {
    alert("You must answer with a number");
  }
  if (wordLength > 128) {
    alert("Password must be less than 128 letters");
  }
}

console.log(wordLength);

console.log(anyLower);
console.log(anyUpper);
console.log(anySpecial);
console.log(anyNum);

var lowerCase = confirm("Use Lower-Case letters?");
var upperCase = confirm("Use Upper Case?");
var specialChars = confirm("Use Special Characthers?");
var numbers = confirm("Use numbers?");

var veryRandom = {
  lowerCase: anyLower,
  upperCase: anyUpper,
  specialChars: anySpecial,
  numbers: anyNum,
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

if (specChars) {
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

for (var i = 0; i < wordLength; i++) {
  var rando = Math.floor(Math.random() * wordArray.length);
  password += wordArray.substring(rando, rando + 1);
}
return password;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
