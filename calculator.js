$(document).ready(function() {

    // alert("page is ready!");
    
    $('button').on('click', function(e) {
        console.log('e', e.target.innerHTML);
    });
    //created variables for the numbers, operators & result.
    var num1 = "";
    var num2 = "";
    var operator = "";
    var equalCalculation = "";

    // function handleNumber(num) {
    //     if (num === '') {
    //         num1 = num;
    //         else {
    //             num2 = num;
    //         }
    //     }
    // }
    //resetCalculator function reset calculator when user presses the "clear" button.



    //setting up different operating functions of calculator
//     function getHistory () {
//          document.getElementById("history-value").innerText;
//     }
//     function printHistory (num) {
//         return document.getElementById("history-value").innerText=num;
//     }
//     function getOutput () {
//         return document.getElementById("output-value").innerText;
//     }
//     function printOutput (num) {
//         if (num == "") {
//             return document.getElementById("output-value").innerText=num;

//         }
//         else {
//             document.getElementById("output-value").innerText=getFormattedNumber(num);
//         }
//     }
//     function getFormattedNumber (num) {
//         if (num == "-") {
//             return "";
//         }
//         var n = Number(num);
//         var value = n.toLocaleString("en");
//         return value;
//     }
//     // printOutput("77777");
//     function reverseNumberFormat (num) {
//         return Number(num.replace(/,/g, ''));
//     }
//     // alert(reverseNumberFormat(getOutput()));
//     var operator = document.getElementsByClassName("operator")
//     for (var i = 0; i < operator.length; i++) {
//         operator[i].addEventListener('click', function() {
//             // alert("operator was clicked!!" + this.id);
//             if (this.id == "clear") {
//                 printHistory("");
//                 printOutput("");
//             }
//         });
//     }
//     var number = document.getElementsByClassName("number");
//     for (var i = 0; i < number.length; i++) {
//         number[i].addEventListener('click', function() {
//             // alert("number was clicked!!" + this.id);
//             var output = reverseNumberFormat(getOutput());
//             if (output != NaN){
//                 output = output + this.id;
//                 printOutput(output);
//             }
//         })
//     }
});