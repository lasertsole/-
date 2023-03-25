const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let newStr = "#"+str.split("").join("#")+"#";
	let MaxN = 1;
	for(let count = 1;count<newStr.length-1;count++){
		let low = count - 1;
		let high = count + 1;
		while(newStr[low]==newStr[high]&&low>=0&&high<=newStr.length-1){
			if(high-low+1>MaxN){
				MaxN=high-low+1;
			}
			low--;
			high++;
		}
	}
	console.log(Math.floor(MaxN/2));
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()