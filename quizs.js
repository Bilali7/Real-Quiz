const questions = [
    {
        question : "The fast food giant was criticised after its mcdonald's franchise gave away thousands of free meals ?",
        answers : ["USA", "Israeli", "India"],
        correct : 1,
    },
    {
        question : "Saudi Arabia Oils Supply Military ?",
        answers : ["Israeli", "German", "France"],
        correct : 0,
    },
    {
        question : "Gaza Me Shaheed Minors ?",
        answers : ["3250+"," 5402+", "7797+"],
        correct : 2,
    },
    {
        question : "Gaza Me Shaheed Womens ?",
        answers : ["2840+", "4959+", "3377+"],
        correct : 1,
    },
    {
        question : "Boycott Israeli Products ?",
        answers : ["Chor Be"," economy down", "Kiya Hu Gaa"],
        correct : 1,
    },
]   

const questionElement = document.getElementById ("question");
const answers = document.getElementById ("ans");
const next = document.getElementById ("next");
const finish = document.getElementById ("finish");
const play = document.getElementById ("audi");


function audios () {
    let audio = new Audio ("audio/haza.mp3");
    audio.play ();
}
play.addEventListener ("click", audios);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    finish.innerHTML = "Finish";
    showQuiz ();
    audios ();
}


function showQuiz () {
    resetQuiz ();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement ("button");
        button.innerHTML = answer;
        button.classList.add ("btn");
        answers.appendChild (button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }   
        button.addEventListener ("click", selectAnswer);
    });
}

function resetQuiz () {
    next.style.display = "none";
    finish.style.display = "none";
    while (answers.firstChild) {
        answers.removeChild (answers.firstChild);
    }
}

function selectAnswer (e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add ("correct");
        score++;
    }
    else {
        selectBtn.classList.add ("incorrect")
    }
    Array.from (answers.children).forEach (button => {
        if (button.dataset.correct === "true") {
            button.classList.add ("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
    finish.style.display = "block";
}

// function showScore () {
//     resetQuiz ();
//     questionElement.innerHTML = `You Sored ${score} out of ${questions.length}!`;
//     finish.innerHTML = "Finish";
//     finish.style.display = "block";
// }

function handelNextButton () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {  
        showQuiz ();
    }
}

next.addEventListener ("click",() => {
    if (currentQuestionIndex < questions.length) {
        handelNextButton ();
    }
});

finish.addEventListener ("click", () => {
    setTimeout (() => {
        window.location.href = "video.html";
        
    });   
});
startQuiz ();