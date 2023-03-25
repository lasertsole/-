const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

class item{
    constructor(value,important,type){
        this.value=value;
        this.important=important;
        this.type=type-1;

        this.satisfied=this.value*this.important;
        this.sub=[];
    }
}

function proc(arr){
    let hadMoney = arr[0];
    let itemLenght = arr[1];
    let itemArr = arr.slice(2);
    
    let objItemArr = [];
    for(let count=0;count<itemArr.length/3;count++){//组成所有物品列表
        objItemArr.push(new item(itemArr[count*3],itemArr[count*3+1],itemArr[count*3+2]));
    }

    let objMainItemArr = [];
    objItemArr.forEach((item,index)=>{//组成组件和附件绑定列表,形成主件和附件组合的列表
        if(item.type<0){
            objMainItemArr.push(item);
        }else{
            objItemArr[item.type].sub.push(item);
        }
    })

    let dp=new Array(); //定义一维数组
    for(i=0;i<objMainItemArr.length;i++)//升级为二维数组
    {
        dp[i]=new Array(hadMoney/10); //将每一个子元素又定义为数组
    }

    for(let MainIndex=0;MainIndex<objMainItemArr.length;MainIndex++){//初始化第一列
        dp[MainIndex][0]=0;
    }

    for(let Money=0;Money<=hadMoney/10;Money++){//初始化第一行
        let satisfied0=0;//不购买主件需要的满意度
        let satisfied1=0;//只主件需要的满意度
        let satisfied2=0;//购买主件1和附件1的满意度
        let satisfied3=0;//购买主件1和附件2的满意度
        let satisfied4=0;//购买主件1、附件1和附件2的满意度

        if(Money*10>=objItemArr[0].value){//如果拥有的金钱大于本主件的价格
            satisfied1=objMainItemArr[0].satisfied;
        }
        if(objMainItemArr[0].sub[0]&&Money*10>=objItemArr[0].value+objItemArr[0].sub[0].value){//如果拥有的金钱大于等于本主件+附件1的价格
            satisfied2=objMainItemArr[0].satisfied+objItemArr[0].sub[0].satisfied;
        }
        if(objMainItemArr[0].sub[1]&&Money*10>=objItemArr[0].value+objItemArr[0].sub[1].value){//如果拥有的金钱大于等于本主件+附件2的价格
            satisfied3=objMainItemArr[0].satisfied+objItemArr[0].sub[1].satisfied;
        }
        if(objMainItemArr[0].sub[0]&&objMainItemArr[0].sub[1]&&Money*10>=objItemArr[0].value+objItemArr[0].sub[0].value+objItemArr[0].sub[1].value){//如果拥有的金钱大于等于本主件+附件1+附件2的价格
            satisfied4=objMainItemArr[0].satisfied+objItemArr[0].sub[0].satisfied+objItemArr[0].sub[1].satisfied;
        }

        dp[0][Money] = Math.max(satisfied0, satisfied1, satisfied2, satisfied3, satisfied4);//求出以上所有情况中最高的满意度
    }

    
    for(let MainIndex=1;MainIndex<objMainItemArr.length;MainIndex++){//计算整个dp列表
        for(let Money=1;Money<=hadMoney/10;Money++){
            let satisfied0=dp[MainIndex-1][Money];//不购买主件需要的满意度
            let satisfied1=0;//只主件需要的满意度
            let satisfied2=0;//购买主件1和附件1的满意度
            let satisfied3=0;//购买主件1和附件2的满意度
            let satisfied4=0;//购买主件1、附件1和附件2的满意度

            let cost=undefined;

            if(Money*10>=objMainItemArr[MainIndex].value){//如果拥有的金钱大于本主件的价格
                cost=objMainItemArr[MainIndex].value/10;//购买主件需要的花销
                satisfied1=objMainItemArr[MainIndex].satisfied+dp[MainIndex-1][Money-cost];
            }
            if(objMainItemArr[MainIndex].sub[0]&&Money*10>=objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[0].value){//如果拥有的金钱大于本主件+附件1的价格
                cost=(objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[0].value)/10;//购买主件1和附件1的花销
                satisfied2=objMainItemArr[MainIndex].satisfied+objMainItemArr[MainIndex].sub[0].satisfied+dp[MainIndex-1][Money-cost];
            }
            if(objMainItemArr[MainIndex].sub[1]&&Money*10>=objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[1].value){//如果拥有的金钱大于本主件+附件2的价格
                cost=(objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[1].value)/10;//购买主件1和附件2的花销
                satisfied3=objMainItemArr[MainIndex].satisfied+objMainItemArr[MainIndex].sub[1].satisfied+dp[MainIndex-1][Money-cost];
            }
            if(objMainItemArr[MainIndex].sub[0]&&objMainItemArr[MainIndex].sub[1]&&Money*10>=objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[0].value+objMainItemArr[MainIndex].sub[1].value){//如果拥有的金钱大于本主件+附件1+附件2的价格
                cost=(objMainItemArr[MainIndex].value+objMainItemArr[MainIndex].sub[0].value+objMainItemArr[MainIndex].sub[1].value)/10;//购买主件1、附件1和附件2的花销
                satisfied4=objMainItemArr[MainIndex].satisfied+objMainItemArr[MainIndex].sub[0].satisfied+objMainItemArr[MainIndex].sub[1].satisfied+dp[MainIndex-1][Money-cost];
            }

            dp[MainIndex][Money]= Math.max(satisfied0, satisfied1, satisfied2, satisfied3, satisfied4);
        }
    }

    console.log(dp[objMainItemArr.length-1][hadMoney/10]);
}
void async function () {
    // Write your code here
    let arr=[]
    while(line = await readline()){
        arr.push(...line.split(" "));
    }
    arr=arr.map((item)=>{
        return parseInt(item)
    })
    proc(arr)
}()
