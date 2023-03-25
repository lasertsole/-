const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function proc(str){
    let result = str.split("").map((item)=>{
        if(/a|b|c/.test(item)){return "2"}
		else if(/d|e|f/.test(item)){return "3"}
		else if(/g|h|i/.test(item)){return "4"}
		else if(/j|k|l/.test(item)){return "5"}
		else if(/m|n|o/.test(item)){return "6"}
		else if(/p|q|r|s/.test(item)){return "7"}
		else if(/t|u|v/.test(item)){return "8"}
		else if(/w|x|y|z/.test(item)){return "9"}
		else if(/[A-Z]/.test(item)){
			return String.fromCharCode((item.charCodeAt()-"A".charCodeAt()+1)%26 + "a".charCodeAt())
		}
		else{return item}
    }).join("");
	console.log(result)
}

void async function () {
    // Write your code here
    while(line = await readline()){
        proc(line)
    }
}()