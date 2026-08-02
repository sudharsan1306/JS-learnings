let str= "hello sudhan hello";


//1.includes=> check the presence of value
console.log(str.includes("World")); //false=> boolean

//2.indexOf() → position
console.log(str.indexOf("World")); //-1
console.log(str.indexOf("hello"));  //0

//3.lastIndexof() → last position
console.log(str.lastIndexOf("hello")); //13