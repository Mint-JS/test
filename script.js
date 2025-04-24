let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    
    questionContainer.innerHTML = `
        <h2>문제 ${question.id}</h2>
        <p>${question.question}</p>
        <pre>${question.code}</pre>
        <div class="answer-section">
            <textarea id="answer" placeholder="여기에 답을 작성해주세요..."></textarea>
            <button onclick="checkAnswer()">답안 제출</button>
            <div id="result" class="result"></div>
        </div>
    `;
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const answer = document.getElementById('answer').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (answer === question.answer) {
        resultDiv.className = "result correct";
        resultDiv.innerHTML = `
            <strong>정답입니다!</strong>
            <p>${question.explanation}</p>
        `;
        score++;
    } else {
        resultDiv.className = "result incorrect";
        resultDiv.innerHTML = `
            <strong>틀렸습니다.</strong>
            <p>정답: ${question.answer}</p>
            <p>설명: ${question.explanation}</p>
        `;
    }
    resultDiv.style.display = "block";
    
    // 다음 문제 버튼 표시
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음 문제';
    nextButton.onclick = nextQuestion;
    nextButton.className = 'next-button';
    resultDiv.appendChild(nextButton);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // 퀴즈 종료
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = `
            <h2>퀴즈 종료!</h2>
            <p>총 ${questions.length}문제 중 ${score}문제를 맞추셨습니다.</p>
            <button onclick="resetQuiz()">다시 시작</button>
        `;
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

// 페이지 로드 시 첫 번째 문제 표시
window.onload = displayQuestion;
showQuestion(currentQuestionIndex);