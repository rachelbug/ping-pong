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
