//some calculations of the function values
function d(val) {
    document.getElementById("result").value += val;
}


//some function are solve the values 
function solve() {
    var dataValue = document.getElementById("result").value;
    console.log(dataValue);
    let res = eval(dataValue);
    document.getElementById("result").value = res;
    console.log(res);
}


//clear the all data of the text
function clr() {
    document.getElementById("result").value = "";
}


// function checkNum declared
function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.substring(i, i + 1);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch != ")") {
                alert("Invalid Entry");
                return false;
            }
        }
    }
    return true;
}


//Add Character
function addChar(input, character) {
    if (input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}


//DeleteChar
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}


//ChangeSign
function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}


//Function Square
function square(form) {
    form.result.value = eval(form.result.value) * eval(form.result.value)
}


//Funtion Square Root
function sqrt(form) {
    form.result.value = Math.sqrt(form.result.value);
}


//Function Cube Root
function cbrt(form) {
    form.result.value = Math.cbrt(form.result.value);
}


//Function Log
function ln(form) {
    form.result.value = Math.log(form.result.value);
}


//Function Exp
function exp(form) {
    form.result.value = Math.exp(form.result.value);
}

