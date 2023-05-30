/**
 * Inheritance(상속)
 * 객체들 간의 관계를 구축하는 방법
 * 슈퍼클래스 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

//IdolModel(name, year) => 부모/슈퍼 클래스(parent/super class)
//  FemaleIdolModel (dance()) => 자식 클래스(child class)
//  MaleIdolModel(sing()) => 이하 동일 
//상속은 부모 클래스에서 받은걸 말한다. 

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{ //extends: 상속받고 싶은걸 넣는거
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return `${this.name}이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);
console.log('----------------------');

console.log(yuJin.dance());
console.log(yuJin.name);
console.log('----------------------');

console.log(jiMin.sing());
console.log(jiMin.year);
console.log('----------------------');

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);
console.log(cf.name);
console.log('----------------------');

console.log(yuJin instanceof IdolModel);//유진은 아이돌모델의 속성일까?
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);
console.log('----------------------');

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);
console.log('----------------------');

console.log(cf instanceof IdolModel);//cf는 아이돌모델에 속해 있기 떄문
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);