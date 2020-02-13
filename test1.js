const {performance} = require('perf_hooks');

function countCommonCharacters(s1, s2){
    //creating the time limit counter
    let t0 = performance.now();

    //creating counter for the matches
    let c = 0;

    //splitting second string into chars
    const chars = s2.split('');

    for(char of s1){
        //search for the match chars
        let index = chars.findIndex(s => s === char);

        if(index >= 0){
            c++;
            //remove the matching chars from the list
            chars.splice(index, 1);
        }
    }
    let t1 = performance.now();
    console.log(`Test 1 took ${t1 - t0} milliseconds to be executed`);

    return c;
}

module.exports = countCommonCharacters;