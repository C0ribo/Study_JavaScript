/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log( 10 +10);
console.log(10-10);
console.log(10*10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('----------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number =1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('----------------');
/**
 * 연산자의 위치
 * 
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number; //선임한테 뒷통수 맞는다. 왠만해서 뒤에 쓴다.
console.log(result, number);

result = -- number;
console.log(result, number);
console.log('----------------');

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true; //true =0
console.log(+sample);
console.log(typeof +sample);

sample = false; //false = 0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
//NaN -> Not a Number
console.log(+sample);

sample = '90';
console.log(-sample);
console.log(typeof -sample);
console.log('----------------');
/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log('----------------');

/**
 * 비교연산자
 * 
 * 1) 값의 비교(사실상 잘 안씀)
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('----------------');
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('----------------');
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('----------------');
console.log(5 !== 5); //5는 5가 맞으니까 혼자 false 
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('----------------');

/***
 * 대소 관계 비교연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log('----------------');
/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
//조건 ? 참 : 거짓
console.log('----------------');
/**
 * 논리 연산자
 * 1) &&(and)
 * 2) || (or)
 */
// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('----------------');
// ||는 하나만 true 여도 true를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('----------------');
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log('----------------');
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('----------------');
/**
 * 단축 평가(short circuit evaluation) 
 * 실무에서 많이 쓰고 외워야한다.
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('----------------');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);