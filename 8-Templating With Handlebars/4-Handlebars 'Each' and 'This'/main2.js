const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

//the languages array with 3 objects. Each object will have a name property and time property. The values for the name are: 'HTML', 'CSS', 'JavaScript'. the time are: 30. 40, 60.
const context = {
    languages: [{name: 'HTML', time: 30}, {name: 'CSS', time: 40}, {name:'JavaScript', time: 60}]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
