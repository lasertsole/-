const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
	let deCode = arr[0];
	let str = arr[1];
	let strObj = {};
	
	deCode=deCode.split("").map((item)=>{
		if(!strObj[item]==true){
			strObj[item]=true;
			return item.toUpperCase();
		}
	});
	
	let bigAlpha = [];//大写字母表
	let smallAlpha = [];//大写字母表
	for(let i=0;i<26;i++){
		if(deCode.indexOf(String.fromCharCode(i+"A".charCodeAt()))<0){
			bigAlpha.push(String.fromCharCode(i+"A".charCodeAt()));
		}
	}
	bigAlpha=deCode.concat(bigAlpha);
	smallAlpha=bigAlpha.join("").toLowerCase().split("");
	
	str=str.split("").map((item)=>{
		if(/[a-z]/.test(item)){
			return smallAlpha[item.charCodeAt()-"a".charCodeAt()];
		}
		else if(/[A-Z]/.test(item)){
			return bigAlpha[item.charCodeAt()-"A".charCodeAt()]; 
		}
	}).join("")
	console.log(str);
}

void async function () {
    // Write your code here
    let arr=[];
    while(line = await readline()){
        arr.push(line);
    }
    proc(arr);
}()