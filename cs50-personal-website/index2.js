let active = null;
let principle = document.getElementById("principles");
let core1 = document.getElementById("core1");

core1.addEventListener("click", function(){
    let answer = document.querySelector("#answer");
    if (active === "core1"){
        let image1 = principle.querySelector("img");
        image1.remove();
        answer.textContent = "";
        answer.style.border = "";
        active = null;
        core2.style.display = "inline-block";
        core3.style.display = "inline-block";
        core4.style.display = "inline-block";

    }
    else{
        answer.style.fontStyle = "oblique";
        answer.textContent = "Discipline";
        active = "core1";
        let img1 = document.createElement("img");
        img1.src = "/media/default_image.png";  // updated path
        img1.style.height = "300px";
        img1.style.width = "250px";

        principle.appendChild(img1);
        answer.style.border = "3px dotted white";
        core2.style.display = "none";
        core3.style.display = "none";
        core4.style.display = "none";
    }
})

let core2 = document.getElementById("core2");
core2.addEventListener("click", function(){
    let answer = document.querySelector("#answer");
    if (active === "core2"){
        let image2 = principle.querySelector("img");
        image2.remove();
        answer.textContent = "";
        answer.style.border = "";
        active = null;
        core1.style.display = "inline-block";
        core3.style.display = "inline-block";
        core4.style.display = "inline-block";

    }
    else{
        answer.style.fontStyle = "oblique";
        answer.textContent = "Purpose";
        active = "core2";
        let img2 = document.createElement("img");
        img2.src = "/media/default_image.png";  // updated path
        img2.style.height = "300px";
        img2.style.width = "250px";

        principle.appendChild(img2);
        answer.style.border = "3px white dotted";
        core1.style.display = "none";
        core3.style.display = "none";
        core4.style.display = "none";
    }
})

let core3 = document.getElementById("core3");
core3.addEventListener("click", function(){
    let answer = document.querySelector("#answer");
    if (active === "core3"){
        let image3 = principle.querySelector("img");
        image3.remove();
        answer.textContent = "";
        answer.style.border = "";
        active = null;
        core2.style.display = "inline-block";
        core1.style.display = "inline-block";
        core4.style.display = "inline-block";
    }
    else{
        answer.style.fontStyle = "oblique";
        answer.textContent = "Humility";
        active = "core3";
        let img3 = document.createElement("img");
        img3.src = "/media/default_image.png";  // updated path
        img3.style.height = "300px";
        img3.style.width = "400px";
        answer.style.border = "3px dotted white";
        principle.appendChild(img3);
        core2.style.display = "none";
        core1.style.display = "none";
        core4.style.display = "none";
    }
})

let core4 = document.getElementById("core4");
core4.addEventListener("click", function(){
    let answer = document.querySelector("#answer");
    if (active === "core4"){
        answer.textContent = "";
        let image4 = principle.querySelector("img");
        image4.remove();
        answer.style.border = "";
        active = null;
        core1.style.display = "inline-block";
        core2.style.display = "inline-block";
        core3.style.display = "inline-block";
    }
    else{
        answer.style.fontStyle = "oblique";
        answer.textContent = "Adaptability";

        let img4 = document.createElement("img");
        img4.src = "/media/default_image.png";  // updated path
        img4.style.height = "300px";
        img4.style.width = "400px";

        principle.appendChild(img4);
        answer.style.border = "3px white dotted";
        active = "core4";
        core2.style.display = "none";
        core1.style.display = "none";
        core3.style.display = "none";
    }
})
