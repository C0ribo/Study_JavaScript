/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('-----------');

console.log(name);
var name =  '코드팩토리'; //초기값을 내지 않아서 undefined 로 뜬다.
console.log(name);

/**
 * Hoisting 은 무엇인가
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log(yuJin);
let yuJin = '안유진';
//let 과 const 는 hoisting 방지