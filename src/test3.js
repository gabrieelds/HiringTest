function luckyNumber(n) {
    const numbers = String(n);

    const mid = numbers.length / 2;

    const firstHalf = numbers.substr(0, mid);
    const secondHalf = numbers.substr(mid);

    let seq1 = firstHalf.split('').reduce((acc, next) => {
        acc += +next;
        return acc;
    }, 0);

    let seq2 = firstHalf.split('').reduce((acc, next) => {
        acc += +next;
        return acc;
    }, 0);

    //let firstHalf = sum(numbers.slice(0, numbers.length / 2));
    //let secondHalf = sum(numbers.slice(numbers.length / 2));

    return seq1 === seq2;

}

module.exports = luckyNumber;