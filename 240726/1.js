const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);  
/* 객체(배열) 같은경우에는 데이터 값을 주소 값으로 받기 때문에 얕은 복사를
하면 원본 값을 변경할 경우 복사한 값도 같은 곳을 바라보기 때문에 같이 바뀌게 된다
*/

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1;
obj2.d = 4;
console.log(obj1);
console.log(obj2);
// obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

/* 해당값 obj1, obj2의 값을 출력해주세요 */