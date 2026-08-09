//I. add function 
let add = ["ranjini", "kamal" , "vijay", "ajith"];


//1.push -> it add the value at the end
add.push("surya");
console.log("add==>",  add);

//2.unshift -> it add the value at the first
add.unshift("mgr");
console.log("add==>", add);

////I. del function 

let del = ["ranjini", "kamal" , "vijay", "ajith"];

//3.pop -> it delete the valu at the end
del.pop();
console.log("del==>", del);

//4.shift -> it delete the value at the first
del.shift();
console.log("del==>", del);

//III. search

let search = ["ranjini", "kamal" , "vijay", "ajith"];

//5. indexof -> *it print the index value of the element
        
console.log("search==>", search.indexOf("vijay"));


//6. includes() -> it is a boolean function
          // -> it returns true , if the element is present
console.log("search==>", search.includes("vijay"));

//IV. cut and replace

let modify = ["ranjini", "kamal" , "vijay", "ajith"];

//7.slice ->to print the particular element
        //-> using (start index,count value(count the array begin ))

console.log("slice==>", modify.slice(1,2));

//8.splice ->to print the particular element
        //-> using (start index,length of value(count the value from start index))

        console.log("splice==>", modify.splice(1,2));

//v.string conversion
let str = ["ranjini", "kamal" , "vijay", "ajith"];

//9. toString() -> to convert the array into string
 console.log("string==>", str.toString());

 //10. join() -> to join the string values (after convert to string)
        //    ->to makes the special character b/w the each  element
    console.log("join==>", str.join("-"));
