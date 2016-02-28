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
// Another way to select every cell in each row where at least one of the cells contains Henry
  $('td:contains(Henry)').parent().children().addClass('highlight');
// With the above methods, rather than traversing across the DOM to sibling elements, we travel up one level
// in the DOM to the <tr> tag with .parent(), and then select all of the row's cells with .children().
// My brain hurts, it's time for a break for breakfast.

// Chaining
// Speaking of hurting the brain, let's do a contrived example of method chaining with, like, 7 different methods:
$('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)').addClass('highlight');
// Let's do all of that in seven lines, so it really sinks in:
  $('td:contains(Henry)') // Find every cell containing "Henry"
  .parent() // Select its (the cell containing "Henry") parent
  .find('td:eq(1)') // Find the second descendant cell (JS starts numbering at 0)
  .addClass('highlight') // Add the "highlight" class
  .end() // Return to the parent of the cell containing "Henry"
  .find('td:eq(2)') // Find the third descendent cell
  .addClass('highlight'); // Add the "highlight" class
});

// Accessing DOM Elements:
/* Every selector expression and most JQuery methods return a JQuerey object.
Still, there may be points in our code when we need to access a DOM element directly.
Introducing the .get() method.
If we want to know the tag name of an element with an ID of my-element:
  var myTag = $('#my-element').get(0).tagName;
If we want to use shorthand, we can use square brackets immediately following the selector:
  var myTag = $('#my-element')[0].tagName;
*/

/*######## Exercises ########*/
$(document).ready(function() {
// Add a class of 'special' to all of the <li> elements at the second level of the nested list:
  $('#selected-plays li:not(.horizontal)').addClass('special');
// Add a class of 'year' to all of the table cells in the third column of a table:
  $('td:nth-child(3)').addClass('year');
// Add the class 'alsoSpecial' to the first table row that has the word 'Tragedy' in it:
  // $('tr:nth-child(3)').addClass('alsoSpecial');  ## Works, but I don't think it's what the author intended
  $('tr:contains(Tragedy)').first().addClass('alsoSpecial');  // That's the ticket!
/* Challenge
Select all the list items (<li>) containing a link (<a>).
Add the class 'afterlink' to the sibling list items that follow the ones selected.
*/
  $('li a').parent().nextAll().addClass('afterlink');  // I think this is what the author intended
/* Challenge
Add the class 'tragedy' to the closest ancestor <ul> of any .pdf link.
*/
  $('a[href$=".pdf"]').closest('ul').addClass('tragedy');
});
