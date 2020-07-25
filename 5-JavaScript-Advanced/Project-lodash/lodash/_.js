const _ = {

    clamp (number, lower, upper) {
        return Math.min(Math.max(number, lower), upper);
    },

    inRange(number, start, end) {
        if (end=== undefined){
            end = start;
            start =0;
        }else if (start > end) {
            let temp = end;
            end = start;
            start =temp;
        }
        
        if(number >= start && number < end)
        {
            return true;
        } 
        return false;
    },

    words(string){
        return string.split(' ');        
    },

    pad(string, length){
        if (string.length >= length) {return string;}
        else {
            let startpadding = Math.floor(((length - string.length)/2) + string.length);
            let str =  string.padStart(startpadding, " ");
            return str.padEnd(length, " ");
            }
    },

    has(object, key) {
        return object[key]===undefined? false:true;
    },


    invert(obj){
        const array = Object.entries(obj); 
        const invertedArray = array.map (pair => {return pair.reverse()});
        return Object.fromEntries(invertedArray);
    },

    
    findKey (obj, fun){
        for (let ojcItem in obj){
            if (fun(obj[ojcItem])=== true) {
                return ojcItem;
            }             
        }
        return undefined;
    },

    drop(arr, n){
        if (n===undefined) {n=1;}
        return arr.slice(n);
    },

    dropWhile(arr, fun) {
        let n = arr.findIndex((item, index) => fun(item, index, arr)===false);
         return this.drop(arr, n);
    },

    chunk(arr, size) {
        if (size === undefined) {size=1; return arr}
        let newArray= [];
        let chunk =[];

        for (i=0; i < arr.length; i+=size)
        {
            chunk = arr.slice(i, i+size);
            newArray.push(chunk);
        } 
        return newArray;
    },










}



// Do not write or modify code below this line.
module.exports = _;