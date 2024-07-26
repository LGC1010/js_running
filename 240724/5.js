const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

// const sco = scores.map(function(number) {
//     return number + 3;
// });
// console.log(sco);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84] 방법이 생각이 안나서 map으로 작업했습니다

function Plus(scores) {
    for(i =0; i<scores.lenght; i++) {
        scores + 3;
    }
}

Plus(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]