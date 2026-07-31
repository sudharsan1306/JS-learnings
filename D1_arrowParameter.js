
let result = (a,b) => {
    let add = a + b;
    let sub = a - b;
    let multi = a * b;

    return{
        "addResult" : add,
        "subresult" : sub,
        "multiresult" : multi
    }

   
}
 
let calResult = result(60,50);

console.log(calResult)