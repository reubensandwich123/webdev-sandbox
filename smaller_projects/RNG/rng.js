
let label = document.getElementById("number");
let randomnum = 0;
let roll = document.getElementById("myButton");
let min = document.getElementById("Min");
let max = document.getElementById("Max");
roll.onclick = function(){
    let minNum = Number(min.value);
    let maxNum = Number(max.value);
    randomnum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    label.textContent = randomnum;
}