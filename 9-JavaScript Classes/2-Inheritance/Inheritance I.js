/*When multiple classes share properties or methods, they become candidates for inheritance — 
a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) 
with properties and methods that multiple child classes (also known as subclasses) share. 
The child classes inherit the properties and methods from their parent class. */

//In the next few exercises, you will create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee

//Static Methods
//Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
      return this._name;
    }

    get remainingVacationDays() {
      return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }

    static generatePassword(){ //create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000. this method you can call it directly from the class, but not from an instance of the class.
        return Math.floor(Math.random() * 10000)
    }

    
}

//we create a new class named Doctor that extends the HospitalEmployee class. Let’s pay special attention to our new keywords: extends and super.
class Doctor extends HospitalEmployee {  //The extends keyword makes the methods of the HospitalEmployee class available inside the Doctor class.
        constructor(name){
            supper(name); //The super keyword calls the constructor of the parent class. In this case,  //you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.
            this._insurance = false;  //_insurance is a new property that is unique to the Doctor class, so we set it in the Doctor constructor
    }

}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }

    addCertification(newCertification){  //The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse’s certifications array.
        this._certifications.push(newCertification) ; 
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']); //create a new instance of Nurse and save it to a constant variable named nurseOlynyk
  nurseOlynyk.takeVacationDays(5);  //Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.
  console.log(nurseOlynyk.remainingVacationDays); //og the value saved to the remainingVacationDays property in nurseOlynyk.
  
  nurseOlynyk.addCertification('Genetics'); //call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.
  console.log(nurseOlynyk.certifications);  //Log the value saved to the certifications property of nurseOlynyk.
