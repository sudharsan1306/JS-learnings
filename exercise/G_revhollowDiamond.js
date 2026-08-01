let revHollowdiamond = (n) =>{

    for(let i = n; i >= 1; i-- ){
        let row ="";

        for(let j=1; j <= n-i; j++){
            row += " ";
        }
        for(let j=1; j <= (2*i-1);j++  ){


                     if(j===1 || j === (2*i-1) || i===n){
                        row += "*";
                
            }
            else{
                row += " ";
            }
        }

   console.log(row);
    }

    
    for(let i = 2; i <= n; i++ ){
        let row ="";

        for(let j=1; j <= n-i; j++){
            row += " ";
        }
        for(let j=1; j <= (2*i-1);j++  ){


                     if(j===1 || j === (2*i-1) || i===n){
                        row += "*";
                
            }
            else{
                row += " ";
            }
        }

   console.log(row);
    }
}
revHollowdiamond(7);