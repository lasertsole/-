const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
    if(num-parseInt(num)>=0.5){
        console.log(parseInt(num)+1)
    }
    else{
        console.log(parseInt(num))
    }
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()