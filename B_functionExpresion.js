//1. normal function expression
let add = function() {

    let a = 10;
    let b = 20;
    return a + b;

}

let addition = add ();
console. log(addition);


//2. simple function expression

let sub = function(a,b){
    return a-b;

}
console.log(sub(50,3))

//3.reverse triangle 

let triangle = function(){
    for (let i = 5; i >= 1; i--){
        let row = "";
    
        for(let j = 1; j <= i; j++){
         row += "*";
     
    
        }
       
        console.log(row);

        }
          return "reverse triangle"; 
        
        }

console.log(triangle());
/* triangle(); */
