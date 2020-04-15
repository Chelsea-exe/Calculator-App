$(document).ready(function() {

    // alert("page is ready!");



    // function displayButton(button) {
    //     $()
    // }
    //created variables for the numbers, operators & result.
    var num1 = "";
    var num2 = "";
    var operator = "";
    var total = "";

    function handleNumber(num) {
        if (num1 === '') {
            num1 = num;
        }
        else {
            num2 = num;
        }
        displayButton(num);
    }

    function handleOperator(oper) {
        if (operator === '') {
            operator = oper;
        }
        else {
            handleTotal();
            operator = oper;
        }
    }


    $('button').on('click', function(e) {
        var button = e.target.innerHTML;
        if (button >= '0' && button <= '9') {
            handleNumber(button)
            console.log('number');
        }
        else {
            handleOperator(button)
            console.log('operator')
        }
        // console.log('e', e.target.innerHTML);
    });

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