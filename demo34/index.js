const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
    let broWindow = [0,1];//记录正在发育的兔子的数组，第一个元素表示发育第一个月的兔子总数，以此推论
    let bornEachMonth = 0;//记录一共有多少个发育好的兔子
    let sum = 1;//记录兔子总数

    for(let count=1;count<=num;count++){
        if(count<3){continue};
        bornEachMonth+=broWindow[1];
        broWindow[1]=broWindow[0];
        broWindow[0]=bornEachMonth;
        sum+=broWindow[0];
    }
    console.log(sum)
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(parseInt(line));
    }
}()