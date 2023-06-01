/**
 * Prototype
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다
console.log(testObj.__proto__); //class또한 오브젝트로 인스턴스 되기 떄문에 가능

function IdolModel(name, year){
    this.name = name;
    this.year =year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//     showHidden: true, //숨겨져 있는 값을 보여주게 하는 방법
// });

//circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype); // idolModel.prototype 상속받음

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__===Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype); 
//idolmodel.prototype은 Object.prototype 상속을 받았다 .

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);

console.log(yuJin2.hasOwnProperty('sayHello')); 
// hasOwnProperty: 상속을 받은 프로퍼티인지 고유 프로퍼티인지 확인할수 있음

function IdolModel3(name, year){
    this.name = name;
    this.year =year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); 

console.log(yuJin3.hasOwnProperty('sayHello'));

//인스턴스에서는 존재하지 않습니다. 
IdolModel3.sayStaticHello = function(){
    return '안녕하세요. 저는 static method입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 *Overriding
 */

function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){//이걸로 덮어씌운다. 
        return '안녕하세요 저는 인스턴스 매서드 입니다.'
    }
}
IdolModel4.prototype.sayHello = function(){
    return '안녕하세요. 저는 prototype 메서드 입니다.';
}

const yuJin4 = new IdolModel4('안유진', 2003);

//프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * 
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 * 
 */
function IdolModel(name, year){
    this.name =name;
    this.year =year;

}

IdolModel.prototype.sayHello = function(){
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year){
    this.name = name;
    this.year =year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__===IdolModel.prototype);//얘가 얘고 얘가 얘라서 둘이 같다.
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray)===FemaleIdolModel.prototype);
//console.log(ray.sayHello());//sayHello 라는 걸 선언하지 않아서 안댐 

Object.setPrototypeOf(ray, IdolModel.prototype);//상속하는 대상을 바꿔버림
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);//
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray)===FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray)===IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo)===FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);