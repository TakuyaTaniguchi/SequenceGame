/**
 * import SCSS
 */
import "./style.scss";

/**
 * JavaScript
 */
const stopBox = document.querySelector('.stopBox');
const startBox = document.querySelector('.startBox');
const moveBox = document.querySelector('.sequence_bar_movebox');
const hitbox = document.querySelector('.sequence_bar_hitbox');
const resultTextEl = document.querySelector('.result_text');
const score = document.querySelector('.score');
let countStage = 1;


//hitboxのサイズを取得
const clearArea = hitbox.offsetLeft;
const clearAreaEnd = hitbox.offsetLeft + hitbox.clientWidth;

//moveboxをスタート,ストップする。
const changeMoveAction = () => {
    moveBox.classList.toggle('-is-stop');
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
    if(clearArea <= moveBoxLeft && clearAreaEnd >= moveBoxLeft ){
        return true;
    }else if(clearArea <= moveBoxRight  && clearAreaEnd >= moveBoxRight  ){
        return true;
    }else{
        return false;
    }
}

const nextStage = (countStage) => {
    let nextStageCount = countStage;
    setTimeout(function(){
        moveBox.classList.add(`-stage${nextStageCount}`);
        score.textContent = `stage${nextStageCount}/10`;
    },1000)
}

const resetGame = (countStage) => {
    let prevStageCount = countStage - 1;
    resultTextEl.textContent = '';
    moveBox.classList.remove(`-stage${prevStageCount}`);
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