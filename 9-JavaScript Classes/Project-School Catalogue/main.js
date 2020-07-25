/*Let’s put your knowledge of classes to the test by creating a digital school catalog for 
the New York City Department of Education. The Department of Education wants the catalog to 
hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools. Because these classes 
share properties and methods, each will inherit from a parent School class. Our parent 
and three child classes have the following properties, getters, setters, and methods:
*/

class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(no) {
        if (typeof no === 'number')
        {
        this._numberOfStudents = no;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts(){
        console.log(this.name + ' educates '+ this.numberOfStudents + ' students at the ' + this.level + ' school level.')
    }

    static pickSubstituteTeacher(substituteTeachers){
        console.log(substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)]);
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
    set pickupPolicy(policy){
        this._pickupPolicy = policy;
    }
}

class Middle extends School{
    constructor(name, numberOfStudents){
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool  extends School {
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams  = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
    set sportsTeams(team){
        this._sportsTeams = team;
    }
}


const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);


