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
// Styling alternate rows:
// $('tr:even').addClass('alt');
// The above line could also be written as:
// $('tr').filter(':even').addClass('alt');  # the filter method can take a function as its argument.
// The above lines of code will highlight alternate rows through all tables, but what if you have multiple tables and
// you want to be sure that highlighting starts with the first element in each table?
// nth-child selectors to the rescue, sucka!
// nth-child selectors count an element's position relative to its parent element rather than relative to the elements
// selected so far, as demonstrated with:
  $('tr:nth-child(odd)').addClass('alt');
// The nth-child selector can take a number, odd, or even as its argument.

// Finding elements based on textual content:
// Let's suppose that for some reason we want to highlight any table cell that referred to one of the Henry plays:
  $('td:contains(Henry)').addClass('highlight');
// Note that the contains selector is case-sensitive.

// Traversing the DOM
// For example, we want to add a class to all external links.
// JQuery has no selector for this sort of case, but remember the filter method from above?
// Rather than looping through each element, we can use the filter function along with JQuery's implicit iteration.
  $('a').filter(function() {
    return this.hostname && this.hostname != location.hostname;
  }).addClass('external');
// In that second line, the <a> elements must:
//   have an href attribute with a domain name (this.hostname); this excludes, for example, mailto links.
//   not match (!=) the domain name of the current page (this.hostname)
//   with the domain name that they link to (location.hostname).
/*  More precisely:
The filter method iterates through the matched set of elements, calling the function once for each and testing the return
value. If the function returns, false, the element is removed from the matched set. If it returns true, the element is
kept.
*/

// Styling specific cells:
// Remember adding the highlight class to all cells containing Henry?
// Now, instead, we are going to style the cell next to each cell containing Henry:
  $('td:contains(Henry)').next().addClass('highlight');
// The .next() method selects only the very next sibling element.
// To highlight all of the cells following the one containing Henry, we can use the .nextAll() method instead.
  $('td:contains(Henry)').nextAll().addClass('highlight');
// Now, to confuse you some more;
// To include the original cell containing Henry, along with the cells that follow, we can use the addBack() method:
  $('td:contains(Henry)').nextAll().addBack().addClass('highlight');  // Likin' the method chaining?
// And, because overdoing it is how we roll:
// Another way to select every cell in each row where at least one of the cells contains HenryL
  $('td:contains(Henry)').parent().children().addClass('highlight');
// With the above methods, rather than traversing across the DOM to sibling elements, we travel up one level
// in the DOM to the <tr> tag with .parent(), and then select all of the row's cells with .children().
// My brain hurts, it's time for a break for breakfast.

// Chaining
});
