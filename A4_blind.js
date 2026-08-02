function address(city){

    
        console.log(
            "Name:", this.name,
            "Age:", this.age,
            "city:", city
        );
    

}
let student ={  

        name:"Sudharsan",
        age:"22"
    }
   let details= address.bind(student,"nagapatinam")
   details();

   //bind() is a JavaScript method that returns a new function with its this value permanently bound to the specified object. Unlike call() and apply(), it does not execute the function immediately.