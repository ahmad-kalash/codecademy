//1) CLASS
class Dog { //Dog is the name of our class. By convention, we capitalize and CamelCase class names.
//2) Constructor
  constructor(name) { //JavaScript will invoke the constructor() method every time we create a new instance of our Dog class. This constructor() method accepts one argument, name.
      this._name = name; //this refers to an instance of that class
      this._behavior = 0; //we create a property called behavior
    }
    
    //Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
//3) Getter
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
    
//4) Normal method
// used with every instance of this class
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  
//5) the class instantiation, create Instance of CLASS (an onject)
  const halley = new Dog('Halley');  //the class instantiation, method call will create an instance of our Dog class. (an object that contains the property names and methods of a class).

  //printing a value of object's property.
  console.log(halley.name); // Print name value to console (Halley)
  console.log(halley.behavior); // Print behavior value to console (0)
  
//6) calling a method of the instance halley.
  halley.incrementBehavior(); // Add one to behavior

  console.log(halley.name); // Print name value to console (Halley)
  console.log(halley.behavior); // Print behavior value to console (1)

  const kitty = new Dog ('Kitty'); //Create another instance of the Dog class.

  