let triangle = (n) =>{
    for( i = 1; i <= n; i++ ){
        
        let row = "";


          for(let j = 1; j <= i; j++){

         row += "*";
         
       
          
    }
       
     console.log(row);

    }

   return "triangle printed";
   
}
triangle(9);
//this not print the return
//if you want write in  console
//console.log(triangle(9));
