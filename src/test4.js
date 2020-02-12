function createPyramid(n) {
    //declare the array to create each line of the pyramid
    let line = [];

    //calculate the number of blank spaces each line
    for (let i =0;i<2*n-1;i++){
        line[i]=" ";
    }

    //fill the correct field
    line[n-1] = "#";

    //print the line
    console.log(line.join(""));

    //fill the side fields and then print the line again
    for (let i =1 ;i<n;i++){
        line[n-1-i]="#";
        line[n-1+i]="#";
        console.log(line.join(""));
    }
}

module.exports = createPyramid;