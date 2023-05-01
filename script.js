// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var userArray = [];

function generatePassword() {
  console.log("Hey, you clicked the button!")
  //tried several sollutions. This one functioned. https://github.com/jamierachael/Password-Generator/blob/master/script.js helped me write password length prompt. Still needs to loop until resolved.
  var characterLength = parseInt(prompt("Password Length. Must be no less than 8 and no more than 128 characters long."));
    if(!characterLength) {
      alert("This needs a value") // need this to loop back to original prompt
    }
    else if (characterLength < 8 || characterLength > 128) {
      characterLength = parseInt(prompt("Password must be between 8 and 128 characters long."))
    }
    else {
      lowerCase = confirm("Please confirm or cancel lowercase letters.");
      upperCase = confirm("Please confirm or cancel uppercase letters.");
      numbers = confirm("Please confirm or cancel numbers")
      symbols = confirm("Please confirm or cancel symbols.")
    }
    if (!lowerCase && !upperCase && !numbers && !symbols) {
      alert("You must chose at least one option") // need this to loop back to original prompt
    }
    if (lowerCase) {
      userArray = userArray.concat(lowerCase);
    }
    if (upperCase) {
      userArray = userArray.concat(upperCase);
    }
    if (numbers) {
      userArray = userArray.concat(numbers);
    }
    if (symbols) {
      userArray = userArray.concat(symbols);
    }

    var thePassword = "";
    for (var i = 0; i < characterLength; i++) {
      thePassword += userArray[Math.floor(Math.random() * (userArray.length))];
    }

    
  //Pseudocode below from Paul Keldsen Web Development on YouTube
  //1. Prompt user for the password criteria DONE
  //2. Password length 8<=i<=128 DONE
  //3. Lowercase, uppercase, numbers, special characters DONE
  //4. Validate the input
  //5. Generate password
  //6. Display passowrd to the page
    

  return thePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// NEVER COULD FIGURE OUT WHY THE BELOW DIDN'T WORK
// function passwordLength() {
//   // var userChoice = 0;
//   // while ((userChoice < 8) || (userChoice > 128)) {
//   //   userChoice = parseInt(window.prompt("Enter the number from 8 to 128 for your password length"));
//   //   if (isNaN(userChoice)) {
//   //     userChoice = 0;
//   //   }
  
//   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
