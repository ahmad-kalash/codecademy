const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

//the languages array with 4 objects. with modern property false in one of them.
const context = {
    languages: [
    {
        name: 'HTML',
        time: 30,
        modern: true
    },
    {
        name: 'CSS',
        time: 40,
        modern: true
    },
    {
        name:'JavaScript',
        time: 60,
        modern: true
    },
    {
        name:'GOBAL',
        time: 60,
        modern: false
    }
]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
