const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        if(line.length>5000){
            return "错误，长度大于5000";
        }
        else{
            line=line.split(" ");
        }
            console.log(line[line.length-1].length);
        }
}()
