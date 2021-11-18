const quizData = [
    {
        question: 'How old are you?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c'
    }, {
        question: 'what is the best programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'Who is the best President?',
        a: 'I',
        b: 'Me',
        c: 'My',
        d: 'Kim',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach( answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });

    return answer;
}

function deselectAnswers(){
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', function(){
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question.</h2><button onclick="location.reload()">Reload</button>`;
        }
    }
})

loadQuiz();
