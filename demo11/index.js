const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let strArr = str.split("");
    let tempArr = [];

    strArr=strArr.reverse().filter((item)=>{
        if(tempArr[item]==undefined){
            tempArr[item]=true;
            return true
        }
        return false
    })
    console.log(strArr.join(""));
}

void async function () {
    // Write your code here
    let str = ""
    while(line = await readline()){
        str = line;
    }
    proc(str)
}()