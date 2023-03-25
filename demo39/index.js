const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str,num){
	console.log(str.slice(0,num));
}

void async function () {
    // Write your code here
    let arr=[]
    while(line = await readline()){
        arr.push(line)
    }
    proc(arr[0],parseInt(arr[1]))
}()