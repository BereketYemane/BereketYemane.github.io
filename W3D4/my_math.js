module.exports.add = function(a,b){
    return a+b;
}
module.exports.subtract = function(a,b){
    return(a-b);
}
module.exports.multiply = function(a,b){
    return a*b;
}
module.exports.divide = function(a,b){
    if(b!=0){
        return a/b;
    }
    else{
        return "Error ... division by Zero";
    }
}
module.exports.pi = 3.14;




