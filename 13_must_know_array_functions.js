/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]
console.log(iveMembers);

//push() 아이템 추가, 직접 변경해서 변경된 것이다.
// iveMembers.push('코드팩토리');
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('--------------')
//pop()
console.log(iveMembers.pop()); //마지막 요소를 제거해주고 반환해준다.
console.log(iveMembers);

console.log('--------------')

//shift()
console.log(iveMembers.shift()); //첫번째 값을 반환받고 삭제받는다. 
console.log(iveMembers);
console.log('--------------')
//unshift()
console.log(iveMembers.unshift('안유진')); //push랑 비슷하지만 첫번째 값을 집어넣는다. 새로 늘어난 길이를 반환해준다. 
console.log(iveMembers);
console.log('--------------')
//splice() , 두가지 값을 집어넣는걸 추천 => 첫번째 값은 어떤 인덱스부터 삭제할지, 두번째 몇개를 삭제하고 싶은지 
console.log(iveMembers.splice(0,3));
console.log(iveMembers);
console.log('--------------')


let fruitName = [
    '수박',
    '자몽',
    '참외',
    '사과',
    '배',
    '체리'
];
console.log(fruitName);

//concat() 새로운 array를 만들어서 사용, 새로 만들어서 반환, 변경됮 않음
console.log(fruitName.concat('코드팩토리'));
console.log(fruitName);

//slice() => 첫번째는 어떤 인덱스부터 삭제할지 정하고 두번쨰는 몇번 인덱스까지 삭제할지 넣은 숫자는 제외하고 그 전까지 삭제해줌
console.log(fruitName.slice(0,3));
console.log(fruitName);

//spread operator
let fruitName2 = [
    ...fruitName, //... 안하면 리스트 안에 리스트가 들어가게 된다. 
];
console.log(fruitName2);
console.log('--------------')
//join() 모든 값을 string 으로 엮을 때 많이 씀
console.log(fruitName.join());
console.log(fruitName.join('/'));
console.log(fruitName.join(', '));
console.log('--------------')
//sort 
//오름차순
fruitName.sort();
console.log(fruitName);
console.log(fruitName.reverse()); //정렬된 값을 반대로 바꿔준다.

console.log('--------------')
let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);
//a, b를 비교했을 때
//1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
//2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
//3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 :-1;
});
console.log(numbers);

numbers.sort((a,b)=> a >b ? -1 : 1);
console.log(numbers);
console.log('--------------')

//map() 모든 함수를 순환한다.
console.log(fruitName.map((x)=> x));
console.log(fruitName.map((x) => `과일: ${x}`));

console.log(fruitName.map((x) =>{
    if(x === '참외'){
        return `과일: ${x}`;
    }else{
        return x;
    }
}));
console.log(fruitName); //변경이 되지 않았다.
console.log('--------------')
//filter()
numbers = [1,8,7,6,3];

console.log(numbers.filter((x)=> true));
console.log(numbers.filter((x)=> false)); //모두 넣지 말라고 했으니까
console.log(numbers.filter((x)=> x % 2 ===0)); //짝수만 필터링
console.log('--------------')
//find() 해당되는 첫번째 값만 반환
console.log(numbers.find((x)=> x % 2 ===0 ));

console.log('--------------')

//findIndex(), find 랑 똑같은데 index를 반환
console.log(numbers.findIndex((x)=> x % 2 ===0 ));

//reduce(), 두번쨰 시작하고 싶은 값, 첫번째 함수 

console.log(numbers.reduce((p,n)=>p+n, 0));