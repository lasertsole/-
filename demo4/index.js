const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str, search){
    if(str.length>1000||str.length<1||search==" "){
        console.log("输入数据长度错误")
    }
    let num=0;
    for(let count=0;count<str.length;count++){
        if(str[count]==search.toUpperCase()||str[count]==search.toLowerCase()){
            num++;
        }
    }
    return num;
}

void async function () {
    // Write your code here
    let inputArr=[];
    while(line = await readline()){
        inputArr.push(line)
    }
    console.log(proc(inputArr[0],inputArr[1]));
}()