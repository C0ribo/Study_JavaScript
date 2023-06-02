/**
 * Callback
 */
function waitAndRun(){
    setTimeout(()=> {//콜백함수: 다시 불리다 라는 뜻, 이 시간(timeout)이 지난 후 다시 불린다.
//특정 작업이 끝나고 다시 불리는 함수가 콜백함수이다. 나중에 실행되는 함수
        console.log('끝');
    }, 2000);
}
// waitAndRun();

function waitAndRun2(){
    setTimeout(
        () => {
        console.log('1번 콜백 끝');

        setTimeout(()=> {
            console.log('2번 콜백 끝');

            setTimeout(()=>{
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject)=> {
//괄호 안에는 이름은 중요하지 않고, 순서가 제일 중요
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});
//resolve라는 함수를 실행하는 순간에 반환값을 받을 수 있다. 
// timeoutPromise.then((res)=>{
//     console.log('---then---');
//     console.log(res);
// });

//promise를 반환하는 함수를 만들 수 있다. 예제
const getPromise = (seconds) => new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('완료');
        //reject('에러');

        // if(xxx){
        //     resolve('성공');
        // }else{
        //     reject('에러');
        // }

    }, seconds * 1000);
});

// getPromise(3).then((res)=> {
//     console.log('--- first then ---');
//     console.log(res);
//     return getPromise(3);
// })
// .catch((res)=>{
//     console.log('--- first catch --- ');
//     console.log(res);
// })
// .finally(()=>{
//     console.log('--- finally ---');
// });
// }).then((res) => {
//     console.log('--- second then ---');
//     console.log(res);
//     return getPromise(4);
// }).then((res) => {
//     console.log('--- third thene ---');
//     console.log(res);
//     return getPromise(4);
// });
//resolve => then 실행
//reject => catch 실행

//여러개의 프로미스를 동시에 실행시킬수 있다. 

Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});