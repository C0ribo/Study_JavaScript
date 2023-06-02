/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다. 
 * 
 * 상위함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다. 
 */
function getNumber(){ // 상위 함수
    var number = 5;

    function innerGetNumber(){ // 하위 함수
        return number;
    }
    return innerGetNumber();
}
//하위 함수가 상위 함수보다 오래 살아있는 게 아니다. innerGetNumber를 실행해주고 반환해주면
//풀스택에서 innerGetNumber는 사라진다. 그다음에 getNumber가 사라질 것이다. 

// console.log(number); 이러면 작동이 안된다는 예
//console.log(getNumber());

//innerGetNumber가 오래 살아있을 수 있게 하는 방법
function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }
    return innerGetNumber;
    //innerGetNumber를 그냥 반환해준다. 
}

const runner = getNumber();

console.log(runner);
//innergetnumber를 실행하지 않고 함수 자체를 반환했기 떄문에 
console.log(runner());
//innerGetNumber는 getNumber가 이미 실행된 이후에 실행되었다. 그다음에 runner를 실행했다. 
//이미 getNumber가 call stack 에서 사라진 다음에 실행했다 ;
//이게 바로 클로저 이다. 

/**
 * 1) 데이터 캐싱
 */

function cacheFunction(newNumb){
    //아래 계산은 매우 오래 걸린다는 가정을 했을때
    var number = 10 * 10;
    
    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}
// console.log(cacheFunction(10));
const runner2 = cacheFunction();
console.log(runner2(10));

//값을 변경하고 자 할때 
//클로저는 값을 저장해서 계속 쓸수 있다. 
function cacheFunction2(){
    var number  = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}
const runner3 = cacheFunction2(); 
console.log(runner3());
console.log(runner3());

/**
 * 3. 정보 은닉
 */
function Idol(name, year){
    this.name = name;

    var _year = year;//객체로 값을 저장해놓지 않았기 떄문에 undefined 가 된다.  

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}
const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);