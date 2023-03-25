const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
    let i=2;
    let result="";
    for(;i<=Math.sqrt(num);i++){
        while(num%i==0){
            result=result+i+" ";
            num/=i;
        }
    }
    if(i>Math.sqrt(num)&&num!=1){
        result=result+num+" ";
    }
    console.log(result);
}

void async function () {
    // Write your code here
    let num=0;
    while(line = await readline()){
        num=line;
    }
    proc(num)
}()