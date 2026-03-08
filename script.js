document.addEventListener('DOMContentLoaded', () => {
    
    const accBtn = document.getElementById('acc-menu-btn');
    const accMenu = document.getElementById('acc-content');

    accBtn.onclick = () => {
        accMenu.classList.toggle('show');
    };

    const themeBtn = document.getElementById('theme-toggle');
    
    themeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.innerText = document.body.classList.contains('dark-mode') ? "Light" : "Dark";
    };

    let size = 100; 
    const root = document.documentElement;

    document.getElementById('increase-text').onclick = () => {
        size += 10;
        root.style.fontSize = size + "%";
    };

    document.getElementById('decrease-text').onclick = () => {
        size -= 10;
        root.style.fontSize = size + "%";
    };

    const readBtn = document.getElementById('read-aloud-btn');
    const stopBtn = document.getElementById('stop-read-btn');

    readBtn.onclick = () => {
        let speech = new SpeechSynthesisUtterance(document.body.innerText);
        window.speechSynthesis.speak(speech);
        
        readBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';

        speech.onend = () => {
            readBtn.style.display = 'inline-block';
            stopBtn.style.display = 'none';
        };
    };

    stopBtn.onclick = () => {
        window.speechSynthesis.cancel();
        readBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
    };
});

const paw = document.getElementById("paw");

let angle = 0;
function animatePaw() {
    angle += 0.05;
    const yOffset = Math.sin(angle) * 20;
    if(paw) paw.style.transform = `translateY(${yOffset}px)`;
    requestAnimationFrame(animatePaw);
}
animatePaw();

document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("bookingForm");
const errorSound = document.getElementById("errorSound");
const successSound = document.getElementById("successSound");

form.addEventListener("submit", function(e){

let inputs = form.querySelectorAll("input, select");
let empty = false;

inputs.forEach(function(input){
if(input.value === ""){
empty = true;
}
});

if(empty){
e.preventDefault();
errorSound.play();
alert("Please fill all fields");
}else{
successSound.play();
}

});

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".booking-form");
    
    const errorSound = document.getElementById("errorSound");
    const successSound = document.getElementById("successSound");

    form.addEventListener("submit", function(e){
        e.preventDefault(); 

        let inputs = form.querySelectorAll("input, select");
        let empty = false;

        inputs.forEach(function(input){
            if(input.value.trim() === ""){
                empty = true;
            } else {
            }
        });

        const dateInput = form.querySelector('input[type="date"]');
        const selectedDate = new Date(dateInput.value);
        const today = new Date();

     

        if(empty){
            errorSound.play().catch(error => console.log("Audio play failed:", error));
            alert("Please fill all fields");
        }else if(selectedDate < today){
            errorSound.play().catch(error => console.log("Audio play failed:", error));
            alert("Please select a valid date (today or future date only).");
        } else {
            successSound.play().catch(error => console.log("Audio play failed:", error));
            alert("Booking submitted successfully!");
        }
    });

});