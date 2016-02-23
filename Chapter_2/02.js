// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

/* Below we use the child combinator (>) to add the horizontal class to all of the top-level items only.
In effect, the selector inside the $() function is saying "Find each list item(li) that is a child(>)
of the element with an ID of selected-plays(#selected-plays)."
*/
$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
// One way to select all sub-level (everything not top-level) items is to use a negation pseudo-class.
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
/* The above line selects every <li> that:
  Is a descendant of the element with an ID of selected-plays(#selected-plays)
  Does not have a class of horizontal (:not(.horizontal))
*/
});
