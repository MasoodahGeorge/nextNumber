let numbers = [1, 2, 3, 4, 5];
let currentIndex = 0;

document.getElementById('button').addEventListener('click', ()=> {
    const numberDisplay = document.querySelector('.output');
    numberDisplay.innerHTML = numbers[currentIndex];
    currentIndex = (currentIndex + 1) % numbers.length; 
});