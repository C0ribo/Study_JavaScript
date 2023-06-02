/**
 * Async theory
 */
// function longWork(){
//     const now = new Date();

//     /**
//      * millseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
//      * 
//      */
//     const millseconds = now.getTime();
//     const afterTwoSeconds = millseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }
//     console.log('완료');
// }
// console.log('hello');
// longWork();
// console.log('world');


//비동기 예제
function longWork(){
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}
console.log('hello');
longWork();
console.log('world');