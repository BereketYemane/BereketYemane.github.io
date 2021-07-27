//1. Function to calculate sum of all the elements in an array .... using reduce method
function sum (input){
    return input.reduce((a,b)=>(a+b));
 }
//2. Function to calculate product of all the elements in an array ..... using reduce method 
function multiply(input){
   return input.reduce((a,b)=>(a*b));
}

//3. Function that reverses a string .... using map method
function reverseString(input){
    return input.split("").map(val=>val).reverse().join("");
}

//4. Function that returns words whose length is greater than "i" .... using filter method
function filterLongWords(arr, i){
    return arr.filter(a=>a.length>i);
}
