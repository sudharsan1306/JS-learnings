//to fixed -> it takes the count only after the point

let num1 = 10.434; //10.43

let num2 = 10.445; //10.45

console.log(num2.toFixed(2));

//to precision -> it takes the count of all digit

console.log(num1.toPrecision(4)) //10.43

console.log(num2.toPrecision(4)) //10.45 