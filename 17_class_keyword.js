/**
 * Class Keyword
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 
 * 메소드(함수)를 정의하는 일종의 틀 => 정보를 일반화해서 정리하는 방법
 * 객체 안에 들어있는 함수 -> 메소드
 */

class IdolModel{ //class는 대문자로 시작
    name;//property
    year; //지워져도 잘 작동됨다. 정의를 왠만해서 하는게 좋다. 

    constructor(name, year){ //이름을 같게 해야한다.
        this.name = name; //this는 현재 인스턴스를 말함
        this.year = year; //this.name의 name은 class 밑의 name이고 
        //=name은 constructor name이다. 

    }

    sayName(){//function
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}
//constructor - 생성자
const yuJin = new  IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

//constructor 장점 : 한번 만들어놓으면 빵틀처럼 계속 쓸 수 있다. 

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel); //function
console.log(typeof yuJin);//object

//class는 함수로 인식된다. 