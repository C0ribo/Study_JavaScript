/**
 * Static Keyword
 */
// class IdolModel{
//     name;
//     year;
//     static groupName = '아이브'; //객체에 귀속되지 않음

//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName); // new는 객체를 만들때 쓰기때문에 static 안씀
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;

    }
    static fromObject(object){ //fromObject는 새로운 아이돌모델을 만들어 반환
        return new IdolModel(object.name, object.year);
    }

    static fromList(list){
        return new IdolModel(list[0], list[1]);
    }
}
const yuJin2 = IdolModel.fromObject({
    name:'안유진',
    year: 2003,
});
console.log(yuJin2)

const wonYoung = IdolModel.fromList(
    ['장원영', 2002]
);
console.log(wonYoung);