// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptLength
var promptLowercase
var promptUppercase
var promptNumbers
var promptSpecialcharacters


var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArray = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
characterLength = Number.NaN;
var password = "";

function shuffle(array){
  var resultsArray = [];
 for (let i = array.length - 1; i > 0; i--){
   var randomIndex = Math.floor(Math.random() *  array.length)
   resultsArray.push(array[randomIndex])
 }
return resultsArray
}

//Write password to the #password input 
//var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

function generatePassword() {
  console.log("The button was clicked!")

  var characterLength = getCharacterLength();
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


    console.log(characterLength);
    var hasLowerCase = confirm("Would you like your password to include lowercase letters of the alphabet?")
    if (hasLowerCase) {
      choiceArray.push(...lowercaseArray);
    }
    var hasUpperCase = confirm("Would you like your password to include uppercase letters of the alphabet?")
    if (hasUpperCase) {
      choiceArray.push(...upperCaseArray);
    }
    var hasSpecialCharacters =confirm("Would you like your password to include special characters?")
    if (hasSpecialCharacters) {
      choiceArray.push(...specialCharactersArray);
    }
    var hasNumbers = ("Would you like your password to include numbers?")
    if (hasNumbers){
      choiceArray.push(...numberArray);
    }
    choiceArray = shuffle(choiceArray);
    console.log(choiceArray);
    var passwordResult = ""
    for (var i = 0; i < characterLength; i++) {
      const randomIndex = Math.floor(Math.random() * choiceArray.length);
      console.log(choiceArray[randomIndex]); 
      passwordResult += choiceArray[randomIndex];
      //password += "The number is " + i + "<br>";
      //random function on right side of loop
    }
  writePassword(passwordResult) 
    //return the password 
  }
}


// Write password to the #password input
function writePassword(password) {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


