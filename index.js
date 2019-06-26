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
const clearAreaEnd = hitbox.offsetLeft + 30;


stopBox.addEventListener('click',(event)=>{
    moveBox.classList.add('-is-stop');
    startBox.style.display = "inline-block";
    event.target.style.display = "none";
    moveBoxLeft = moveBox.offsetLeft;
    moveBoxRight = moveBox.offsetLeft + 10;
    if(clearArea <= moveBoxLeft && clearAreaEnd >= moveBoxLeft ){
        alert('Clear');
    }else if(clearArea <= moveBoxRight  && clearAreaEnd >= moveBoxRight  ){
        alert('Clear');
    }
 });

startBox.addEventListener('click',(event)=>{
    moveBox.classList.remove('-is-stop');
    stopBox.style.display = "inline-block";
    event.target.style.display = "none";
 });