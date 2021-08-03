//1. Filtering banned words
const bannedWords =['not','dirty','bad'];
const bannedWords1='not';
describe("Filter",function(){
    let expected="The university is  good and the housing is .Overall, it is ";
    let expected1="This house is  nice!";
    
    it(`The result after filtering the words [${bannedWords1}] from the string is ... ${expected1}`,function(){
        assert.equal("This house is not nice!".filter(bannedWords1),expected1);
    });

    it(`The result after filtering the words [${bannedWords}] from the string is ... ${expected}`,function(){
        assert.equal("The university is not good and the housing is dirty.Overall, it is bad".filter(bannedWords),expected);
    });
});



//2 bubble sort .... sorting elements of an array

const arr=[6,4,0, 3,-2,1];
const arr1=[100,30,-34,1000,-11,5]
describe("bubbleSort", function(){
    let expected=[ -2, 0, 1, 3, 4, 6 ];
    let expected1=[-34,-11,5,30,100,1000];
    it(`The result of sorting the items in [${arr}] is ....[${expected}]`,function(){
        assert.deepEqual(arr.bubbleSort(),expected);
    });
    it(`The result of sorting the items in [${arr1}] is ....[${expected1}]`,function(){
        assert.deepEqual(arr1.bubbleSort(),expected1);
    });
});

//3 testing objects created

describe("Teacher",function(){
    let expected = "Michael is now teaching WAP";
    it(`The result of calling the teach method of teacher is .... ${expected}`, function(){
        var teacher = new Teacher();
        teacher.initialize("Michael",35);
        assert.equal(teacher.teach("WAP"),  `${teacher.name} is now teaching WAP`);
    });
});