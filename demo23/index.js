const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let obj={};
    let minArr=[];
    let strArr=str.split("");

    strArr.forEach((item)=>{
        if(obj[item]==undefined){
            obj[item]=1;
        }
        else{
            obj[item]++;
        }
    })

    let minRounds=20;
    for(let item in obj){//找到出现的最少次数
        if(obj[item]<minRounds){
            minRounds=obj[item];
        }
    }

    for(let item in obj){
        if(obj[item]==minRounds){
            minArr.push(item);
        }
    }

    strArr=strArr.filter((item)=>{
        if(minArr.indexOf(item)<0){
            return item
        }
    })
    console.log(strArr.join(""))
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()