let age = document.getElementById("age");
let answer = document.getElementById("answer");
let submitButton = document.getElementById("submitButton");
submitButton.onclick = function(){
    age = Number(age.value);

    if (age >= 21){
        answer.textContent = "You are old enough to smoke!"
    }
    else if (age <= 0){
        answer.textContent = "You cannot be below 0..."
    }
    else{
        answer.textContent = "You are not old enough to smoke!"
    }
}