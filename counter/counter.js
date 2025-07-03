const decrease = document.getElementById("Decrease");
const reset = document.getElementById("Reset");
const increase = document.getElementById("Increase");
const label = document.getElementById("counterLabel");

let count = 0;

decrease.onclick = function(){
    count--;
    label.textContent = count;

}
increase.onclick = function(){
    count++;
    label.textContent = count;
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}