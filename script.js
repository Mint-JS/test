let currentQuestionIndex = 0;
let answerContainer = document.getElementById('answer-container');
let questionContainer = document.getElementById('question-container');
let nextButton = document.getElementById('next-button');
let answerText = document.getElementById('answer-text');
let shuffledQuestions = [...questions]; // 질문 복사본을 만들어서 섞기

function shuffleQuestions() {
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

function showQuestion(index) {
    if (index >= shuffledQuestions.length) {
        questionContainer.innerHTML = '퀴즈 완료! 다시 시작하려면 클릭하세요.';
        answerContainer.classList.add('hidden');
        nextButton.classList.add('hidden');
        questionContainer.onclick = resetQuiz; // 퀴즈 완료 후 리셋
        return;
    }

    const q = shuffledQuestions[index];
    questionContainer.innerHTML = `<p class="mb-2"><strong>${q.chapter}</strong></p>
                                   <p class="text-lg">${q.question}</p>`;

    answerContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    questionContainer.onclick = () => {
        answerText.innerText = q.answer;
        answerContainer.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    };
    questionContainer.style.cursor = 'pointer'; // hover 효과를 위해 cursor 스타일 설정
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    shuffleQuestions(); // 퀴즈 다시 시작 시 섞기
    showQuestion(currentQuestionIndex);
    questionContainer.onclick = () => { // resetQuiz 함수 내에서도 onclick 이벤트 재설정
        answerContainer.classList.remove('hidden');
        nextButton.classList.remove('hidden');
        answerText.innerText = shuffledQuestions[currentQuestionIndex].answer;
    };
    questionContainer.style.cursor = 'pointer'; // resetQuiz 함수 내에서도 cursor 스타일 재설정
}


nextButton.onclick = nextQuestion;

shuffleQuestions(); // 페이지 로드 시 질문 섞기
showQuestion(currentQuestionIndex);