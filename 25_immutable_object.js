/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }

}
console.log(yuJin);

/**
 * Extensible
 * 확장이 가능한지 여부를 설정할 수 있는것이다. 
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin); //isExtensible은 추가 불가능하게 한다. 

delete yuJin['position'];
console.log(yuJin);
//값을 삭제할수만 있고 추가할 수는 없다. => 그게 extensible기능
console.log('--------------');
/**
 * Seal
 */
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

console.log(Object.isSealed(yuJin2));
//isSealed 는 봉인이 되어있냐 아니냐의 질문이기에 기본값이 false가 나옴

Object.seal(yuJin2); //봉인이 되었다. 
console.log(Object.isSealed(yuJin2)); 

yuJin2['groupName'] = '아이브'; //봉인이 되었기 떄문에 추가가 안된다. 
console.log(yuJin2);

delete yuJin2['name'];//삭제도 불가능하다.
console.log(yuJin2);

//property attribute 설정 변경
Object.defineProperty(yuJin2, 'name', {
    //seal을 하는 작업은 configurable을 false로 바꿔주는 것과 동일하다.
    value: '코드팩토리',
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log('--------------');
/**
 * freezed
 * 
 * 읽기외 모든 기능을 불가능하게 만든다. 
 */

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }

}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3); //동결 시키는 방법
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: 'code Factory'
// }) => 오류나옴
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    }
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
//상위 오브젝트가 프리즈 되었다고 해서 하위 오브젝트가 프리즈되지 않는다 