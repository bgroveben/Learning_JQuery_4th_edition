// You should know the drill by now.
// Refer to the previous chapters if you get confused.

$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher-large').click(function() {
    var num = parseFloat($speech.css('fontSize'));
  });
});
