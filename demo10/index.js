const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
    let length = arr[0];
    let keyAndWordArr= arr.slice(1);
    let obj={};
    keyAndWordArr.forEach((item)=>{
        item = item.split(" ")
        let key = item[0];
        let value = item[1];
        if(obj[key]==undefined){
            obj[key]=value;
        }
        else{
            obj[key]=parseInt(obj[key])+parseInt(value);
        }
    })
    for(key in obj){
        console.log(key+" "+obj[key])
    }
}

void async function () {
    // Write your code here
    let inputArr = []
    while(line = await readline()){
        inputArr.push(line);
    }
    proc(inputArr)
}()