const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Brown", "Gray", "White"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container")

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    container.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}