const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
    let length=arr[0]
    let strArr=arr.slice(1);
    strArr=strArr.sort((a,b)=>{
        return a>b?1:-1;
    })
    strArr.forEach((item)=>{
        console.log(item);
    })
}

void async function () {
    // Write your code here
    let arr=[];
    while(line = await readline()){
        arr.push(line)
    }
    proc(arr)
}()