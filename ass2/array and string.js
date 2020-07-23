console.log("ass2q.2");
//initialization of array 
var arr=["hii,how,are,you"];
console.log(arr);

//push an array
arr.push("i,am,fine");
console.log(arr);

arr.unshift("ajay")
console.log(arr)

// remove from an array
console.log(arr.pop())
console.log(arr);
console.log(arr.shift());

//To merge to array
let arr3=["hii,bye,good,bad,sweet"]
console.log(arr3.concat(arr));

//add string
arr3.splice(0,3,2,"a","v","c");
console.log(arr3);



//string initialization
var str="aman is good boy";
var str1='vikas';
var str3=`is bad`;
console.log(str,str1,str3);

//to check type of str
console.log(typeof(str))


//to check th lenght
console.log(str.length);

//to check the word
console.log(str.endsWith("boy"));
console.log(str.includes("world"));

//to lowercase and uppercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// to chcek index
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("o"));

//to add two string
let str2="hii"
console.log(str.concat(" ",str2));
console.log(str2.concat(" ",str));

//to replace
var n=str.replace(" hii");
console.log(n);

console.log(str.split(","))






document.write("<h1>thank you<h1>")