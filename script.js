// Assignment Code
//Pseudocode help from Paul Keldsen Web Development on YouTube
//Received assistance from TA-Andrew Truong
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var userArray = [];

function generatePassword() {
  console.log("Hey, you clicked the button!")
  //https://github.com/jamierachael helped me write password length prompt. Still needs to loop until resolved.
  var characterLength = parseInt(prompt("Password Length. Must be no less than 8 and no more than 128 characters long."));
    if(isNaN(characterLength)) {
      alert("This needs a value");
       // need this to loop back to original prompt
    }
    else if (characterLength < 8 || characterLength > 128) {
      characterLength = parseInt(alert("Password must be between 8 and 128 characters long."))//I don't understand why I can't change this.
    }
    else {
      hasLowerCase = confirm("Please confirm or cancel lowercase letters.");
      hasUpperCase = confirm("Please confirm or cancel uppercase letters.");
      hasNumbers = confirm("Please confirm or cancel numbers")
      hasSymbols = confirm("Please confirm or cancel symbols.")
    }
    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols) {
      alert("You must chose at least one option") // need this to loop back to original prompt
    }
    if (hasLowerCase) {
      userArray = userArray.concat(lowerCase);
    }
    if (hasUpperCase) {
      userArray = userArray.concat(upperCase);
    }
    if (hasNumbers) {
      userArray = userArray.concat(numbers);
    }
    if (hasSymbols) {
      userArray = userArray.concat(symbols);
    }

    var thePassword = "";
    for (var i = 0; i < characterLength; i++) {
      thePassword += userArray[Math.floor(Math.random() * (userArray.length))];
    }
  return thePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
