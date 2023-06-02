/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}
//levelOne();

function levelOne(){//덮어쓰기 
    var numberOne = 40;//가장 가까운 스코프를 가져오기 때문에 
    console.log(numberOne);
}

levelOne();

console.log(numberOne);

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`); //같은 함수 안에 있으니까 가까운 넘버투값 가져옴
        console.log(`levelTwo numberOne : ${numberOne}`);//레벨 투 안에 없으니까 상위있는 넘버원 값을 가져온다
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}
levelOne();
console.log(numberOne);
//console.log(numberTwo);//하위 스코프 안에 있어서 접근을 할 수가 없어서 에러남

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다. 
 * 
 * Dynamic Scope
 * 실행된 위치가 상위 스코프를 정한다. 
 */
var numberThree =3;//글로벌 스코프
function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){//functionTwo 같은 경우 우리가 numberThree라는 글로벌 스코프에서 가져왓다
    console.log(numberThree);
}
functionOne();

console.log('---------------');

var i =999;//var 키워드를 썼을 때 새로운 스코프를 만들어내지 않습니다. 

for(var i=0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);
console.log('---------------');

i = 999;
// block level scope
for(let i =0; i<10; i++){
    //let ,const 를 쓸 경우 for룹, if, while룹 같은 블록레벨 스코프도 만들어낼수 있다.
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코르와 블록 레벨 스코프를 만들어낸다. 
 */