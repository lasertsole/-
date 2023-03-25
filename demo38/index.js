const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let rows=0;//矩形行长
let cows=0;//矩形列长
let rectangle=[];//二位矩形迷宫

function search(x,y,oldFlagPath){
	let newFlagPath=[`(${x},${y})`];
	newFlagPath=newFlagPath.concat(oldFlagPath);
	
	if(x==rows-1&&y==cows-1){//判断是否已到达终点
		newFlagPath.reverse().forEach((item)=>{
			console.log(item)
		});
	}
	else{

		let optionPath=[]//候选路径数组

		if(y<cows-1&&rectangle[x][y+1]==0&&newFlagPath.indexOf(`(${x},${y+1})`)<0){//向右探索
			search(x,y+1,newFlagPath);
		}
		if(x<rows-1&&rectangle[x+1][y]==0&&newFlagPath.indexOf(`(${x+1},${y})`)<0){//向下探索
			search(x+1,y,newFlagPath);
		}
		if(y>0&&!rectangle[x][y-1]&&newFlagPath.indexOf(`(${x},${y-1})`)<0){//向左探索
			search(x,y-1,newFlagPath);
		}
		if(x>0&&!rectangle[x-1][y]&&newFlagPath.indexOf(`(${x-1},${y})`)<0){//向上探索
			search(x-1,y,newFlagPath);
		}
		
		
	}
}

function proc(arr){
	rows=arr[0];
	cows=arr[1];
	let dataArr=arr.slice(2);
	
	for(let i=0;i<rows;i++){
		let tempCow = [];
		for(let j=0;j<cows;j++){
			tempCow.push(dataArr[i*cows+j]);
		}
		rectangle.push(tempCow);
		tempCow = [];
	}
	
	let newFlagPath=[`(0,0)`];
	if(rectangle[0][1]===0){//向右探索
		search(0,1,newFlagPath);
	}
	if(rectangle[1][0]===0){//向下探索
		search(1,0,newFlagPath);
	}
}

void async function () {
    // Write your code here
    let arr=[]
    while(line = await readline()){
        arr.push(...line.split(" ").map((item)=>{return parseInt(item)}))
    }
    proc(arr);
}()