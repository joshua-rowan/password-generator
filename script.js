// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!")
  //Pseudocode below from Paul Keldsen Web Development on YouTube
  //1. Prompt user for the password criteria
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
