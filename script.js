// Assignment code here

// Declared all characters

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',';','"','<','>','?','.','/'];

var lengthInput = 8;
var userSelection = [];  

// Generating button
var generateBtn = document.querySelector("#generate"); 

// Event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Generating prompts for user 
  // "prompt" - user input (make sure we get an useful input from user)
  // "parseInt" = string to a number
  // "isNaN" (let the user know that it's not a number)
  //"alert" message, the user didnt give us the right answer
  // "confirm" message to the user 
  // "concat"  is used to merge two or more arrays and returns a new array


function getPrompts() {
  userSelection = [];
  lengthInput = parseInt(prompt("How many characters do you need? (8 to 128 characters)"));
  
  if (isNaN(lengthInput) || lengthInput < 8 || lengthInput > 128 ) {
    alert("Please start again, type a number between 8 - 128.");
    return false;
  }

  if (confirm("Do you want uppercase letters? (Ok for Yes, Cancel for No)")) {
    userSelection = userSelection.concat(upperCase);
  }
  if (confirm("Do you want lowercase letters? (Ok for Yes, Cancel for No)")) {
    userSelection = userSelection.concat(lowerCase);
  
  }
  if (confirm("Do you want numbers? (Ok for Yes, Cancel for No)")) {
    userSelection = userSelection.concat(numbers);
  }

  if (confirm("Do you want special characters? (Ok for Yes, Cancel for No)")) {
    userSelection = userSelection.concat(specialCharacters);
  }

  if (userSelection.length === 0) { 
    console.log("Array is empty!") 
    alert ("Please try again, and select a character set.");
    return false;
  } 
  else {
    return true;

}
}

// If answers are valid run this function, return according to user's answers
function generatePassword() {
  var password = "";
  for (var i = 0; i < lengthInput; i++) {
    var randomIndex = Math.floor(Math.random() * userSelection.length);
    password = password + userSelection[randomIndex];
  }
  return password;
}

// Write password to the #password input
// If user answers are valid, we can generate password
function writePassword() {
  var validPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (validPrompts) {
    //  changed password to newPassword to not get confused
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    }
    else {
    passwordText.value = "";
  }
}