function updateCharacterCount() {
    document.getElementById("characterCount").innerText = document.getElementById("numCharacters").value
    
}
function generateCharacters() {
    var numCharacters = parseInt(document.getElementById("numCharacters").value);
    var charactersDiv = document.getElementById("characters");
    charactersDiv.innerHTML = '';
    
    var char = ""
    var password = ""
    // var userInput = +prompt("Enter how many numbers of password you want?")
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var digitChars = "0123456789"
    var specialChars = "@#$%^&*()_+{}[]|:;<>,.?/~"
    if (document.getElementById("lowercase").checked) {
        char += lowercaseChars 
    }
    if (document.getElementById("uppercase").checked) {
        char += uppercaseChars
    }
    if (document.getElementById("digits").checked) {
        char += digitChars
    }
    if (document.getElementById("special").checked) {
        char += specialChars
    }
    for (var j = 0; j < numCharacters; j++) {
        var character = char.charAt(Math.floor(Math.random() * char.length));
        charactersDiv.innerHTML += character;
    }
    document.getElementById("input").value = password
    
}


// function generatePassword() {
//     var length = 12;
//     var charset = "";
//     var password = "";
//     var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var digitChars = "0123456789";
//     var specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~";

//     if (document.getElementById("lowercase").checked)
//         charset += lowercaseChars;
//     if (document.getElementById("uppercase").checked)
//         charset += uppercaseChars;
//     if (document.getElementById("digits").checked)
//         charset += digitChars;
//     if (document.getElementById("special").checked)
//         charset += specialChars;

//     for (var i = 0; i < length; i++) {
//         password += charset.charAt(Math.floor(Math.random() * charset.length));
//     }

//     document.getElementById("password").value = password;
// }

// document.getElementById("showPassword").addEventListener("click", function() {
//     var passwordField = document.getElementById("password");
//     if (this.checked) {
//         passwordField.type = "text";
//     } else {
//         passwordField.type = "password";
//     }
// });