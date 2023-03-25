function compareStr(subStr, parentStr){
    let subStrLength = subStr.length;//获取小字符串长度
    let parentStrLength = parentStr.length;//获取大字符串长度
    
    if(parentStr>500000||parentStr<1||subStr>100||subStr<1){//判断字符串合规性
        console.log("字符串不符合规则")
        return false;
    }
    

    for(let count = 0; count < parentStrLength; count++){//遍历大字符串
        let parentIndex = count;
        if(count+subStrLength>parentStrLength){//当当前索引加小字符串长度超出大字符串长度时，则判断不可能找到字符串
            return false;
        }
        else{
            let flag = true;
            for(let subCount = 0; subCount < subStrLength; subCount++){
                if(subStr[subCount]!=parentStr[parentIndex+subCount]){
                    flag=flag&&false;
                    break;
                }
                else {
                    flag=flag&&true;
                }
            }
            if(flag == true){
                return true;
            }
        }
    }
}

console.log(compareStr("ef", "kqzct"));