document.addEventListener('DOMContentLoaded', function(){
    const square = document.querySelectorAll('.square');
    const mole = document.querySelectorAll('.mole');
    const timeLeft = document.querySelector('#time-left');
    let score = document.querySelector('#score');
    let result = 0;
    let currentTime = timeLeft.textContent;
    let hitPosition;

    function randomSqure(){
        square.forEach(element => {
            element.classList.remove('mole');
        });
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole');

        hitPosition = randomPosition.id;
    }

    square.forEach(element => {
        element.addEventListener('mouseup', () => {
            if(element.id === hitPosition){
                ++result;
                score.textContent = result;
            }
        })
    })

    function moveMole(){
        let timerId = null;
        timerId = setInterval(randomSqure, 1000);
    }

    function countDown(){
        currentTime--;
        timeLeft.textContent = currentTime;

        if(currentTime === 0){
            clearInterval(timerId);
            alert(`GAME OVER ! YOUR final score is ${result}`);
        }
    }

    let timerId = setInterval(countDown, 1000);
    moveMole();
});
