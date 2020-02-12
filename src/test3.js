const {performance} = require('perf_hooks');

function luckyNumber(n) {
    //creating the time limit counter
    let t0 = performance.now;

    //convert the input number into string
    const numbers = String(n);

    //find the middle number
    const mid = numbers.length / 2;

    //split into 2 strings
    const firstHalf = numbers.substr(0, mid);
    const secondHalf = numbers.substr(mid);

    //allow to execute a specified function on each element of the string.
    //    In this case, sum the values of each half
    let seq1 = firstHalf.split('').reduce((acc, next) => {
        acc += +next;
        return acc;
    }, 0);

    let seq2 = secondHalf.split('').reduce((acc, next) => {
        acc += +next;
        return acc;
    }, 0);


    let t1 = performance.now;
    //console.log(`Took ${t1 - t0} milliseconds to be executed`);

    //compare the sequences
    return seq1 === seq2;
}

module.exports = luckyNumber;