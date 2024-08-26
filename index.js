function evaluateScore(score) {
    switch (true) {
        case typeof score !== 'number' || isNaN(score):
            return "Not a Number";
        case score > 100 || score < 0:
            return "Invalid Score";
        case score === 100:
            return "Perfect Score";
        case score >= 85 && score < 100:
            return "You got an A";
        case score >= 75 && score < 85:
            return "You got a B";
        case score >= 65 && score < 75:
            return "You got a C";
        case score >= 50 && score < 65:
            return "You got a D";
        case score >= 0 && score < 50:
            return "You got an F";
        default:
            return "Invalid Score";
    }
}

function checkScore() {
    const scoreInput = document.getElementById("scoreInput").value;
    const score = parseFloat(scoreInput);
    const result = evaluateScore(score);
    document.getElementById("result").textContent = result;
}
