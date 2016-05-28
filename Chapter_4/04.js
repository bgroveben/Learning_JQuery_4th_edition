// You should know the drill by now.
// Refer to the previous chapters if you get confused.

$(document).ready(function() {
  var $speech = $('div.speech');
  // save initial font size to be used when the 'Default' button is clicked
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    // use parseFloat to get the font size property's numeric value only and exclude the 'px' at the end
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      // increase font size by 40%
      case 'switcher-large':
        num *= 1.4;
        break;
      // decrease font size by 40%
      case 'switcher-small':
        num /= 1.4;
        break;
      // revert to initial font size
      default:
        num = parseFloat(defaultSize);
    }
    // don't forget to put the 'px' at the end
    $speech.css('fontSize', num + 'px');
    // display font size in console
    console.log($('div.speech').css('fontSize')); // ('font-size') also works
  });
});

$(document).ready(function() {
  $('p').eq(1).hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $('p').eq(1).show();
    $(this).hide();
  });
});
