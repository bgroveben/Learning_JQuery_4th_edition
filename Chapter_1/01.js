// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// Find the poem text, inject the new class, and execute the code:
$(document).ready(function() {
  $('div.poem-stanza').addClass('highlight');
});

/* There is more than one way to skin a cat (The result is identical):
##! The .ready() method's parameter can accept a reference to an already defined function, as in:

function addHighlightClass() {
  $('div.poem-stanza').addClass('highlight');
}
$(document).ready(addHighlightClass);

##! The method can also accept an anonymous function, like so:

$(document).ready(function() {
  $('div.poem-stanza').addClass('highlight');
});
*/

// Wanna do the same thing in Javascript, but without
// - Properly respecting other window.onload event handlers
// - Acting as soon as the DOM is ready
// - Optimizing element retrieval and other tasks with modern DOM methods?
// Here goes:
/*
window.onload = function() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    if (hasClass(divs[i], 'poem-stanza') && !hasClass(divs[i], 'highlight')) {
      divs[i].className += ' highlight';
    }
  }

  function hasClass( elem, cls ) {
    var reClass = new RegExp(' ' + cls + ' ');
    return reClass.test(' ' + elem.className + ' ');
  }
};
*/

// Want to interact with the dev tools console directly from the code in the current file?
// Let's do some console.log() statements:
$(document).ready(function() {
  console.log('hello');
  console.log(52);
  console.log($('div.poem-stanza'));
});
