const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
	let sum=0;
	let high=num;
	
	for(let i=1;i<=5;i++){
		sum+=high;
		high/=2;
	}
	console.log(sum*2-num);
	console.log(high);
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(parseInt(line))
    }
}()