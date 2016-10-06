// var numbers = [];
//
// // pingPongFunction = function(input) {
// //   for (i = 0; i <= userValue; i++) {
// //     if ((i % 3) === 0) {
// //       numbers.push("ping");
// //     } else if ((i % 5) ===0) {
// //       numbers.push("pong");
// //     } else if ((i % 15) === 0) {
// //       numbers.push("pingpong");
// //     } else {
// //       alert("Please enter a number!");
// //     }
// //   }
// // }


$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userValue").val();

// I have the user input value, I need to make this into an array where all of the array is returned.

    var newUserInput = userInput.toString() + " ";

    $("#result").text(newUserInput);
    $("#result").show();

  });
});

// Make the output a string

// var output = "";
// for (i = 1; i <= 5; i++) {
//   output += i.toString() + " ";
// }
// alert(output);
