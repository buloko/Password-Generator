var password = document.getElementById("password");
var chars = "01234567890abcdefghijklmnopqrustuvwxyz!#$%^&*()ABCDE"
var passwordLength = 10;
var password = "";
for (var i = 0; i<= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random()* chars.length); 
  password += chars.substring(randomNumber, randomNumber +1);
}