// var numbers =[];


$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userValue").val();

    $("#result").text(userInput);
    $("#result").show();

  });
});

//
// Ping: (userInput % 3 === 0)
// Pong: (userInput % 5 === 0)
// PingPong: (userInput % 15 === 0)

// for (i = 0; i <= userValue; i++) {
//   if ((i % 3) === 0) {
//     push("ping");
//   } else if ((i % 5) ===0) {
//     push("pong");
//   } else if ((i % 15) === 0) {
//     push("pingpong");
//   } else {
//     alert("Please enter a number!");
//   }
// }

// Make the output a string

// var output = "";
// for (i = 1; i <= 5; i++) {
//   output += i.toString() + " ";
// }
// alert(output);
