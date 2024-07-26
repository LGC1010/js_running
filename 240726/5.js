//해당 문제를 forEach로 변경하여 풀어주세요
let arr = [10, 20, 30];
let items = []
arr.forEach((item) => items.push(item*10));
console.log(items);

// 해당 로직을 작성하세요  

// 결과 값: [100, 200, 300] 출력해주세요 

let arr3 =  [10, 22, 33]
let items2 = []
arr3.forEach((item) =>{
    if(item % 5 == 0){
        items2.push(item)
    }
})
console.log(items2);

// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]