//Number 1
String.prototype.filter = function(arr){
    var rgx;
    if(arr instanceof Array){
        rgx = new RegExp(arr.join("|"),"gi");
    }
    else{
        rgx=new RegExp(arr,"gi");
    }
    return (this.replaceAll(rgx,''));
};
console.log("This house is not nice!".filter('not'));


//Number 2
Array.prototype.bubbleSort= function(){
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort());

//Number 3
var Person = function(){};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.describe = function(){
    return this.name+", "+this.age+", years old";
}

var Teacher = function(){};
Teacher.prototype= new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name+" is now teaching "+subject);
    return this.name+" is now teaching "+subject;
}


