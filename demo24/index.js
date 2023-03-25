const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(originArr){
	let arrLength = parseInt(originArr[0]);
	let arr = originArr.slice(1).map((item)=>{return parseInt(item)});
	let orderDrop = []//下降序列
	let orderUp = []//上升序列
	
	
	
	orderUp[0]=1;//初始化第一个上升序列元素
	for(let count = 1; count<arrLength; count++){
		let MaxN=0;
		for(let subCount = 0; subCount<count; subCount++){
			if(arr[count]>arr[subCount]){
				if(orderUp[subCount]>MaxN){
					MaxN=orderUp[subCount];
				}
			}
		}
		orderUp[count]=MaxN+1;
	}
	
	orderDrop[arrLength-1]=1;
	for(let count = arrLength-2; count>=0; count--){
		let MaxN=0;
		for(let subCount = count+1; subCount<arrLength; subCount++){
			if(arr[count]>arr[subCount]){
				if(orderDrop[subCount]>MaxN){
					MaxN=orderDrop[subCount];
				}
			}
		}
		orderDrop[count]=MaxN+1;
	}
	
	let teamSize = 0;
	for(let count = 0; count<arrLength; count++){
		if(orderDrop[count]+orderUp[count]-1>teamSize){
			teamSize=orderDrop[count]+orderUp[count]-1;
		}
	}
	console.log(arrLength-teamSize)
}

void async function () {
    // Write your code here
    let originArr=[];
    while(line = await readline()){
        originArr.push(...line.split(" "))
    }
    proc(originArr)
}()