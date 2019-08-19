/**
 * import SCSS
 */
import "./style.scss";

/**
 * JavaScript
 */
const area = document.querySelector('.area');
const stopBox = area.querySelector('.stopBox');
const startBox = area.querySelector('.startBox');
const moveBox = area.querySelector('.sequence_bar_movebox');
const hitbox = area.querySelector('.sequence_bar_hitbox');
const resultTextEl = area.querySelector('.result_text');
const score = area.querySelector('.score');
const jsContent = document.querySelector('.js-content')
let countStage = 1;


//hitboxのサイズを取得
const clearArea = hitbox.offsetLeft;
const clearAreaEnd = hitbox.offsetLeft + hitbox.clientWidth;

//moveboxをスタート,ストップする。
const changeMoveAction = () => {
    area.classList.toggle('-is-stop');
}

const hideStopBox = () => {
    startBox.style.display = "block";
    event.target.style.display = "none";
}

const hideStartBox = () =>{
    stopBox.style.display = "block";
    event.target.style.display = "none";
}

//moveBoxの成否判定
const clearJudge　= (clearArea,clearAreaEnd,moveBoxLeft,moveBoxRight) =>{
    if(clearArea <= moveBoxLeft && clearAreaEnd >= moveBoxLeft || clearArea <= moveBoxRight  && clearAreaEnd >= moveBoxRight){
        return true;
    }else{
        return false;
    }
}

const nextStage = (countStage) => {
    let nextStageCount = countStage;
    setTimeout(function(){
        area.classList.add(`-stage${nextStageCount}`);
        score.textContent = `stage${nextStageCount}/10`;
    },1000)
}

const resetGame = (countStage) => {
    let prevStageCount = countStage - 1;
    resultTextEl.textContent = '';
    area.classList.remove(`-stage${prevStageCount}`);
    //aaa
    jsContent.classList.remove('-is-clear')
}

stopBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStopBox();
    //moveboxのサイズを取得
    const moveBoxLeft = moveBox.offsetLeft;
    const moveBoxRight = moveBox.offsetLeft + moveBox.clientWidth;
    const clearJudgeBool = clearJudge(clearArea,clearAreaEnd,moveBoxLeft,moveBoxRight);
    if(clearJudgeBool){
        resultTextEl.textContent = 'Clear';
        //aaaaa
        jsContent.classList.add('-is-clear')

        countStage++;
        setTimeout(function(){
            resetGame(countStage);
            nextStage(countStage);
        },1000)
    }else{
        resultTextEl.textContent = 'Failed';
    }
 });

startBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStartBox();
 });