const buttons = document.querySelectorAll('.question');
const anwsers = document.querySelectorAll('p');
const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('h2');
const box = document.querySelector('.box');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (anwsers[i].style.display === 'block') {
            anwsers[i].style.display = 'none';
            arrows[i].style.transform = 'none';
            questions[i].style.fontWeight = '400';
        } else {
            anwsers.forEach(anwser => {
                anwser.style.display = 'none';
            })
            arrows.forEach(arrow => {
                arrow.style.transform = 'none';
            })
            questions.forEach(question => {
                question.style.fontWeight = '400';
            })
            anwsers[i].style.display = 'block';
            arrows[i].style.transform = 'rotate(180deg)';
            questions[i].style.fontWeight = '700';
        }
    })
};

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        box.style.animation = 'none';
        setTimeout(function () {
            box.style.animation = 'moveBox 0.6s ease-out'
        }, 0);
    })
});

