    // Игра: угадай слабый пароль
    function checkPassword() {
  const input = document.getElementById("guess").value.trim();
  const result = document.getElementById("gameResult");
  const hints = document.getElementById("gameHints");
  const bar = document.querySelector('#passwordStrength > div');

  const length = input.length;
  const hasUpper = /[A-Z]/.test(input);
  const hasLower = /[a-z]/.test(input);
  const hasDigit = /[0-9]/.test(input);
  const hasSpecial = /[^A-Za-z0-9]/.test(input);

  let score = 0;
  let feedback = [];

  if (length >= 8) score++;
  else feedback.push("увеличьте длину (минимум 8 символов)");

  if (hasUpper) score++;
  else feedback.push("добавьте заглавные буквы");

  if (hasLower) score++;
  else feedback.push("добавьте строчные буквы");

  if (hasDigit) score++;
  else feedback.push("добавьте цифры");

  if (hasSpecial) score++;
  else feedback.push("добавьте спецсимволы");

  // 🔸 Оценка по прогресс-бару
  let strength = score * 20;
  bar.style.width = strength + "%";

  if (score <= 2) {
    bar.style.backgroundColor = "red";
    result.textContent = "❌ Пароль слишком простой.";
    result.style.color = "red";
  } else if (score <= 4) {
    bar.style.backgroundColor = "orange";
    result.textContent = "⚠️ Пароль средней надёжности.";
    result.style.color = "orange";
  } else {
    bar.style.backgroundColor = "green";
    result.textContent = "✅ Пароль надёжный.";
    result.style.color = "green";
  }

  // Подсказки
  if (feedback.length > 0) {
    hints.innerHTML = "Рекомендации: " + feedback.join(", ") + ".";
  } else {
    hints.innerHTML = "Все критерии надёжного пароля соблюдены.";
  }
}

// Показывать модальное окно по центру
function openInstructionModal() {
  const modal = document.getElementById('instruction');
  modal.style.display = 'flex'; // flex для центрирования
}

// Закрытие окна
function closeInstructionModal() {
  document.getElementById('instruction').style.display = 'none';
}

// Привязка кнопки и X
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal .close").onclick = closeInstructionModal;
  document.querySelector("button[onclick*='instruction']").onclick = openInstructionModal;
});

// Сброс якоря при загрузке
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});
