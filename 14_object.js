/**
 * Object 객체
 */

//key : value pair
// let yuJin = {
//     name: '안유진',
//     group: '아이브',
//     dance: function(){
//         return '안유진이 춤을 춥니다.';
//     }
// };
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`; //객체지향 프로그램이 되는 언어는 대부분 this가 존재, 객체를 가르킴
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

console.log('------------------');

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';
console.log('------------------');

const yuJin2 = { //
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리'; //그룹을 코드팩터리로 변경한다. 
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; //새로운게 삽입된다.
console.log(yuJin2);

delete yuJin2['englishName']; //추가했던걸 삭제한다.
console.log(yuJin2);
console.log('------------------');

/**
 * 객체의 특징
 * 1) const 로 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 매서드는 변경할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',

}
console.log(wonYoung);

//wonYoung = {}; //이미 한번 초기화가 되면 값을 변경할 수 없다 
wonYoung['group'] = '코드팩트리';
console.log(wonYoung);
console.log('------------------');

/**
 * 모든 키값 다 가져오기
 * 
 */
console.log(Object.keys(wonYoung));

/**
 * 모둔 벨류 값 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name: name, //그냥 하나만 입력하는 것과 같다. 
    name,
};
console.log(yuJin3);