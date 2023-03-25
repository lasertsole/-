const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let num = str.toString(2);

    let count = 0;
    num.split("").forEach((item)=>{
        if(item=="1"){
            count+=1;
        }
    })
    console.log(count)
}
void async function () {
    // Write your code here
    let str=""
    while(line = await readline()){
        str=line;
    }
    proc(parseInt(str,10))
}()