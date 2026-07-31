let revTriangle = (n) => {

    for (let i = 7;i >= n;i--){
        let row = "";

        for(let j = 1; j <= i; j++){

            row += "*";
        }

        console.log(row);
    }
    return "reverse Triangle"
}

console.log(revTriangle(1));