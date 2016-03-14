// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
/*
$(document).ready(function(){
  // Do stuff...
});
has a shortcut :
$(function(){
  // Do stuff...
});
*/

/* pp 161 jQuery.noConflict();
jQuery(document).ready(function($) {
  // In here, we can use $ like normal!
});
has a shortcut:
jQuery(function($) {
  // Code that uses $.
});
*/
$(document).ready(function() {
  $('#switcher h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher h3').click(function() {
    $('#switcher button').toggleClass('hidden');
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');
  $('#switcher button').click(function() {
    var bodyClass = this.id.split('-')[1];
    $('body').removeClass().addClass(bodyClass);
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
