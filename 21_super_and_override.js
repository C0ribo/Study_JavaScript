/**
 * Super and Override
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;

    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    //dance / sing
    part;

    constructor(name, year, part){ //덮어쓰고 싶을 때 또 쓰고 
        super(name, year);//부모클래스 => IdolModel(); 하는것과 동일. 기존 생성자를 그대로 쓰고 싶을 경우 super키워드 쓰면 된다 
        this.part = part;
    }

    sayHello(){ //super keyword를 함수 안에서 쓰면 안된다. 
    
        //return `안녕하세요. ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`; 
        //부모클래스에서 sayHello 실행
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());//sayHello가 상속이 됐으니까
console.log(yuJin.sayHello());