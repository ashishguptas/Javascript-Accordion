const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexbtn');
const bodyBg = document.querySelector('body');
const hexCode = document.querySelector('.hexcode');

hexBtn.addEventListener('click', changeBg);
 
function changeBg(){
    let hexcol = '#';
    for(i = 0; i < 6;i++){
        const random = Math.floor(Math.random()*hexNum.length);
        // console.log(random)
        hexcol += hexNum[random];
        // console.log(hexcol);
    }
    bodyBg.style.backgroundColor = hexcol;
    hexCode.innerHTML = hexcol;
}
changeBg();