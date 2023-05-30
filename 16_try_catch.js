/**
 * try ... catch
 * 
 * 1) 발생시킬때 -> 던진다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다.(catch)
 */
function runner(){
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다.');

        console.log('Code Factory');//에러 생기면 함수가 생성되다만다 
    }catch(e){
        console.log('----catch---'); //에러던진걸 잡을 때 사용
        console.log(e);//에러 내용을 출력했다. 
    } finally {
        //에러가 났던 안났던 무조건 실행하는 코드
        console.log('-----finally---');
    }
}
runner();