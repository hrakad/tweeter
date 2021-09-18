$(document).ready(function() {
  $("textarea").on('keyup',function(event) {
    const inputLength = $(this).val().length;
    const counter = $(".counter");
    if(inputLength > 140) {
      counter.addClass("red")
    } 
      counter.text(140 - inputLength);
  });
});