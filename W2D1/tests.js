//1. sum of all elements in an array
const arrays = [[1, 2, 3], [2, 3, 5], [1, 4, 8]];
describe("Sum", function () {
    for (let x = 0; x < arrays.length; x++) {
        let expected = 0;
        for (let y = 0; y < arrays[x].length; y++) {
            expected += arrays[x][y];
        }
        it(`sum of all elements in [${arrays[x]}] is ${expected}`, function () {
            assert.equal(sum(arrays[x]), expected);
        });
    }
});

// 2. product of all elements in an array
describe("Multiply", function () {
    for (let x = 0; x < arrays.length; x++) {
        let expected = 1;
        for (let y = 0; y < arrays[x].length; y++) {
            expected *= arrays[x][y];
        }
        it(`producct of all elements in [${arrays[x]}] is ${expected}`, function () {
            assert.equal(multiply(arrays[x]), expected);
        });
    }
});

//3. Reverse string
const arr = ["Hi", "Bereket", "How is", "your web", "assignment"]
describe("Reverse", function () {
    for (let a = 0; a < arr.length; a++) {
        let expected = "";
        for (let x = arr[a].length - 1; x >= 0; x--) {
            expected += arr[a][x];
        }
        it(`the reverse of ${arr[a]} is ${expected}`, function () {
            assert.equal(reverseString(arr[a]), expected);
        });
    }
});

// 4. return the longest word from a list of words
describe("filterLongWords", function () {
    for (let x = 5; x < 9; x++) {
        let expected = [];
        for (let y = 0; y < arr.length; y++) {
            if (arr[y].length > x) {
                expected.push(arr[y])
            }
        }
        it(`a list containing words whose length is greater than ${x} is ${expected}`, function () {
            assert.deepEqual(filterLongWords(arr, x), expected);
        });
    }
});





