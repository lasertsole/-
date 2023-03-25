const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(arr){
	let encode = arr[0];
	let decode = arr[1];

	encode=encode.split("").map((item)=>{
		if(/[a-z]/.test(item)){
			return String.fromCharCode((item.charCodeAt()-"a".charCodeAt()+1)%26+"A".charCodeAt());
		}else if(/[A-Z]/.test(item)){
			return String.fromCharCode((item.charCodeAt()-"A".charCodeAt()+1)%26+"a".charCodeAt());
		}else if(/\d/.test(item)){
			return (parseInt(item)+1)%10;
		}
	}).join("");

	console.log(encode);

	decode=decode.split("").map((item)=>{
		if(/[a-z]/.test(item)){
			return String.fromCharCode((item.charCodeAt()-"a".charCodeAt()+25)%26+"A".charCodeAt());
		}else if(/[A-Z]/.test(item)){
			return String.fromCharCode((item.charCodeAt()-"A".charCodeAt()+25)%26+"a".charCodeAt());
		}else if(/\d/.test(item)){
			return (parseInt(item)+9)%10;
		}
	}).join("");
	console.log(decode);
}

void async function () {
    // Write your code here
    let arr =[];
    while(line = await readline()){
        arr.push(line)
    }
    proc(arr)
}()