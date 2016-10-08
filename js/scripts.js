pingPong = function(num) {

  var numbers = [];

  for (var i = 1;i <= num; i++) {
      numbers.push(i);
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
