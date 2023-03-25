const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
    let codeLength=arr[0];
    let intArr=arr.slice(1);

    let tempArr = new Array(1000);
    intArr.forEach((item, index)=>{
        if(tempArr[item]==undefined){
            tempArr[item]=1;
        }
    });
    
    tempArr.forEach((item,index)=>{
        if(item!=undefined){
            console.log(index);
        }
    });
}

void async function () {
    // Write your code here
    let inputArr = [];
    while(line = await readline()){
        inputArr.push(line)
    }
    proc(inputArr)
}()