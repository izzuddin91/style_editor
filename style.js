// Shorthand for document ready
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var cssSelector = $(this).find("input")[0].value;
    var cssProperty = $(this).find("input")[1].value;
    var cssValue = $(this).find("input")[2].value;
    $(document).find(cssSelector).css(cssProperty, cssValue);
    // debugger
  });
});