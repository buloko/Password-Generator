//variables for the characthers
var upperCase = "ABCDEFHJKLMNIOPQRUSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var anyNum = "0123456789";
var specialChars = "!@#$%^&*()";


// Add event listener to generate button
function generatePassword() {
  var password = "";
  var pasArray = "";

var numChar = window.prompt("How many characthers do you want to have?");
if(numChar === null) {
  return;
}

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
generateBtn.addEventListener("click", writePassword);


if(generateBtn){
  generateBtn.addEventListener("click", writePassword);
}
if(passwordText){
  passwordText.value = password;
}




var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}