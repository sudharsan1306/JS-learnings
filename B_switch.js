let age = 5;
let level;
 
if(age>=18){
     level= 'adult';
}
 else if(age>=14){
     level= 'tenager';
}
 else if(age>=9){
     level= 'schoolboy' ;
}
else{
    level= 'child';
}

switch(level){
          case "adult":
            console.log("eligible for work");
            break;

            case "tenager":
            console.log("eligible for college");
            break;

            case "schoolboy":
            console.log("eligible for school");
            break;

            case "child":
            console.log( "new child");
            break;

            default:
               console.log( "invalid level");
}
