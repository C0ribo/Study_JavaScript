/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 
 * 한개의 오브젝트 타입이있다. 
 * 
 * 1) Number (숫자) 
 * 2) String (문자열)
 * 3) Boolean (불리언, 참과 거짓)
 * 4) undefined 
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 * Function
 * Array
 * Object
 */

//Number type
const age = 32;
const tempature  = -10;
const pi =3.14;
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------------');

//String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브', 안유진";
console.log(ive);
console.log('-----------------');

//Template Literal
/***
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = '아이브\n안유진' //다음 행으로 이동
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영'; //탭(수평)
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리'; // 백슬래쉬
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리'; //작은 따음표를 표현
console.log(smallQutoation);

const iveWonYoung2 = `아이브 테스트 일이삼
장원영`; //백틱(``) 사이 내에 적는 모든 것이 그대로 출력된다.
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2); //출력되는 건 역시나 문자열이다. 

const groupName = '아이브'; 
console.log(groupName + ' 안유진'); //+ 다음에 ' (글)' 하면 그 사이에 공백이 생긴다. 
console.log(`${groupName} 안유진`);
console.log('-----------------');

/**
 * Boolean 타입
 * 
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------------');
/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined 로 값을 초기화하는 건 지양해야한다.
 */
let noInit;
console.log(typeof noInit);
console.log('-----------------');
/**
 * null 타입
 * 
 * undefined 와 마찬가지로 값이 없다는 뜻이나 
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할때 
 * 사용된다.
 */
let init =null;
console.log(init);
console.log(typeof init);
console.log('-----------------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 
 * 호출해서 사용
 */
const test1 ='1';
const test2 ='2';

console.log(test1 == test2); //false 로 나옴
console.log(test1 == test1);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); //심벌값은 다른 값과 중복되지 않는 유일무이한 값
console.log('-----------------');
/***
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red: '빨간색', 
    orange: '주황색',
    yellow: '노란색'
};

console.log(dictionary);
console.log(dictionary['red']);

console.log(typeof dictionary);
console.log('-----------------');
/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */
const iveMemebersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]
console.log(iveMemebersArray)
console.log('-----------------');

/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라갑니다.
 */
console.log(iveMemebersArray[0]);
console.log(iveMemebersArray[5]);

iveMemebersArray[0] ='코드팩토리';
console.log(iveMemebersArray);
console.log(typeof iveMemebersArray);

/**
 * static typing 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시한다
 *          C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 추론한다.
 *  JS -> dynamic typing
 */