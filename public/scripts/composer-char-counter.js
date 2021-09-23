$(document).ready(function() {
  $("textarea").on('keyup',function(event) {
    $(".error-line").hide();
    const inputLength = $(this).val().length;
    const counter = $(".counter");
    counter.text(140 - inputLength);
    if(inputLength > 140) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }  
  });
});