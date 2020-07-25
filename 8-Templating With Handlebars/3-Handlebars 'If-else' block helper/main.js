const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

//try to re-assign the value of opinion in the context object to flase. Then run your code.
const context = {opinion: true};

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;
