/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){//new 키워드 안썼지만 쓴것처럼 하기 위해 표현방법
        //undefined 일때만 실행된다
        return new IdolModel(name, year);
    }//함수 안에서 같은 함수를 실행할 수 있다. 

    this.name = name;
    this.year = year;
    
    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
//new 키워드는 일반 함수에서만 쓸수 있다. 

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
//console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003); //new 안쓰면 undefined로 나온다.
console.log(yuJin);
//console.log(global.name);// 하지말라고 하는 예시

//에로우 함수로 생성자를 만들수 있는지
const IdolModelArrow = (name, year)=> {
    this.name =name;
    this.year=year;

};
const yuJin3 = new IdolModelArrow('안유진', 2003); //=> 에러 