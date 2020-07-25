//external library, Handlebars.js! A library is a collection of code that is already written that makes development easier. In the case of Handlebars, you are provided a templating engine which allows you to generate reusable HTML with JavaScript. Another benefit is that Handlebars keeps a clear separation of when you’re writing HTML or JavaScript.


//(3) grab the HTML stored in the Handlebars script.
const source = document.getElementById('ice-cream').innerHTML;

//(4) Use Handlebars.compile() to return a templating function.
const template = Handlebars.compile(source);

//(5) try to re-assign the value of flavor in the context object to 'chocolate'. Then run your code.
const context = {
  flavor: 'vanilla'
};

//(6) Pass in a context object to the templating function to get a compiled template.
const compiledHtml = template(context);

//(7) Render the compiled template onto the web page.
const iceCreamText = document.getElementById('scream');
iceCreamText.innerHTML = compiledHtml;
