const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    if(str.length==0){return}
    else{
        let strNum = Math.ceil(str.length/8);
        let item = undefined;
        for(let count = 0;count<strNum;count++){
            item = str.substring(count*8,(count+1)*8);
            for(let subCount=0;subCount<8;subCount++){
                if(item[subCount]==undefined){
                    item+="0";
                }
            }
            console.log(item);
        }
    }
}

void async function () {
    // Write your code here
    let str="";
    while(line = await readline()){
        str+=line;
    }
    proc(str);
}()