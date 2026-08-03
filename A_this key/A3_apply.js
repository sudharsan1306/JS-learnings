function address(city,state){

    
        console.log(
            "Name:", this.name,
            "Age:", this.age,
            "city:", city,
            "state:", state,
        );
    

}
let student ={  

        name:"Sudharsan",
        age:"22"
    }

    //cal( )
   // address.call(student,"nagapatinam", "Tamil Nadu")

   //apply()
       address.apply(student,["nagapatinam", "Tamil Nadu",])