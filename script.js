// Assignment code here

//variable strings

var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//User's choices confirmations
var confirmLength = "";
var confirmNumericalCharacter;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialCharacter;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//A.user should be prompted for specific password criteria.

function generatePassword() {
  console.log('the generate button was clicked here ') //console log was added to test the event listner and that an action is taking place.
  //define generate password function
  confirmLength = prompt("How many characters would you like your password to contain?");

  //add if statements 
  if (confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters, please try again.");
  } 
  if (confirmLength <= 7 || confirmLength >= 128) {
    prompt("How many characters would you like your password to contain?");
  }
  else (confirmLength >= 8 || confirmLength >= 128); {
  }

  //- length (8-128), upper, lower, numerical, and special characters
  //B.input should be validated and at minimum one character type should be selected
  // return('the random password will return here'); // this is a placeholer for when the actual password is returned. 
  //C.input of random password will generate on the screen for end user.

  //define user choice confirmations with if statements 
  var confirmNumericalCharacter = confirm('Please click OK if you would like numerical characters')
  if (!confirmNumericalCharacter && !confirmUpperCase && !confirmLowerCase && !confirmSpecialCharacter) {
    alert('you must choose atleast one character type. please try again ');
  }
  var confirmUpperCase = confirm('Please click OK if you would like uppercase characters')
  var confirmLowerCase = confirm('Please click OK if you would like lowercase characters')
  var confirmSpecialCharacter = confirm('Please click OK if you would like special characters')

  var userPasswordChar = []

  if (confirmNumericalCharacter) {
    userPasswordChar = userPasswordChar.concat(numerical)
  }

  if (confirmUpperCase) {
    userPasswordChar = userPasswordChar.concat(alphaUpper)
  }

  if (confirmLowerCase) {
    userPasswordChar = userPasswordChar.concat(alphaLower)
  }

  if (confirmSpecialCharacter) {
    userPasswordChar = userPasswordChar.concat(specialChar)
  }

  console.log(userPasswordChar);

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
    console.log(randomPassword)

  }
  return randomPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // I need to define generatePassword function (done on line 23)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);