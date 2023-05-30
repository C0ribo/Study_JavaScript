/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference
 */
let original = '안녕하세요'; //안녕하세요를 저장
let clone = original; //복사를 한것

console.log(original);
console.log(clone);

clone += ' 안유진입니다.'; //클론의 변수에 더한것. 
console.log('--------------');
console.log(original);
console.log(clone);

console.log('--------------');

let originalObj = { //객체가 메모리에 할당
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('--------------');

originalObj['group'] = 'codefactory';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
//coneole.log(original === clone);

//example
const yuJin1 = {
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}
console.log(yuJin1 === yuJin2);
console.log(yuJin2 === yuJin3);
console.log(yuJin1 === yuJin3);
console.log('--------------');
/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3, //copy by values
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3
};
console.log(yuJin5);
console.log('--------------');
const yuJin6 ={
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);
console.log('--------------');

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);
console.log('--------------');

const numbers = [1,3,5];
const numbers2 = [
    ...numbers,
    10, //위치가 중요함
];
console.log(numbers2);