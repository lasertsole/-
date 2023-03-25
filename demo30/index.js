const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
	let ipv4 = arr[0];
	let origin = arr[1];
	
	let ipv4Result = 0;//ipv4转int
	ipv4.split(".").forEach((item,index)=>{
		ipv4Result+=parseInt(item)*Math.pow(2,8*(3-index));
	})
	
	let originResult = [];//int转ipv4
	origin = parseInt(origin).toString(2).padStart(32,"0");
	for(let count=0;count<4;count++){
		originResult.push(origin.substring(count*8,(count+1)*8));
	}
	originResult=originResult.map((item)=>{
		return parseInt(item,2);
	})
	originResult=originResult.join(".");
	
	console.log(ipv4Result);
	console.log(originResult)
}

void async function () {
    // Write your code here
    let arr = []
    while(line = await readline()){
        arr.push(line)
    }
    proc(arr)
}()
