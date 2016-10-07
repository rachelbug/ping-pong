// var numbers = [];
//
// // pingPongFunction = function(input) {
// //   for (var i = 1;i <= userValue; i++) {
// //     if ((i % 3) === 0) {
// //       numbers.push("ping");
// //     } else if ((i % 5) ===0) {
// //       numbers.push("pong");
// //     } else if ((i % 15) === 0) {
// //       numbers.push("pingpong");
// //     } else {
//       numbers.push(i);
// //     }
// //   }
// // }

// var numbers = [];
//
// pingPongFunction = function(input) {
//   for (var i = 1;i <= input; i++) {
//     numbers.push(i);
//     }
//  numbers += i.toSlice();
    alert(numbers);
//   }

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userValue").val();
    // var result = pingPongFunction(userValue);

    $("#result").text(userInput);
    $("#result").show();

  });
});
