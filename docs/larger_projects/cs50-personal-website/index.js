let details = document.getElementById("button1");
let activeButton = null;
details.addEventListener("click", function(){
    let intro = document.querySelector("#homepage_intro");
    if (activeButton === "button1"){
        intro.style.fontSize = "14px";
        intro.textContent = "Click the buttons above!";
        activeButton = null;
    }
    else{
        intro.style.fontSize = "16px";
        intro.style.fontFamily = "Lato"
        intro.textContent = "I am a 20-year-old Singaporean currently serving National Service, with plans to pursue Biomedical Engineering at the National University of Singapore in 2026. A 2023 graduate of Victoria Junior College, I am passionate about applying engineering principles to advance healthcare solutions and medical technology.";
        activeButton = "button1";

    }
})
let details2 = document.getElementById("button2");
details2.addEventListener("click", function(){
    let intro = document.querySelector("#homepage_intro");
    if (activeButton === "button2"){
        intro.style.fontSize = "14px";
        intro.textContent = "Click the buttons above!";
        activeButton = null;
    }
    else {
        intro.style.fontSize = "16px";
        intro.style.fontFamily = "Lato"
        intro.textContent = "I am currently serving as a firefighter with the Singapore Civil Defence Force, specializing in emergency response operations and hazardous materials decontamination procedures. Concurrently, I hold a dual role at Decathlon as both a Retail Sports Specialist and Data Scientist, where I deliver exceptional customer service and product expertise while conducting comprehensive market analysis and trend identification. Through data-driven insights, I support strategic business decisions that enable the company to optimize product offerings and maintain market relevance, demonstrating my ability to excel in both high-pressure emergency situations and analytical problem-solving environments.";
        activeButton = "button2"
        
    }
})
let details3 = document.getElementById("button3");
details3.addEventListener("click", function(){
    let intro = document.querySelector("#homepage_intro");
    if (activeButton === "button3"){
        intro.textContent = "Click the buttons above!";
        activeButton = null;
    }
    else {
        intro.style.fontSize = "14px";
        intro.style.fontFamily = "Lato"
        intro.textContent = "My core values center on hard work, discipline, and maintaining the right mentality. I believe in persistence through failure and doing meaningful work regardless of external recognition, while remaining humble throughout the journey. Discipline manifests through structured routines and daily goal-setting aligned with long-term objectives. Central to my philosophy is taking full responsibility for every outcome and viewing setbacks as transformative experiences. I approach problems and solutions with equal rigor, believing self-awareness is essential for effective decision-making. This extends to embracing feedback and criticism as invaluable growth tools, requiring the ability to set aside ego for continuous improvement. Whether facing unfamiliar challenges or stepping outside my comfort zone, I view each experience as an opportunity to develop new capabilities and expand my potential.";
        activeButton = "button3"
    }
})
let details4 = document.getElementById("button4");
details4.addEventListener("click", function(){
    let intro = document.querySelector("#homepage_intro");
    if (activeButton === "button4"){
        intro.style.fontSize = "14px";
        intro.textContent = "Click the buttons above!";
        activeButton = null;
    }
    else{
        intro.style.fontSize = "15px";
        intro.style.fontFamily = "Lato"
        intro.textContent = "My interests span both physical and intellectual pursuits that complement my academic and professional development. I am an active endurance athlete, participating in duathlons, cycling races, and running events, which foster discipline and mental resilience. In the technical domain, I am developing proficiency in Python, HTML, CSS, JavaScript, and SQL to build a comprehensive foundation in programming and data management. I maintain a keen interest in human physiology and nutrition, fields that align closely with my biomedical engineering aspirations and provide deeper understanding of human performance optimization. Additionally, I am an avid reader and enjoy exploring the Star Wars universe, which fuels my imagination and creativity. These diverse interests reflect my commitment to continuous learning and my belief in maintaining a balanced approach to personal and professional growth.";
        activeButton = "button4";
    }
})