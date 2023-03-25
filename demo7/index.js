const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let newStr = str.substr(2);
    let sum = 0;
    for(let count = 0;count<newStr.length;count++){
        if("0"<=newStr[count]&&newStr[count]<="9"){
            sum=sum*16+newStr[count].charCodeAt(0)-"0".charCodeAt(0);
        }
        else{
            sum=sum*16+(10+newStr[count].toUpperCase().charCodeAt(0)-"A".charCodeAt(0));
        }
    }
    if(1<sum<Math.pow(2,31)-1){
        console.log(sum);
    }else{
        console.log(出现错误);
    }
}

void async function () {
    // Write your code here
    let inputArr = "";
    while(line = await readline()){
        inputArr=line;
    }
    proc(inputArr)
}()
