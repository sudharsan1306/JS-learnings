let str = "hello world";
let count = {};

for(let ch of str){

    if(count[ch]){
        count[ch]++;
    }
    else{
        count[ch] = 1;
    }
}
console.log(count);