function calculator(x) {
    let str = "";
    if(x % 2 == 0){
        str = "짝수";
    } else{
        str = "홀수";
    }
    return str;
}

console.log(calculator(10)); // 결과값 "짝수";
console.log(calculator(7)); // 결과값 "홀수";