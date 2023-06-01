/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프러퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 
 *                  설정할 때 호출되는 함수로 구성된 프로퍼티 
 *                  예를들면 getter와 setter
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
//대문자로 시작하면 클래스 이름이거나 생성자 함수 
//클래스에 점이 붙으면 static 함수 
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티값을
 *                 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부, for...in 룹 등을 사용할 수 있으면 
 *                  true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단
 *                  false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지
 *                  단, writable이 true인 경우 값 변경과 writable을 변경하는건
 *                  가능하다. 
 */
// console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log('--------------');
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

//yuJin2.height = 172; //키 추가 방법1
//yuJin2['height'] = 172; //키 추가 방법2
//console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
}) //value 값만 하고 나머지는 지워도 false 로 나온다.
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

yuJin2.height = 172; //writable을 false로 바꾸면 값을 변경할 수 없다
console.log(yuJin2);
console.log('--------------');
/**
 * Enumerable 열거를 할 수있는지 없는지 
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log(Object.keys(yuJin2)); //enumerable 을 false로 해서 열거불가능.
for(let key in yuJin2){
    console.log(key);
} 
console.log(yuJin2);
console.log(yuJin2.name);

console.log('--------------');

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    configurable: false,
    writable:true, //동시에 하면 변경이 된다 
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false, //configurable을 false로 해서 오류난다. 
// })

Object.defineProperty(yuJin2, 'height', {
    value: 172, //writable가 true이므로 값이 변경된다.
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     writable: true, 
//     //configurable: false => 일때 true로 하면 오류가 생긴다. 
// });

//configurable을 false로 만들면 기본적으로 contribute Attribute는 변경이 불가능
//예외 기본 writable: true일 경우 value값은 변경할 수 있다. 
//writable을 ture=>false로 변경가능, false=>true 불가능