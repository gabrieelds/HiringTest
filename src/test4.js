function pyramid(n) {
    let pyramid = [];
    for (let i =0;i<2*n-1;i++){
        pyramid[i]=" ";
    }
    pyramid[n-1] = "#";
    console.log(pyramid.join(""));
    for (let i =1 ;i<n;i++){
        pyramid[n-1-i]="#";
        pyramid[n-1+i]="#";
        console.log(pyramid.join(""));
    }
}

module.exports = pyramid;