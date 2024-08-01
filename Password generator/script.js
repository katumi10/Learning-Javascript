

function generatePassword(length,includeUppercase,includeLowercase,includeNumbers,includeSymbols){

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const symbols = "!~@#$%^&*()_+-=";

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += includeUppercase ? upperCase : "";
    allowedCharacters += includeLowercase ? lowerCase : "";
    allowedCharacters += includeNumbers ? numbers : "";
    allowedCharacters += includeSymbols ? symbols : "";

     for(let i = 0; i< length; i++){
          const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
          password += allowedCharacters[randomIndex];
     }

    return password;
}

const passwordLength = 10;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,includeUppercase,includeLowercase,includeNumbers,includeSymbols);
