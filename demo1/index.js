function procStr(str, baseNum){
    let arr = str.split("-")//第一次分割子串
    let newarr = [];//第二次分割子串
    arr.forEach((item,index)=>{
        if(index!=0){//第一次分割的第一个子串不用处理
            let tempStr = "";//临时字符串
            let upper = 0;//记录临时字符串中的大写字母
            let lowwer = 0;//记录临时字符串中的小写字母
            for(let count=0; count <item.length; count++){//遍历子串

                tempStr+=item[count];//将子串的每个单词都加入临时字符串
                if(item[count]>="A"&&item[count]<="Z"){upper+=1;}//如果为大写字母则upper加1
                else if(item[count]>="a"&&item[count]<="z"){lowwer+=1;}//如果为小写字母则upper加1

                if((baseNum==1||(count+1)%baseNum==0&&count+1!=1)||count+1==item.length){//临时字符串的长度为count+1，当长度为baseNum的整数倍时进行一次分割
                    if(upper>lowwer){tempStr=tempStr.toUpperCase();}//当大写多于小写时，全变大写
                    else if(upper<lowwer){tempStr=tempStr.toLowerCase();}//当小写多于大写时，全变大写

                    newarr.push(tempStr);//如果临时字符串的长度mod4为0，则加入newarr,
                    tempStr="";//并将临时字符串置空，
                    upper=0;
                    lowwer=0;
                }
            }
        }
        else{newarr.push(item);}
    })
    return newarr.join("-");
}
console.log(procStr("12abc-abCABc-4aB@", 3));
