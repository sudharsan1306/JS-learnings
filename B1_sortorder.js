/* let num1 = [80, 50, 90 , 20, 90, 60];

//ascending orde
console.log(num1.sort((a,b)=>a-b));
//desending order
console.log(num1.sort((a,b)=>b-a));

let num2= [50,80, 50, 90 , 20, 9];
console.log(num2.sort())
 */

function fact(n){
    if(n==0){
        return 1
    }

    return n+fact(n-1)
}
console.log(fact(5))