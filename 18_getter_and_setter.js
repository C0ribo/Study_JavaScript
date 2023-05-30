/**
 * Getter and Settter
 */

class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    //getter 역할
    //1) 데이터를 가공해서 새로운 데이터를 반환할 때
    //2) private 한 값을 반환할 때
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    //setter는 새로운 데이터를 저장할때 
    set setName(name){ //setter는 paramter를 무조건 한개씩 받게되어있다.
        this.name = name; //property(name)
        //this.year = year;
    }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //()를 쓰지말아

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2 {
    #name;//es7
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }//get을 써서 name값을 가져올 수 있도록 한다. 

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); //year 값만 가져옴
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);