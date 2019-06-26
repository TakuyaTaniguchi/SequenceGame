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

//hitboxのサイズを取得
const clearArea = hitbox.offsetLeft;
const clearAreaEnd = hitbox.offsetLeft + hitbox.clientWidth;

//moveboxをスタート,ストップする。
const changeMoveAction = () => {
    moveBox.classList.toggle('-is-stop');
}

const hideStopBox = () => {
    startBox.style.display = "inline-block";
    event.target.style.display = "none";
}

const hideStartBox = () =>{
    stopBox.style.display = "inline-block";
    event.target.style.display = "none";
}

//moveBoxがclearArea,clearAreaEndのwidth内にある場合はtrueを返す。
const clearJudge　= (clearArea,clearAreaEnd,moveBoxLeft,moveBoxRight) =>{
    if(clearArea <= moveBoxLeft && clearAreaEnd >= moveBoxLeft ){
        return alert('Clear');
    }else if(clearArea <= moveBoxRight  && clearAreaEnd >= moveBoxRight  ){
        return alert('Clear');
    }
}

stopBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStopBox();
    //moveboxのサイズを取得
    const moveBoxLeft = moveBox.offsetLeft;
    const moveBoxRight = moveBox.offsetLeft + moveBox.clientWidth;
    clearJudge(clearArea,clearAreaEnd,moveBoxLeft,moveBoxRight);
 });

startBox.addEventListener('click',(event)=>{
    changeMoveAction();
    hideStartBox();
 });