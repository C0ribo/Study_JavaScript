/**
 * fuction ->함수
 * 
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 string 으로 변환해서 
 * 반환 받고 싶아면?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
console.log('------------');

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();
console.log('------------');
function calculate(number){
    console.log((number * 10 / 2 % 3).toString());
}
// 함수에서 입력받는 값에 대한 정의 parameter 
// 실제 입력하는 값은 argument
calculate(4);
calculate(5);
console.log('------------');
function multiply(x, y){
    console.log(x * y);
}
multiply(2,3);
console.log('------------');
function multiply(x,y=10){
    console.log(x * y);
}
multiply(2);
console.log('------------');

/**
 * 반환받기
 * return 받기
 */
function multiply(x,y){
    return x * y;
}

const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(5,6);
console.log(result2);
//함수 내부에서 함수 외부로 받을 수 있다.

/**
 * Arrow 함수
 * 
 */
const multiply2 = (x,y) => {
    return x * y;
}
console.log(multiply2(3,4));

const multiply3 = (x,y)=>x *y; // 그냥 간편하니까 만든것이다.
console.log(multiply3(4,5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z =>  `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){ //multiply5 와 동일
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x,y){
    return x * y;
}
console.log(multiplyTwo(4,5));

//arguments 예
//x=> 0, y=> 1 , z=> 2
const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x * y *z;
}
console.log('---------------------');
console.log(multiplyThree(4,5,6));

const multiplyAll = function (...arguments){
    return Object.values(arguments).reduce((a,b) => a * b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));

//immediately invoked fuction 즉시 실행 함수
(function(x,y){
    console.log(x * y);
})(4,5)

//함수는 Object 이다.
console.log(typeof multiply);
console.log(multiply instanceof Object);