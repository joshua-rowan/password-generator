// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!")
  //tried several sollutions. This one functioned. https://github.com/jamierachael/Password-Generator/blob/master/script.js helped me write password length prompt. Still needs to loop until resolved.
  var characterLength = parseInt(prompt("Password Length. Must be no less than 8 and no more than 128 characters long."));
    if(!characterLength) {
      alert("This needs a value")
    }
    else if (characterLength < 8 || characterLength > 128) {
      characterLength = parseInt(prompt("Password must be between 8 and 128 characters long."))

    
  //Pseudocode below from Paul Keldsen Web Development on YouTube
  //1. Prompt user for the password criteria DONE
  //2. Password length 8<=i<=128 DONE
  //3. Lowercase, uppercase, numbers, special characters
  //4. Validate the input
  //5. Generate password
  //6. Display passowrd to the page
    }


  return "Generated password will go here!";
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
