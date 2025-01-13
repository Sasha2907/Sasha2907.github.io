class GuessingGame {
    #secretNumber;
    #attempts;
  
    constructor(maxAttempts = 5) {
      this.#secretNumber = Math.floor(Math.random() * 100) + 1;
      this.#attempts = maxAttempts;
    }
  
    guess(number) {
      if (this.#attempts <= 0) return "No attempts left!";
      this.#attempts--;
  
      if (number === this.#secretNumber) {
        return "Отлично, ты угадал число";
      } else if (number < this.#secretNumber) {
        return "Слишком мало!";
      } else {
        return "Слишком много!";
      }
    }
  
    get attemptsLeft() {
      return this.#attempts;
    }
  
    restartGame() {
      this.#secretNumber = Math.floor(Math.random() * 100) + 1;
      this.#attempts = 5;
    }
  }
  
  const game = new GuessingGame();
  const guessInput = document.getElementById("guessInput");
  const submitGuess = document.getElementById("submitGuess");
  const feedback = document.getElementById("feedback");
  const attemptsLeft = document.getElementById("attemptsLeft");
  const restartGame = document.getElementById("restartGame");
  
  attemptsLeft.textContent = game.attemptsLeft;
  
  submitGuess.addEventListener("click", () => {
    const guess = parseInt(guessInput.value, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      feedback.textContent = "Пожалуйста, введите число от 1 до 100";
      return;
    }
  
    const result = game.guess(guess);
    feedback.textContent = result;
  
    attemptsLeft.textContent = game.attemptsLeft;
  
    if (result === "Отлично, ты угадал число!!" || game.attemptsLeft === 0) {
      submitGuess.disabled = true;
      guessInput.disabled = true;
      restartGame.classList.remove("hidden");
    }
  });
  
  restartGame.addEventListener("click", () => {
    game.restartGame();
    feedback.textContent = "";
    attemptsLeft.textContent = game.attemptsLeft;
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuess.disabled = false;
    restartGame.classList.add("hidden");
  });
  