function countCommonCharacters(s1, s2){
    let c = 0;
    const chars = s2.split('');
    for(char of s1){
        let index = chars.findIndex(s => s === char);
        if(index >= 0){
            c++;
            chars.splice(index, 1);
        }
    }
    return c;
}

module.exports = countCommonCharacters;