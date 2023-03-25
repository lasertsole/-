const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
	let originArr = str.split("");
	let strArr = []//规则一列表
	originArr.forEach((item)=>{
		if(/[A-Z]|[a-z]/.test(item)){
			strArr.push(item);
		}
	});
	strArr=strArr.sort((a,b)=>{
		return a.toUpperCase().charCodeAt()-b.toUpperCase().charCodeAt();
	})
	let index=0;
	originArr=originArr.map((item)=>{
		if(/[A-Z]|[a-z]/.test(item)){
			return strArr[index++];
		}
		else{
			return item
		}
	})
	console.log(originArr.join(""))
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()