function checkXOR() {
    const answer = document.getElementById('xor-answer').value;
    const correctAnswer = "Love"; // Đây là kết quả của việc giải mã
    const feedback = document.getElementById('xor-feedback');

    if (answer === correctAnswer) {
        feedback.textContent = "Đúng rồi! Bạn đã tìm thấy cờ: flag{Love}";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Sai rồi. Bạn hãy thử lại!";
        feedback.style.color = "red";
    }
}

function checkRSA() {
    const answer = document.getElementById('rsa-answer').value;
    const correctAnswer = "65"; // Đây là kết quả của việc giải RSA (m)
    const feedback = document.getElementById('rsa-feedback');

    if (answer === correctAnswer) {
        feedback.textContent = "Đúng rồi! Bạn đã tìm thấy cờ: flag{65}";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Sai rồi. Bạn hãy thử lại!";
        feedback.style.color = "red";
    }
}
