const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        console.log(line.match(/[a-zA-Z]/g) ? line.match(/[a-zA-Z]/g).length : 0);
	    console.log(line.match(/\s/g) ? line.match(/\s/g).length : 0);
	    console.log(line.match(/\d/g) ? line.match(/\d/g).length : 0);
	    console.log(line.match(/[^a-zA-Z\s\d]/g) ? line.match(/[^a-zA-Z\s\d]/g).length : 0);
    }
}()