// You should know the drill by now.
// Refer to the previous chapters if you get confused.

$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher-large').click(function() {
    // use parseFloat to get the font size property's numeric value only and exclude the 'px' at the end
    var num = parseFloat($speech.css('fontSize'));
    // increase font size by 40%
    num *= 1.4;
    $speech.css('fontSize', num + 'px');
    // display font size in console
    console.log($('div.speech').css('fontSize')); // ('font-size') also works
  });
});
