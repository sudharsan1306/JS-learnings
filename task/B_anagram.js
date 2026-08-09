let str1 = "cat";
let str2 = "act";

let sort1 = str1.split("").sort().join("");
let sort2 = str2.split("").sort().join("");


let anagram = sort1 === sort2 ? "anagram" : "not a anagram"
console.log()