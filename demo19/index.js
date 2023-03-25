const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
    let x=0;
    let y=0;
    arr.forEach((item)=>{
        if(/^W\d+$/.test(item)){
			y+=parseInt(item.substr(1));
        }
		else if(/^S\d+$/.test(item)){
			y-=parseInt(item.substr(1));
		}
		else if(/^A\d+$/.test(item)){
			x-=parseInt(item.substr(1));
		}
		else if(/^D\d+$/.test(item)){
			x+=parseInt(item.substr(1));
		}
    });
	console.log(x+","+y);
}

void async function () {
    // Write your code here
    let arr=undefined;
    while(line = await readline()){
        arr = line.split(';');
    }
    proc(arr)
}()