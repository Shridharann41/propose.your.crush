function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YAY YAY YAY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Your presence reminds me of Venus in a starry night, I will be the Jupiter protecting your shine in the worst time";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "It is okay 😃";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Do not worry about it, pluto is nostalgic that we left it in the school textbook. I do have a lot to share to you but it is the end 😅.";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }