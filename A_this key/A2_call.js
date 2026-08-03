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
    address.call(student,"nagapatinam")