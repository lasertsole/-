const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(num){
	let arr=[];
	
	let index=0;
	for(let layer=0;layer<num;layer++){
		for(let count=0;count<num-layer;count++){
			if(layer==0){
				if(count==0){
					arr[index]=1;
				}
				else{
					arr[index]=arr[index-1]+count+1+layer;
				}
			}
			else{
				if(count==0){
					arr[index]=arr[index-(num-layer)-1]+layer;
				}
				else{
					arr[index]=arr[index-1]+count+1+layer;
				}
			}
			index++;
		}
	}
	
	index=0;
	let tempArr=[];
	for(let layer=0;layer<num;layer++){
		for(let count=0;count<num-layer;count++){
			tempArr.push(arr[index])
			index++;
		}
		console.log(...tempArr)
		tempArr=[];
	}
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line);
    }
}()