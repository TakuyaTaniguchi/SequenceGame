/**
 * import SCSS
 */
import "./style.scss";

/**
 * JavaScript
 */
const body = document.querySelector('body');
const area = document.querySelector('.area');
const stopBox = area.querySelector('.stopBox');
const startBox = area.querySelector('.startBox');
const moveBox = area.querySelector('.sequence_bar_movebox');
const hitbox = area.querySelector('.sequence_bar_hitbox');
const resultTextEl = area.querySelector('.result_text');
const score = area.querySelector('.score');
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
        score.textContent = `stage${nextStageCount}/3`;
        body.classList.remove('-is-clear')
    },1000)
}

const resetGame = (countStage) => {
    let prevStageCount = countStage - 1;
    resultTextEl.textContent = '';
    area.classList.remove(`-stage${prevStageCount}`);
}

const CongratulationsGame = () =>{
    body.classList.add('-is-Congratulations');
}

stopBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStopBox();
    //moveboxのサイズを取得
    const moveBoxLeft = moveBox.offsetLeft;
    const moveBoxRight = moveBox.offsetLeft + moveBox.clientWidth;
    const clearJudgeBool = clearJudge(clearArea,clearAreaEnd,moveBoxLeft,moveBoxRight);
    if(clearJudgeBool){
        countStage++;

        resultTextEl.textContent = 'Clear';
        //CLEAREフラグ
        body.classList.add('-is-clear')
        if(countStage === 4){
            CongratulationsGame();
        }else{
            setTimeout(function(){
                resetGame(countStage);
                nextStage(countStage);
            },500)
        }
    }else{
        resultTextEl.textContent = 'Failed';
    }
 });

startBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStartBox();
 });