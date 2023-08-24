
/* Created a function for the writePassword function to call */
function generatePassword() {
/* Defined variables for pw criteria */
    const lowerCase = ["a","b","c","d","e","f","g","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const number = ["0","1","2","3","4","5","6","7","8","9"];
    const specialChar = ["!","@","#","$","%","^","&","*","(",")"];
/* Created empty array */
    let emptyArray = [""];
    let password = [""];
/* Established min and max password length */
    let pwLength = prompt("How long would you like your password to be?");
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        alert('Password length must be provided as a number. Must be between 8 to 128 characters.');
    }
/* yes/no questions for users to select password criteria. if they click ok, returns value of true. if they click cancel, returns value of false. */
    else {
    var lowerCaseSelect = confirm("Do you want to use lowercase letters in your password?");
    var upperCaseSelect = confirm("Do you want to use uppercase letters in your password?");
    var numberSelect = confirm("Do you want to use numbers in your password?");
    var specialCharSelect = confirm("Do you want to use special characters in your password?");
    }

    if (lowerCaseSelect) {
        emptyArray = emptyArray.concat(lowerCase);
    }

    if (upperCaseSelect) {
        emptyArray = emptyArray.concat(upperCase);
    }

    if (numberSelect) {
        emptyArray = emptyArray.concat(number);
    }

    if (specialCharSelect) {
        emptyArray = emptyArray.concat(specialChar);
    }

/* Alert for when no password criteria is selected; happens when lowercase, uppercase, number, selectchar are all false. */
    if (!lowerCaseSelect && !upperCaseSelect && !numberSelect && !specialCharSelect) {
        alert ('Must select at least one: lowercase, uppercase, number, special character to be used in password. Please try again.');
    }

    emptyArray = emptyArray.toString();
/* generates password: random character generated one by one (keeping the previous character(s)) until the number of characters satifies the same amount of password length input by user */
    for (i = 0; i < pwLength; i++) {
        password += emptyArray[Math.floor(Math.random() * emptyArray.length)];
    }
    return password;
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