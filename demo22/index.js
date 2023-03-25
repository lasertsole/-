const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
	if(num==0){return}
	console.log(Math.floor(num/2))
};

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()