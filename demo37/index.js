const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
    let sort = arr[0];
    let weightArr=arr.slice(1);
	
    let w = [0];
    let n = [1];
    let dp = [1];

    weightArr.forEach((item,index)=>{
		if(index%2==0){
			w.push(item);
		}
		else{
			n.push(item);
		}
    });

	let MaxW=0;
	for(let i=0;i<=sort;i++){
		MaxW+=w[i]*n[i];
	}
	
	for(let i=0;i<=sort;i++){
		for(let j=MaxW;j>=0;j--){
			for(let k=0;k<=n[i];k++){
				if(dp[j]==1){
					dp[j+k*w[i]]=1;
				}
			}
		}
	}
	
	let count=0;
	for(let i=0;i<=MaxW;i++){
		if(dp[i]==1){
			count++
		}
	}
	console.log(count);
}

void async function () {
    // Write your code here
    let arr=[];
    while(line = await readline()){
        arr.push(parseInt(line));
    }
    proc(arr);
}()
