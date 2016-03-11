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
  $('#switcher-default')
  .addClass('selected')
  .on('click', function(){
    $('body').removeClass('narrow');
    $('body').removeClass('large');
  });
  $('#switcher-narrow').on('click', function(){
    $('body').addClass('narrow');
    $('body').removeClass('large');
  });
  $('#switcher-large').on('click', function(){
    $('body').removeClass('narrow');
    $('body').addClass('large');
  $('#switcher button').on('click', function(){
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
