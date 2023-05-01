// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!")
  //Pseudocode below from Paul Keldsen Web Development on YouTube
  //1. Prompt user for the password criteria
  var passwordLength = passwordLength();
  //2. Password length 8<=i<=128
  //3. Lowercase, uppercase, numbers, special characters
  //4. Validate the input
  //5. Generate password
  //6. Display passowrd to the page


  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Next thing: create code that ensures passwordLength is between 8-128 characters and is remembered
  
  passwordText.value = password;

}

function passwordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number from 8 to 128 for your password length"));
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
