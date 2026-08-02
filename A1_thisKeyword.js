let student={
    //variable in array
firstName: "Sudharsan",
lastName: "M",

//function in array
studentFullname: function(){
    return this.firstName + " " + this.lastName;
}
}
console.log(student.studentFullname())

student.studentFullname.call(student);