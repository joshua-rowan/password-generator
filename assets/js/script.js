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
 
 function characterLength () {
  var wordLength = parseInt(prompt("Password Length. Must be no less than 8 and no more than 128 characters long."));
 if(isNaN(wordLength)) {
   alert("This needs a value");
 }
 else if (wordLength < 8 || wordLength > 128) {
  wordLength = parseInt(alert("Password must be between 8 and 128 characters long."))
 return;
 }}

 function userCharacters () {
  var hasLowerCase = confirm("Please confirm or cancel lowercase letters.");
  var hasUpperCase = confirm("Please confirm or cancel uppercase letters.");
  var hasNumbers = confirm("Please confirm or cancel numbers")
  var hasSymbols = confirm("Please confirm or cancel symbols.")
  
  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols) {
    alert("You must chose at least one option") 
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
  return;
  }}

 function generatePassword() {
   console.log("Hey, you clicked the button!")
   var passwordLength = characterLength();
   var getCharacters = userCharacters();
  var thePassword = "";
     for (var i = 0; i < passwordLength; i++) {
       thePassword = getCharacters[Math.floor(Math.random() * getCharacters.length)];
     }
   return;
 }
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   
   passwordText.value = password;
 
 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
