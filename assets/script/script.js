// Assignment Code
/* ## Acceptance Criteria
// I will click generate button
// then I will be asked for pw criteria
// i will ask user for pw length, casing,
// numbers, or special characters
// after i collect criteria, at least one 
// casing, numbers or special char must be true
// if all are false, im going to tell them they
// must choose at least one 
// when criteria is satisfied, i will generate pw
// once pw is generated, i will display it on 
// screen for the user

// define variables with arrays
// var with empty array
// var w name password = empty array from ln 16

// for loop
// Math.floor(Math.random() * array.length) 

// if, else if
// 2 array methods array.push array.join
*/

/* Creating a function for the writePassword function to call */
function generatePassword() {
/* Defining variables for pw criteria */
    const lowerCase = ["a","b","c","d","e","f","g","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const number = ["0","1","2","3","4","5","6","7","8","9"];
    const specialChar = ["!","@","#","$","%","^","&","*","(",")"];
/* Creating empty array */
    const emptyArray = [];
    const password = [];
/* Establishing min and max password length */
    //let pwLength = (); // find verbage for user input other than confirm

    let lowerCaseSelect = confirm("Do you want to use lowercase letters in your password?");
    if (lowerCaseSelect) {
        emptyArray.concat(lowerCase);
    }
    let upperCaseSelect = confirm("Do you want to use uppercase letters in your password?");
    if (upperCaseSelect) {
        emptyArray.concat(upperCase);
    }
    let numberSelect = confirm("Do you want to use nunbers in your password?");
    if (numberSelect) {
        emptyArray.concat(number);
    }
    let specialCharSelect = confirm("Do you want to use lowercase letters in your password?");
    if (specialCharSelect) {
        emptyArray.concat(specialChar);
    }

function createPassword(){
    let password = "";
    Math.random() * (max - min) + max + min;
    //Math.floor(Math.random) goes here
}


}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);