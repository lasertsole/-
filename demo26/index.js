const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
	let strArr = str.split(" ");
	let len = strArr[0];
	let base = strArr[strArr.length-2];
	let broIndex = strArr[strArr.length-1];
	strArr=strArr.slice(1,strArr.length-2)
	
	let baseObj = {}
	base.split("").forEach((item)=>{
		if(!baseObj[item]){
			baseObj[item]=1;
		}
		else{
			baseObj[item]++;
		}
	})
	
	let broArr = [];
	let tempObj = {};
	let flag = true;
	strArr.forEach((item)=>{
		if(item!=base&&item.length==base.length){
			item.split("").forEach((subItem)=>{
				if(!tempObj[subItem]){
					tempObj[subItem]=1;
				}
				else{
					tempObj[subItem]++;
				}
			})
		}
		
		for(subItem in baseObj){
			flag=flag&&baseObj[subItem]==tempObj[subItem];
		}
		
		if(flag==true){
			broArr.push(item);
		}
		
		flag=true;
		tempObj = {};
	});
	
	broArr=broArr.sort()
	
	console.log(broArr.length);
	broArr[broIndex-1]?console.log(broArr[broIndex-1]):undefined;
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()