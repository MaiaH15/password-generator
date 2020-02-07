// Assignment 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//const characterAmountRange = document.getElementById('characterAmountRange')
//const characterAmountNumber = document.getElementById('characterAmountNumber')
//const includeUppercaseElement = document.getElementById('includeUppercase')
//const includeNumbersElement = document.getElementById('includeNumbers')
//const includeSymbolsElement = document.getElementById('includeSymbols')
//const form = document.getElementById('passwordGeneratorForm')
//const passwordDisplay = document.getElementById('passwordDisplay')

//const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
//const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
