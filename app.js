//kelvin is a tempurature measurement
const kelvin = 0;
//celcius is 273 degrees less than kelvin
const celsius = (kelvin - 273);
//formula to convert celcius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding fahrenheit down:
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
