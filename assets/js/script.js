// Assignment Code
//Pseudocode help from Paul Keldsen Web Development on YouTube
//Received assistance from TA-Andrew Truong
//https://github.com/jamierachael helped me write password length prompt. 
//Tutoring from Dominique Meeks Gombe
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var userArray = [];

function characterLength() {
  var wordLength = parseInt(prompt("Password Length. Must be no less than 8 and no more than 128 characters long."));
  if (isNaN(wordLength)) {
    alert("This needs a value");
    return;
  }

  if (wordLength < 8 || wordLength > 128) {
    alert("Password must be between 8 and 128 characters long.")
    return;
  }

  return wordLength;
}
var thePassword = "";

function userCharacters() {
  var userArray = [];
  var hasLowerCase = confirm("Please confirm or cancel lowercase letters.");
  var hasUpperCase = confirm("Please confirm or cancel uppercase letters.");
  var hasNumbers = confirm("Please confirm or cancel numbers")
  var hasSymbols = confirm("Please confirm or cancel symbols.")

  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols) {
    alert("You must choose at least one option")
    return;
  }

  if (hasLowerCase) {
    userArray = userArray.concat(lowerCase);
    thePassword += getRandomCharacter(lowerCase);
  }
  
  if (hasUpperCase) {
    userArray = userArray.concat(upperCase);
    thePassword += getRandomCharacter(upperCase);
  }
  
  if (hasNumbers) {
    userArray = userArray.concat(numbers);
    thePassword += getRandomCharacter(numbers);
  }
  
  if (hasSymbols) {
    userArray = userArray.concat(symbols);
    thePassword += getRandomCharacter(symbols);
  }
  return userArray;
}

function generatePassword() {
  console.log("Hey, you clicked the button!")
  var passwordLength = characterLength();
  if (!passwordLength) return "Enter a valid length";
  
  thePassword = "";

  var selectedCharacters = userCharacters();
  if (!selectedCharacters) return "Please try again";
  
  while (thePassword.length < passwordLength) {
    thePassword += getRandomCharacter(selectedCharacters);
  }
  return thePassword;
}

function getRandomCharacter (arr){
   const randomIndex =  Math.floor(Math.random() * arr.length);
   return arr[randomIndex];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

