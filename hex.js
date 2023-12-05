const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const container = document.querySelector('.container');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i <= 5; i++){
        hexColor += hex[getHex()];
    }
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getHex(){
   return (Math.floor(Math.random() * hex.length));
   
}