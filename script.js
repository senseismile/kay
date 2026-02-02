const PASSWORD = "kayonly"; // change if you want

function unlock() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.textContent = "Wrong password 💔";
  }
}

function showMessage(type) {
  const box = document.getElementById("messageBox");
  let text = "";

  if (type === 1) {
    text = "Kay, listen to me 💙\n\nYour body is not something I tolerate — it's something I accept fully. Your belly doesn’t change your worth, your beauty, or how I see you. I see you, not a flaw.";
  }

  if (type === 2) {
    text = "If you’re reading this because you miss me...\n\nI’m thinking of you too. I miss your voice, your calm, the way you exist so gently. Distance doesn’t change my commitment.";
  }

  if (type === 3) {
    text = "I choose you because of your maturity. Because of the way you think. Because of your hair I could recognize anywhere. And because loving you feels intentional.";
  }

  box.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    box.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}
