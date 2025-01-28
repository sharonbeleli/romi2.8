
export function renderApp(root) {
    root.innerHTML = \`
        <div class="container">
            <h1 class="title">אפליקציית תרגילי חשבון</h1>
            <div id="question-container" class="card">
                <h2 class="question">כמה זה 5 + 3?</h2>
                <input type="number" id="answer" class="input" placeholder="הקלד תשובה כאן">
                <button id="check-btn" class="btn">בדוק תשובה</button>
                <p id="feedback" class="feedback"></p>
            </div>
        </div>
    \`;

    const feedbackEl = document.getElementById("feedback");
    const checkBtn = document.getElementById("check-btn");
    const answerInput = document.getElementById("answer");

    checkBtn.addEventListener("click", () => {
        const userAnswer = parseInt(answerInput.value);
        if (userAnswer === 8) {
            feedbackEl.textContent = "✔ תשובה נכונה! כל הכבוד!";
            feedbackEl.style.color = "green";
        } else {
            feedbackEl.textContent = "✖ תשובה שגויה, נסה שוב.";
            feedbackEl.style.color = "red";
        }
    });
}
