// Assignment code here

// declare all characters
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialcharacters = '~`!@#$%^&*()_-+={[}]|\:;"<>?,./';

characters = upperCase + lowerCase + numbers + specialcharacters;
letters = upperCase + lowerCase;
special = numbers + specialcharacters;

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// y = characters;
// n = 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
//return (generateString(10));
lengthInput = prompt("How many character do you need?");
fuckInput = prompt("do you need all characters( uppercase, lowercase, numbers, specialchar?");
  // if  "yes" pick 8 random characters() 
  // else ask 
return(generateString(lengthInput));

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

