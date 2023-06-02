/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 떄문에 함수의 상위 스코프가 정의 시점에 평가된다.
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. (******)
 */
const testFunction = function(){
    return this;
}
console.log(testFunction());
console.log(testFunction() === global);//testFunction이 global scope라는 사실

const yuJin = {
    name : '안유진',
    year : 2003,
    //현재 객체를 의미
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}
console.log(yuJin.sayHello());
console.log('---------------');

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}
const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());//yuJin2 객체에 매핑
console.log('---------------');

Person.prototype.dance = function(){
    //프로토타입에다가 함수를 정의를 해도 this키워드는 실행하는 대상의 객체로 매핑된다 
    return `${this.name}이 춤을 춥니다. `;
}
console.log(yuJin2.dance());
console.log('---------------');

Person.prototype.dance = function(){
    //객체의 매서드로 가장 상위레벨에다가 함수를 선언을 하면 this가 자동으로 실행하는 객체에 맵핑이 되지만
    //만약에 그외의 위치에다가 함수를 선언을 하게 되면은 함수의 this은 무조건 global object에 매핑됨
    //
    function dnace2(){
        return `${this.name}이 춤을 춥니다. `;
    }
    return dnace2();
}
console.log(yuJin2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출할땐 this가 최상위 객체(global 또는 window)를 가르킨다.
 * 2) 매서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName(){
    return this.name;//global 에 맵핑
}
console.log(returnName());

const yuJin3 = {
    name : '안유진',
}

console.log(returnName.call(yuJin3));//yuJin3로 맵핑하고 싶을때 하는 방법
//this 가 yuJin3에 바인딩이 되었기 때문에 안유진이 출력된다. 
console.log(returnName.apply(yuJin3));
console.log('---------------');
/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 *  
 */
function multiply(x,y,z){
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3,4, 5));
console.log(multiply.apply(yuJin3, [3,4,5]));

/**
 * bind()
 * this를 바인딩만 시켜놓고 나중에 할 수 있다. 
 */
const laterFunc = multiply.bind(yuJin3, 3,4,5);
console.log(laterFunc);//bound는 bind의 과거형
console.log(laterFunc());

//