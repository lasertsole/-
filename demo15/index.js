const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    console.log(str.split(" ").reverse().join(" "));
}

void async function () {
    // Write your code here
    let str=""
    while(line = await readline()){
        str=line;
    }
    proc(str)
}()