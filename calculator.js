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
    function printOutput () {
        return document.getElementById("output-value").innerText=num;
    }
});