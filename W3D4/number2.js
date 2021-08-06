const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;
function getSum() {
    readline.question('Enter number or type stop: ', input => {
        if (input.trim() === "stop") {
            console.log(`Sum of all the numbers is: ${sum}`)
            readline.close();
        } else {
            sum += parseInt(input);
            getSum();
        }
    });
}
getSum();