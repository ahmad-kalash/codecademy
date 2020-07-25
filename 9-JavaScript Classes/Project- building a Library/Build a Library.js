
class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }
    set isCheckedOut(key){
        this._isCheckedOut = key;
    }

    get ratings(){
        return this._ratings;
    }

    getAverageRating(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this._ratings.reduce(reducer) / this.ratings.length;
    }

    toggleCheckOutStatus(){
        if (this.isCheckedOut)
        {
            this.isCheckedOut = false;
        }else {
            this.isCheckedOut = true;
        }
    }

    addRating(rate){
        if(rate>0 && rate <5)
        {this.ratings.push(rate);}
    }
}

class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast; 
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    
    //Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    shuffle(){
        const shuffled = [];
        const rand = Math.floor(Math.random()*(this.songs.length-1));
        let index = rand+1;
        shuffled.push(this.songs[rand]);
        do{
            shuffled.push(this.songs[index]);
            index++;
            if(index === this.songs.length){index=0;}
        } while(index != rand)
        return shuffled
    }

}

/*
Create a Book instance with the following properties:

Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
Save the instance to a constant variable named historyOfEverything.
*/
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();  //Call .toggleCheckOutStatus() on the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut); //Log the value saved to the isCheckedOut property in the historyOfEverything instance.

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

/*
Create a Movie instance with the following properties:

Director: 'Jan de Bont'
Title: 'Speed'
Runtime: 116
Save the instance to a constant variable named speed.
*/
const speed = new Movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus(); //Call .toggleCheckOutStatus() on the speed instance.
console.log(speed.isCheckedOut); //Log the value saved to the isCheckedOut property in the speed instance.

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating()); //Call .getAverageRating() on speed. Log the result to the console.

const diab = new CD ('diab', 'Jamer', ['alo', 'bahebak', 'bakrahak', 'ent leya', 'ana ksdjlaksd']);
console.log(diab.shuffle()); 