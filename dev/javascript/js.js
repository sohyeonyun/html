// console.log('hello world');

// 변수와 상수
var a = 10;     // 변수. 안 쓴다.
let b = 10;     // 변수(바뀔 수 있는 값)
const c = 10;   // 상수(항상 똑같이 정해진 값)

// 자료형       - number, string, object, boolean
// 숫자 number
const d = 1;
const e = 0.1;
const f = 10000000000000;

// 문자열 string
const g = "아무 문자열";
const h = "";
const i = '작은따옴표';
const j = "큰따옴표";
const k = `여기도 가능`    // 백틱
const l = `두줄도
가능
`    // 백틱 - 여러줄, 템플릿 리터럴

const person = '홍길동';
const age = 14;

// 이 사람의 이름은 홍길동이고 나이는 14살이다.
console.log('이 사람의 이름은 ' + person + '이고 나이는 ' + age + '살이다.')
console.log(`이 사람의 이름은 ${person}이고 나이는 ${age}살이다.`)

// 문자열의 길이
console.log(person.length);

// Boolean - 참 또는 거짓
const m = true;
const n = false;

// 없음
const o = null;         // 값이라는 게 존재. 값이 없다. -> 프로그래머가 빈 값을 넣고 싶을 때 (DB에)
const p = undefined;    // 아예 값 자체가 없다.

let q;      // undefined

// 위에... 원시 타입 (Primitive Type)


// 자료형의 꽃, 객체 Object
// 2줄 짜리 표
/**
 * ---------------------
 * 종류     |  값
 * ---------------------
 * 이름     | 홍길동
 * ---------------------
 * 나이     | 42
 * ---------------------
 * 성별     | 남
 * ---------------------
 * 거주지   | 대구
 * ---------------------
 */

// 중괄호{} --> 객체
const obj = {               // const 주소는 그대로. 안에 값을 바꿀 수 있다. const obj 자체로 변경은 불가
    name: '홍길동',
    age: 42,
    gender: 'male',
    residence: '대구',
}   // 객체 (사람의 정보)

console.log(obj)

// 이름 : <이름> 나이 : <나이> 거주지 : <거주지>
console.log(`이름 : ${obj.name} 나이 : ${obj.age} 거주지 : ${obj.residence}`)

// 홍길동씨가 나이를 1살 먹었을 때
obj.age = obj.age + 1;
obj.residence = '서울';

console.log(`이름 : ${obj.name} 나이 : ${obj.age} 거주지 : ${obj.residence}`)

// 타입 확인
const num = 10;
const str = '문자열';
const obje = {a: 1};
const bool = true;
const und = undefined;
const nul = null;
console.log(typeof num);
console.log(typeof str);
console.log(typeof obje);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nul);    // object

let test = 10;
test = '문자열';    // 동적 타입.. 변경 가능
test = true;
console.log(test);


// 연산자
/**
 *      + - * / .....
 *      ++  +=  ....
 *      && ||   ...
 * 
 *      true && (c = 11)    --> 맞으면 c = 11 대입
 *      false && (c = 12)
 *  
 *      10 == '10'      --> 쓰지마숑    !=
 *      10 === '10'                     !==
 */

 const obj_1 = {a: 11}
 const obj_2 = {a: 11}
 obj_1 === obj_2        // false
 obj_1 == obj_2         // false
 // 객체 비교 => JSON (객체 -> 문자열로 변경)
 JSON.stringify(obj_1)



// 함수
function funca(param) {
    // 코드
    return param.name;
    // 비구조화 할당
    // const {name} = param;
    // return name;
}

const funcb = (param) => {
    // 코드
}

// 조건문
const ex1 = 10;
if (ex1 < 20) {
    console.log("20보다 작다.");
}

switch (ex1) {
    case 1:
        console.log('ex1 === 1');
    case 2:
        console.log('ex1 === 2');
    default:
        console.log('ex1 === none');
}

// 삼항연산자
const personal_number = '1346235'
let gender = null;
// if (peosonal_number[0] === '1') {
//     gender = '남자';
// } else {
//     gender = '여자';
// }
personal_number[0] == '1' ? gender = '남자' : gender = "여자";

// 반복문
for (let i = 0; i < 10; i++) {
    // 코드
    // break; continue;
}

while (false) {
    // condition === true 실행할 코드
}



// 배열
const data = [1, '문자', {a:1}, () => {}];
console.log(data[3]);


// 배열 내장함수
const array = [1, 2, 3];

// forEach
array.forEach((element, i) => {
    // console.log(element, i);
});

for (let i = 0; i < array.length; i++) {
    // console.log(array[i], i);
}

// map          - 모든 값을 일정하게 바꿀 때
const result = array.map((element, i) => {
    // console.log(element, i);
    return element * 2;             // forEach와 차이점 : 리턴 가능
})
console.log(result);

// indexOf
console.log(array.indexOf(1));  // 0

// push
array.push(4);      // 원본 배열 수정됨.
console.log(array);

// slice    - 배열 복사
const array_copy = array.slice();

// sort
const list = [5, 2, 4, 3, 1];
list.sort((a, b) => {a - b});   // 오름차순 (-값 나오면 바꿈..)
list.sort((a, b) => {b - a});   // 내림차순


// 문자열 내장함수 (메소드)
const text = 'abc';
console.log(text.includes('b'));    // true
console.log(text.substring(1, 2));  // 'b'
console.log(text.toUpperCase());    // 대문자로..
console.log('ABC'.toLowerCase());    // 소문자로..

// Math (수학)
Math.floor(a / b);
Math.ceil(a / b);
Math.max();