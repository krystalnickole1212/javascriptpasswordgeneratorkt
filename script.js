// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptLength
var promptLowercase
var promptUppercase
var promptNumbers
var promptSpecialcharacters

var characterLength = getCharacterLength();
var choiceArray = [];
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharactersArray = "!@><#,$%^&*(+|[]";
var numberArray = "12334567890";
characterLength = Number.NaN;
var password = "";


//Write password to the #password input 
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

function generatePassword() {
  console.log("The button was clicked!")






  //prompt for password criteria:length (between 8 and 128 characters)
  //var promptLength = window.prompt('How many characters would you like your password to include?');

  //prompt for password criteria: lowercase
  //var promptLowercase = window.prompt('Would you like your password to include lowercase letters of the alphabet?');

  //prompt for password criteria:uppercase
  //var promptUppercase = window.prompt('Would you like your password to include uppercase letters?');

  //prompt for password criteria:numeric characters
  //var promptNumbers = window.prompt('Would you like your password to include numerical characters?');

  //prompt for password criteria:special characters
  //var promptSpecialcharacters = window.prompt('Would you like your password to include special characters?');

  //validate input from prompts


  //generate password based on criteria



  //display generated password on page
  return "Generated password will go here."

}

function getCharacterLength() {
  var choiceArray = [];
  var characterLength = prompt("How many characters long would you like your password to be? (8-128 characters");

  console.log("character length prompt value: ", characterLength);

  // reassign the value back to the same variable
  characterLength = parseInt(characterLength);

  console.log("character length as integer: ", characterLength);

  if (isNaN(characterLength)) {
    console.log("NaN");
  }

  if (characterLength < 8) {
    console.log("less than 8");
  }

  if (characterLength > 128) {
    console.log("greater than 128");
  }
  return characterLength;

}

if (confirm("Would you like your password to include lowercase letters of the alphabet?")) {
  choiceArray.concat(lowercaseArray);
}
if (confirm("Would you like your password to include uppercase letters of the alphabet?")) {
  choiceArray.concat(upperCaseArray);
}
if (confirm("Would you like your password to include special characters?")) {
  choiceArray.concat(specialCharactersArray);
}
if (confirm("Would you like your password to include numbers?")) {
  choiceArray.concat(numberArray);

}
console.log(choiceArray);
for (let i = 0;8 <= i && i <= 128; i++) {
  password  += "The number is " + i + "<br>";
  //random function on right side of loop
}


console.log(characterLength);
console.log(choiceArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
