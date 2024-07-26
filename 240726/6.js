1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

const avgStudents = [];
// 여기에 코드를 작성해주세요
students.map(function(item){
    let avg = item.scores.reduce(function(a,b){
        return (a + b) / item.scores.length;
    });
    if (avg > 80){
        avgStudents.push(item.name)
    }
})
console.log(avgStudents)
// 예상 출력: ["이재상", "김준현"]

2.
const numbers = [5, 10, 15, 20, 25];
const avgNum = [];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
let averageNum = numbers.map(function(item){
    if(item * 2 < 30){
        avgNum.push(item*2);
    }
})

console.log(avgNum);