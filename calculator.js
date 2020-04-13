$(document).ready(function() {
    // alert("page is ready!");
    
    //created variables for the numbers, operators & result.
    // var firstNumber = 0;
    // var secondNumber = 0;
    // var operator = "";
    // var result = 0;
    // var operatorPressed = false;
    // var resultPressed = false;

    // function clearResult() {
    //    firstNumber = "";
    //    secondNumber = "";
    //    operator = "";
    //    operatorPressed = false;
    //    resultPressed = false;
       
    //    }
    //setting up different operating functions of calculator
    function getHistory () {
        return document.getElementById("history-value").innerText;
    }
    function printHistory () {
        return document.getElementById("history-value").innerText=num;
    }
    function getOutput () {
        return document.getElementById("output-value").innerText;
    }
    function printOutput (num) {
        if (num == "") {
            return document.getElementById("output-value").innerText=num;

        }
        else {
            document.getElementById("output-value").innerText=getFormattedNumber(num);
        }
    }
    function getFormattedNumber (num) {
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
    }
    // printOutput("77777");
    function reverseNumberFormat (num) {
        return Number(num.replace(/,/g, ''));
    }
    // alert(reverseNumberFormat(getOutput()));
    var operator = $(".operator");
    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', function() {
            // alert("operator was clicked!!" + this.id);
        })
    }
    var number = $(".number");
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener('click', function() {
            // alert("number was clicked!!" + this.id);
            var output = getNumber(getOutput());
            if (output != NaN){
                output = output + this.id;
                printOutput(output);
            }
        })
    }
});