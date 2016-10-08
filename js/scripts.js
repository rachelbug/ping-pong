pingPong = function(num) {

  var numbers = [];

  for (var i = 1;i <= num; i++) {
    if ((i % 15) === 0) {
      numbers.push("pingpong");
    } else if ((i % 5) === 0) {
      numbers.push("pong");
    } else if ((i % 3) === 0) {
      numbers.push("ping");
    } else {
      numbers.push(i);
    }
  }
  return numbers.join(", ");
}

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userValue").val();
    var result = pingPong(userInput);

    $("#result").text(result);
    $("#result").show();

  });
});
