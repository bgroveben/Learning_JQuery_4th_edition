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

$(document).ready(function(){
  $('#switcher-large').on('click', function(){
    $('body').addClass('large');
  });
});
