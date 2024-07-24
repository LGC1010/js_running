let uninitialized;
console.log(uninitialized); // 결과값 < undefined > 값을 지정하지 않아서 undefined가 출력 됩니다!


let apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable 변수를 정의해주지 않아서 타입에러가 나온다


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 > 배열은 0부터 시작이여서 3번쨰 값은 19이다 

let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false > 부정의 부정이기 때문에 원래 값이 나온다