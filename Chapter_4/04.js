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
    $speech.animate({fontSize: num + 'px'}, 'slow');
    // display font size in console
    console.log($('div.speech').css('fontSize')); // ('font-size') also works
  });
});

$(document).ready(function() {
  var $firstParagraph = $('p').eq(1);
  $firstParagraph.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstParagraph.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });
});

$(document).ready(function() {
  $('div.label').click(function() {
    var paragraphWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher.css({
      position: 'relative'
    }).animate({
      borderWidth: '5px',
      left: paragraphWidth - switcherWidth,
      height: '+=20px'
    }, 'slow');
  });
});
