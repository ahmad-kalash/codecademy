//The forecast today is 293 Kelvin the value wil never changed
const kelvin=230;
//Celsius is 273 degrees less than Kelvin.
let celsius = kelvin-273;
//this equation will calculate the forcast in fahrenheit and will round down the result 
let fahrenheit = Math.floor(celsius*(9/5)+32);
//this equation will calculate the forcast in Newton and will round down the result 
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${celsius} degrees celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)