/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class 와 oop
 * 3) fuction을 사용해서 객체 생성
 */

const yuJin = {
    name: '안유진', year: 2003
};
console.log(yuJin);

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

//생성자 함수 
function IdolFunction(name, year){ //함수에는 constructor가 없어서 파라미터에 넣음{
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('기을', 2002); // 할당해줘야지 new 키워드 쓸수 잇음
console.log(gaEul);