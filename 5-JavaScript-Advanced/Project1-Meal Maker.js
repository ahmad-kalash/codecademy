const menu = {
    _courses :{
        appetizers: [],
        mains: [],
        desserts: []},

    get appetizers(){return this._courses.appetizers},
    set appetizers(appetizerIn){ this._courses.appetizers = appetizerIn},
    get mains(){return this._courses.mains},
    set mains(mainIn){this._courses.mains = mainIn},
    get desserts(){return this._courses.desserts},
    set desserts(dessertIn){this._courses.desserts = dessertIn},
  
    //Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
    get courses() {
      return {
        appetizers: this.appetizers, // this uses the appetizer getter method
        mains: this.mains,
        desserts: this.desserts};
    },
    
    
    //addDishToCourse()  will be used to add a new dish to the specified course on the menu.
  //The method take in three parameters: the courseName, the dishName , and the dishPrice
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish); //push the dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
    },
  
  
  //Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
    getRandomDishFromCourse(courseName) {
      const dishs = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishs.length);
      return dishs[randomIndex];
    },
    
  
    //generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert  = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} ... The price is $${totalPrice}.`;
    }
  };
  
  //Add at least 3 dishes to each course (or more if you like!).
  menu.addDishToCourse('appetizers', 'ceaser salad', 25);
  menu.addDishToCourse('appetizers', 'chease roll', 30);
  menu.addDishToCourse('appetizers', 'Roka salad', 40);
  menu.addDishToCourse('mains', 'meat', 100);
  menu.addDishToCourse('mains', 'cheken', 75);
  menu.addDishToCourse('mains', 'fish', 120);
  menu.addDishToCourse('desserts', 'konafa', 35);
  menu.addDishToCourse('desserts', 'cake', 20);
  menu.addDishToCourse('desserts', 'iceCream', 25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  