const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let obj={}

    str.split("").forEach((item)=>{
        obj[item.charCodeAt(0)]=1;
    })

    let count=0;
    for(item in obj){
        count+=obj[item]
    }
    console.log(count);
}

void async function () {
    // Write your code here
    let str=''
    while(line = await readline()){
        str=line;
    }
    proc(str)
}()