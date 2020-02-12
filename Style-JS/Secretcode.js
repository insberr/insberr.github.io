// Retern Key Enters
secretCodeInputEncode.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("codeEncodeButton").click();
    }
});

secretCodeInputDecode.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("codeDecodeButton").click();
    }
});

//function buttonSecretCodeEncode() {
    var makeLowerE = document.getElementById("secretCodeInputEncode").value;
    var secretCodeEncode = makeLowerE.toLowerCase();
    var code = secretCodeEncode.replace(/a/g, "@");
    var code = code.replace(/b/g, "/");
    var code = code.replace(/c/g, "+");
    var code = code.replace(/d/g, "$");
    var code = code.replace(/e/g, "3");
    var code = code.replace(/f/g, "&");
    var code = code.replace(/g/g, "*");
    var code = code.replace(/h/g, "(");
    var code = code.replace(/i/g, "8");
    var code = code.replace(/j/g, ")");
    var code = code.replace(/k/g, "'");
    var code = code.replace(/l/g, "\"");
    var code = code.replace(/m/g, ":");
    var code = code.replace(/n/g, ";");
    var code = code.replace(/o/g, "9");
    var code = code.replace(/p/g, "0");
    var code = code.replace(/q/g, "1");
    var code = code.replace(/r/g, "4");
    var code = code.replace(/s/g, "#");
    var code = code.replace(/t/g, "5");
    var code = code.replace(/u/g, "7");
    var code = code.replace(/v/g, "=");
    var code = code.replace(/w/g, "2");
    var code = code.replace(/x/g, "-");
    var code = code.replace(/y/g, "6");
    var code = code.replace(/z/g, "%");
    var code = code.replace(/\./g, "?");
    var code = code.replace(/\?/g, ".");
    var code = code.replace(/!/g, ",");
    var code = code.replace(/\,/g, "!");
    var code = code.replace(/ /g, " ");
    document.getElementById("outputSecretCode").innerHTML = code;
}

//function buttonSecretCodeDecode() {
    var secretCodeDecode = document.getElementById("secretCodeInputDecode").value;
    var code = secretCodeDecode.replace(/1/g, "q");
    var code = code.replace(/2/g, "w");
    var code = code.replace(/3/g, "e");
    var code = code.replace(/4/g, "r");
    var code = code.replace(/5/g, "t");
    var code = code.replace(/6/g, "y");
    var code = code.replace(/7/g, "u");
    var code = code.replace(/8/g, "i");
    var code = code.replace(/9/g, "o");
    var code = code.replace(/0/g, "p");
    var code = code.replace(/@/g, "a");
    var code = code.replace(/\//g, "b");
    var code = code.replace(/\+/g, "c");
    var code = code.replace(/\$/g, "d");
    var code = code.replace(/&/g, "f");
    var code = code.replace(/\*/g, "g");
    var code = code.replace(/\(/g, "h");
    var code = code.replace(/\)/g, "j");
    var code = code.replace(/\'/g, "k");
    var code = code.replace(/\’/g, "k");
    var code = code.replace(/\”/g, "l");
    var code = code.replace(/\"/g, "l");
    var code = code.replace(/\:/g, "m");
    var code = code.replace(/\;/g, "n");
    var code = code.replace(/#/g, "s");
    var code = code.replace(/=/g, "v");
    var code = code.replace(/-/g, "x");
    var code = code.replace(/%/g, "z");
    var code = code.replace(/\./g, "?");
    var code = code.replace(/\?/g, ".");
    var code = code.replace(/!/g, ",");
    var code = code.replace(/\,/g, "!");
    var code = code.replace(/ /g, " ");
    document.getElementById("outputSecretCode").innerHTML = code;
}