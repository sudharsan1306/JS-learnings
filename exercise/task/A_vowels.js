let count = 0;
let vowels = [ 'a' , 'e' , 'i' , 'o' , 'u' ];

let str = "sudharsan";

for(let i of str){

    if(vowels.includes(i)){

         count++;
    }
   
}
console.log(count)