// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log ("The button was clicked!")

//prompt for password criteria:length (between 8 and 128 characters)


//prompt for password criteria: lowercase


//prompt for password criteria:uppercase


//prompt for password criteria:numeric characters


//prompt for password criteria:special characters


//validate input from prompts


//generate password based on criteria



//display generated password on page
return "Generated password will go here."

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
