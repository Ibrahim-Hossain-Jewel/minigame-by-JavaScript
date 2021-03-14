//Declare all variable using const;
const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');
//Declare an keyboard press arrowkey;
var keys = {
    LeftArrow:false,Uparrow:false,Rightarrow:false,Downarrow:false
}
var player = {};
startscreen.addEventListener('click',start);
//keypress addEventListener();
document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);
function playgame(){
    console.log('palyed');
    if(player.start){
    window.requestAnimationFrame(playgame);
    }
}
function pressOn(e){
    e.preventDefault();//Removed default value now set new value
    keys[e.key] = true;
    console.log(keys);
}
function pressOff(e){
    e.preventDefault();
    keys[e.key]=true;
    console.log(keys);
}
function start(){
    console.log('animation started');
    player.start = true;
    window.requestAnimationFrame(playgame);
    //now add and remove the hide class from an element;
    startscreen.classList.add('hide');
    gamearea.classList.remove('hide');
    //now creating a element for the game car;
    let car = document.createElement('div');
    car.innerText = 'car';
    gamearea.appendChild(car);
    
}