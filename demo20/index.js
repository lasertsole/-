const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    if(!/.{9,}/.test(str)){
        return console.log('NG');
    }
    
    let sum=0;
    if(/[A-Z]/.test(str)){sum++}
    if(/[a-z]/.test(str)){sum++}
    if(/\d/.test(str)){sum++}
    if(/@|#|!|%|$/.test(str)){sum++}
    if(sum<3){
        return console.log('NG');
    }

    if(/(.{3,}).*\1/g.test(str)){
        return console.log('NG');
    }

    console.log('OK');
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line);
    }
}()