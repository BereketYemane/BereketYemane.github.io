// Master function to put things in the html
// All functions are tested using true and false conditions
function masterFunction() {
    //1. max of two
    document.getElementById("max2_1").innerHTML = "Expected output of maxOfTwo(20, 10) is 20 ... " + testFunction(20, maxTwo(20, 10));
    document.getElementById("max2_2").innerHTML = "Expected output of maxOfTwo(20, 10) is 10 ... " + testFunction(10, maxTwo(20, 10));
    document.getElementById("max2_1").style.padding="10px";
    document.getElementById("max2_2").style.padding="10px";
    //2. max of three
    document.getElementById("max3_1").innerHTML = "Expected output of maxOfThree(9, 5, 9) is 9 ... " + testFunction(9, maxThree(9, 5, 9));
    document.getElementById("max3_2").innerHTML = "Expected output of maxOfThree(11, 13,15) is 13 ... " + testFunction(13, maxThree(11, 13, 15));
    document.getElementById("max3_1").style.padding="10px";
    document.getElementById("max3_2").style.padding="10px";
    //3. character is vowel
    document.getElementById("vowel_1").innerHTML = "Expected output of isVowel(\"E\") is true ... " + testFunction(true, isVowel("E"));
    document.getElementById("vowel_2").innerHTML = "Expected output of isVowel(\"F\") is true ... " + testFunction(true, isVowel("F"));
    document.getElementById("vowel_1").style.padding="10px";
    document.getElementById("vowel_2").style.padding="10px";
    //4. sum and multiples of arrays
    var x = [1, 2, 3, 4];
    var y = [2, 3, 2];
    document.getElementById("sum1").innerHTML = "Expected output of sum([1, 2, 3, 4]) is 10 ... " + testFunction(10, sum(x));
    document.getElementById("sum2").innerHTML = "Expected output of sum([2, 3, 2]) is 5 ... " + testFunction(5, sum(y));
    document.getElementById("sum1").style.padding="10px";
    document.getElementById("sum2").style.padding="10px";

    document.getElementById("mult1").innerHTML = "Expected output of multiply([1, 2, 3, 4]) is 24 ... " + testFunction(24, multiply(x));
    document.getElementById("mult2").innerHTML = "Expected output of multiply([2, 3, 2]) is 11 ... " + testFunction(11, multiply(y));
    document.getElementById("mult1").style.padding="10px";
    document.getElementById("mult2").style.padding="10px";

    //5. reverse string
    document.getElementById("rev1").innerHTML= "Expected output of reverse(\"Bereket Yemane\") is enameY tekereB ... " + testFunction("enameY tekereB",reverse("Bereket Yemane"));
    document.getElementById("rev2").innerHTML= "Expected output of reverse(\"Hi wap\") is pawHi ... " + testFunction("pawHi",reverse("Hi wap"));
    document.getElementById("rev1").style.padding="10px";
    document.getElementById("rev2").style.padding="15px";

    //6. find Longest word count
    var words=["Hi","Bereket","Yemane"];
    var words1=["how", "are","you","today"];
    document.getElementById("long1").innerHTML= "Expected output of findLongestWord([\"Hi\", \"Bereket\", \"Yemane\"]) is 7 ... " + testFunction(7,findLongestWord(words));
    document.getElementById("long2").innerHTML= "Expected output of findLongestWord([\"how\", \"are\",\"you\",\"today\"]) is 3 ... " + testFunction(3 ,findLongestWord(words1));
    document.getElementById("long1").style.padding="10px";
    document.getElementById("long2").style.padding="10px";

    //7. filtering words by length
    var  input=["This", "is", "Fairfield","Iowa"];
    document.getElementById("filter1").innerHTML= "Expected output of filterLongWords([\"This\", \"is\", \"Fairfield\",\"Iowa\"], 3) is This,Fairfield,Iowa ... " + testArray(["This","Fairfield","Iowa"],filterLongWords(input,3));
    document.getElementById("filter2").innerHTML= "Expected output of filterLongWords([\"This\", \"is\", \"Fairfield\",\"Iowa\"], 4) is Fairfield,Iowa ... " + testArray(["Fairfield","Iowa"],filterLongWords(input,4));
    document.getElementById("filter1").style.padding="10px";
    document.getElementById("filter2").style.padding="10px";

    //8. Modified jsfiddle
    const nums=[1,3,5,3,3];
    document.getElementById("mod1").innerHTML= " Multiplying each element in [1,3,5,3,3] by 10  ...." + nums.map(Modify);
    document.getElementById("mod2").innerHTML= " Filtering elements equal to three from [1,3,5,3,3] ... " + nums.filter(Modify1);
    document.getElementById("mod3").innerHTML= " Product of all elements in [1,3,5,3,3] is ... " + nums.reduce(Modify2);
    document.getElementById("mod1").style.padding="10px";
    document.getElementById("mod2").style.padding="10px";
    document.getElementById("mod3").style.padding="10px";
    
}

//Test function to test all the functions return types except arrays
function testFunction(expected, result) {
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " Found " + result;
    }
}

//Test function for array return types
function testArray(expected, result){
    if(expected.length!=result.length){
        return "TEST FAILED. Expected "+expected+" Found "+result;
    }
    else{
        for(var i=0;i<expected.length;i++){
            if(expected[i]!=result[i]){
                return "TEST FAILED. Expected "+expected+" Found "+result;
            }
        }
        return "TEST SUCCEEDED";
    }
}

//1. Max of two 
function maxTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

//2. Max of three 
function maxThree(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        return n2;
    }
    else {
        return n3;
    }
}

//3. is vowel
function isVowel(str) {
    return ("EeUuIiAaOo".indexOf(str) >= 0);
}

//4. Function sum
function sum(input) {
    if (!(input instanceof Array)) {
        return "Input is not an array";
    }
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += input[i];
    }
    return total;
}

// Function multiply
function multiply(input) {
    if (!(input instanceof Array)) {
        return "Input is not an array";
    }
    var product = 1;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        product *= input[i];
    }
    return product;
}

//5. Function reverse

function reverse(input) {
    temp = "";
    for (let i = input.length - 1; i >= 0; i--) {
        temp += input.charAt(i);
    }
    return temp;
}

// 6. function findLongestWord
function findLongestWord(input){
    if(!(input instanceof Array)){
        return "Input is not an array";
    }
    var maxCount=0;
    for(var i=0;i<input.length;i++){
        if(input[i].length>maxCount){
            maxCount=input[i].length;
        }
    }
    return maxCount;
}

//7. function filterLongWords()
function filterLongWords(arr, n){
    var result=[];
    if(!(arr instanceof Array)){
        return arr+" Input is not an array";
    }
    else if(isNaN(n)){
        return n+" is not a number";
    }
    else{
        for(var a=0;a<arr.length;a++){
            if(arr[a].length>n){
                result.push(arr[a]);
            }
        }
        return result;
    }
}

//8. Modify the jsfiddle
function Modify(a){
    return a*10;
}

function Modify1(a){
    return a === 3;
}

function Modify2(a,b){
    return a*b;
}