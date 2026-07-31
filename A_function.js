// simple function program
function add(){

    let a = 2;
    let b = 23;
    return a + b;

}

let result= add();
console.log(result)

// for triangle

function triangle(){

    for(let i = 1; i <= 5; i++){
       let row = "";

        for(let j =1; j <= i; j++){
            row += "*";
        }
        console.log(row);
    }
    return "triangle printed";
}

console.log(triangle());
