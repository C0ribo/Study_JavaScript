/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 *
 */

let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('--------------');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); //parseInt : 정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //parseFloat : 
console.log(typeof +'1', +'1'); 

console.log('--------------');
/** 
 * Boolean 타입으로 변환
 */
console.log(!'x'); //! 는 아니다. / !! 아니다의 아니다 이므로 true가 나온다.
//string 의 값이 있으면 어떤 값이라도 무조건 true 가 나오게 된다
console.log(!!''); //string은 값이 있냐 없냐로 true false 구분
console.log(!!0); //숫자는 false
console.log(!!'0'); //0이라는 걸 string 으로 나타내면 true가 나옴 -> string에 글자가 있다
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
/**
 * 
 */

console.log(!!{}); // 무조건 그냥 true로 나온다. 
console.log(!![]); //값이 있든 없든~

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false
 */