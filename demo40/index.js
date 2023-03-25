const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
	let len = parseInt(arr[0]);
	let strArr = arr.slice(1);
	
	strArr.forEach((item)=>{
		let obj={};
		item=item.split("");
		item.forEach((subItem)=>{
			if(!obj[subItem]){
				obj[subItem]=1;
			}
			else{
				obj[subItem]++;
			}
		})
		
		let sortArr=[];
		for(subItem in obj){
			sortArr.push({key:subItem, num:obj[subItem]});
		}
		
		sortArr=sortArr.sort((a,b)=>{
			return b.num-a.num;
		})
		sortArr=sortArr.map((item)=>{
			return item.key
		})
		
		let sum=0;
		item.forEach((item)=>{
			sum+=(26-sortArr.indexOf(item));
		})
		
		console.log(sum)
	});
}

void async function () {
    // Write your code here
    let arr=[]
    while(line = await readline()){
        arr.push(line)
    }
    proc(arr)
}()