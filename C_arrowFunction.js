/* //1. normal arrow function

let add = () =>{

    let a = 1;
    let b = 2;

    return a+b;
}

let  addition = add();

console.log( addition );

//2. simplified arrow function

let sub = () => 3-1
   

let subraction = sub();

console.log(subraction);

//3. more simplified

let multi = () => 3*10

 console.log(multi()); */

 //4. triangle

 let triangle = () => {
    for(let i = 1; i <= 5; i++){
        let row = "";

         for (let j = 1; j <= i; j++){
            row += "*";
            
         }
          
          console.log(row);
        }
       
        return"arrow triangle";
 } 

  triangle();
  //console.log(triangle());




