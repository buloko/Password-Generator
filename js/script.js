var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var password = document.getElementById("password");
var chars = "01234567890abcdefghijklmnopqrustuvwxyz!#$%^&*()ABCDE"
var passwordLength = 10;
var password = "";
for (var i = 0; i<= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random()* chars.length); 
  password += chars.substring(randomNumber, randomNumber +1);
  
}