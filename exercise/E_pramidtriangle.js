//for declaration

for(let i = 1; i <= 5; i++) {

    let row = "";

    // for space of strating

     for(let j = 1; j <= 5 - i; j++ ){

        row += " ";

     }  
    

    // for star value to print 

    for(let j =1; j <= (2*i - 1) ; j++) {

        row += "*";
    }
    console.log  (row)
}