// Business (or back-end) logic:


// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#test").submit(function(event) {
event.preventDefault();
    var answer1 = parseInt($("#q1").val());
    var answer2 = parseInt($("#q2").val());
    var answer3 = parseInt($("#q3").val());
    var answer4 = parseInt($("#q4").val());
    var answer5 = parseInt($("#q5").val());
alert(answer1);

    var sum = answer1+answer2+answer3+answer4+answer5;


    if (sum <=5){

      $("#output").text("You are Leonard");
    } else if (sum <=10) {
      $("#output").text("You are Howard");
    }else if (sum <=15) {
      $("#output").text("You are Penny");
    }else if (sum <=20) {
      $("#output").text("You are Shedon");
    }else if (sum <=25) {
      $("#output").text("You are Raj");
    }

  });
});
