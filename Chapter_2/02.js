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
/* To add a class for all e-mail links, we construct a selector that looks for all anchor elements (a)
with an href attribute([href]) that begins with mailto:(^="mailto:"), as follows:
*/
  $('a[href^="mailto:"]').addClass('mailto');
// To add a class for all the links to PDF files, we use the dollar sign($) rather than the caret symbol(^).
// This is because we're selecting links with an href attribute that ends with .pdf:
  $('a[href$=".pdf"]').addClass('pdflink');
// Attribute selectors can be combined as well.
// We can add the class henrylink to all links with an href value that both starts with http and contains henry anywhere:
  $('a[href^="http"][href*="henry"]').addClass('henrylink');
});
