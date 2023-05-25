/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=10; i>0; i--){
    console.log(i);
}

console.log('----------------')

for(let i=0; i<3; i++){
    for(let j=3; j>0; j--){
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력해라
let square = '';
let side = 6;

for(let i=0; i<6; i++){
    for(let j=0; j<side; j++)
    {
        square += '*';
    }
    square += '\n';
    
}
console.log(square);

/**
 * for...in 인덱스 값을 가져오고 싶을때 
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}
console.log('---------');

for(let key in yuJin){
    console.log(key);
}
const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈','이서'];
console.log('---------');

for(let key in iveMembersArray){
    console.log(key); // 0,1,2,3,4,5 는 인덱스 값
    console.log(`${key}:${iveMembersArray[key]}`);
}
console.log('---------');
/**
 * for...of 값을 가져오고 싶을때 씀
 */

for(let value of iveMembersArray){
    console.log(value);
}
console.log('---------');
/**
 * while
 */
let number =0;
while(number < 10){ //조건이 false 될때까지 계쏙 된다.
    number ++;
}
console.log(number);
console.log('---------');
/**
 * do...while (잘 안씀)
 */
number =0;
do {
    number++;
}while(number<10);
console.log(number);

//while: 조건을 먼저 판단한 후에 true 이면 실행
//do while : 먼저 실행하고 그 후에 조건을 판단한다
console.log('---------');
/**
 * break문
 */
for(let i=0; i<10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}
console.log('---------');
number =0;
while(number<10){
    if(number ===5){
        break;
    }
    number++; // number가 0으로 초기화 선언했지만 5가 아닌 이유로 number++와서 1증가했기 때문에 1로 출력될 수 밖에 없다.
    console.log(number);
}
console.log('---------');
/**
 * continue
 */
for(let i=0; i<10; i++){
    if(i===5){
        continue; //continue는 해당하는 5만 중단하고 그 다음꺼로 진행한다.
    }
    console.log(i);
}
console.log('---------');

number=0;
while(number<10){
    number ++;
    if(number ===5 ){
        continue;
    }
    console.log(number);
}