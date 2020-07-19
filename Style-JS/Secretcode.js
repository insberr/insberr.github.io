// Return Key Enters
/*
secretCodeInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("codeButton").click();
    }
});

document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
*/
function secretCode(input, callback) {
    var output; output = '';
    input.split('').forEach(character => {
        switch (character.toLowerCase()) {
            case '\n': {
                return output += '<br>'
            }
            case 'a': {
                return output += '@';
            }
            case 'b': {
                return output += '/';
            }
            case 'c': {
                return output += '+';
            }
            case 'd': {
                return output += '$';
            }
            case 'e': {
                return output += '3';
            }
            case 'f': {
                return output += '&'
            }
            case 'g': {
                return output += '*'
            }
            case 'h': {
                return output += '('
            }
            case 'i': {
                return output += '8'
            }
            case 'j': {
                return output += ')'
            }
            case 'k': {
                return output += '\''
            }
            case 'l': {
                return output += '"'
            }
            case 'm': {
                return output += ':'
            }
            case 'n': {
                return output += ';'
            }
            case 'o': {
                return output += '9'
            }
            case 'p': {
                return output += '0'
            }
            case 'q': {
                return output += '1'
            }
            case 'r': {
                return output += '4'
            }
            case 's': {
                return output += '#'
            }
            case 't': {
                return output += '5'
            }
            case 'u': {
                return output += '7'
            }
            case 'v': {
                return output += '='
            }
            case 'w': {
                return output += '2'
            }
            case 'x': {
                return output += '-'
            }
            case 'y': {
                return output += '6'
            }
            case 'z': {
                return output += '%'
            }
            case '1': {
                return output += 'q';
            }
            case '2': {
                return output += 'w';
            }
            case '3': {
                return output += 'e';
            }
            case '4': {
                return output += 'r';
            }
            case '5': {
                return output += 't';
            }
            case '6': {
                return output += 'y';
            }
            case '7': {
                return output += 'u';
            }
            case '8': {
                return output += 'i';
            }
            case '9': {
                return output += 'o';
            }
            case '0': {
                return output += 'p';
            }
            case '.': {
                return output+= '?';
            }
            case '?': {
                return output += '.';
            }
            case '!': {
                return output += ',';
            }
            case ',': {
                return output += '!';
            }
            case '@': {
                return output += 'a';
            }
            case '/': {
                return output += 'b';
            }
            case '+': {
                return output += 'c';
            }
            case '$': {
                return output += 'd';
            }
            case '&': {
                return output += 'f';
            }
            case '*': {
                return output += 'g';
            }
            case '(': {
                return output += 'h';
            }
            case ')': {
                return output += 'j';
            }
            case '\'': {
                return output += 'k';
            }
            case '‘': {
                return output += 'k';
            }
            case '"': {
                return output += 'l';
            }
            case '“': {
                return output += 'l';
            }
            case ':': {
                return output += 'm';
            }
            case ';': {
                return output += 'n';
            }
            case '#': {
                return output += 's';
            }
            case '=': {
                return output += 'v';
            }
            case '-': {
                return output += 'x';
            }
            case '%': {
                return output += 'z';
            }
            case ' ': {
                return output += ' ';
            }
            default: {
                return output += ' '
            }
        }
    });
    callback(output);
}