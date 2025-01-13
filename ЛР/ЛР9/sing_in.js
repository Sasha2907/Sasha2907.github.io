document.getElementById("submitButton").addEventListener("click", () => {
    let isValid = true;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Очищаем прошлый вывод
  
    // Валидация email через HTML5
    const email = document.getElementById("email");
    if (!email.validity.valid) {
      isValid = false;
      showError(email, "Введите корректный email.");
    } else {
      clearError(email);
    }       
  
    // Валидация имени пользователя через JS
    const username = document.getElementById("username").value.trim();
    if (username === "") {
      isValid = false;
      showError(document.getElementById("username"), "Имя пользователя не может быть пустым.");
    } else if (username.length < 3) {
      isValid = false;
      showError(document.getElementById("username"), "Имя пользователя должно быть минимум 3 символа.");
    } else {
      clearError(document.getElementById("username"));
    }
  
    // Валидация телефона через регулярное выражение
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      isValid = false;
      showError(document.getElementById("phone"), "Введите корректный номер телефона (10-15 цифр).");
    } else {
      clearError(document.getElementById("phone"));
    }
  
    // Валидация страны через JS
    const country = document.getElementById("country").value;
    if (!country) {
      isValid = false;
      showError(document.getElementById("country"), "Выберите страну.");
    } else {
      clearError(document.getElementById("country"));
    }
  
    // Если всё корректно, выводим результат
    if (isValid) {
      const result = `
        <h3>Данные формы:</h3>
        <p>Email: ${email.value}</p>
        <p>Имя пользователя: ${username}</p>
        <p>Телефон: ${phone}</p>
        <p>Страна: ${country}</p>
      `;
      outputDiv.innerHTML = result;
    }
  });
  
  // Функция для показа ошибки
  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
      error = document.createElement("div");
      error.className = "error";
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
  }
  
  // Функция для очистки ошибки
  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
      error.remove();
    }
  }


// Функция для установки cookies
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
  }
  
  // Функция для получения cookies
  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : null;
  }
  
  // Сохранение данных формы в cookies
  document.getElementById("submitButton").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;
  
    // Проверка на заполненность всех полей
    if (!email || !username || !phone || !country) {
      document.getElementById("output").innerHTML = `<p id="errorMessage">Пожалуйста, заполните все поля!</p>`;
      return;
    }
  
    // Создание объекта с данными
    const formData = {
      email,
      username,
      phone,
      country,
    };
  
    // Сохранение данных в cookies в формате JSON
    setCookie("formData", JSON.stringify(formData), 7); // Данные сохраняются на 7 дней
  
    document.getElementById("output").innerHTML = `<p>Данные успешно сохранены в cookies!</p>`;
  });
  
  // Загрузка данных из cookies при загрузке страницы
  window.addEventListener("DOMContentLoaded", () => {
    const savedData = getCookie("formData");
    if (savedData) {
      const { email, username, phone, country } = JSON.parse(savedData);
  
      document.getElementById("email").value = email;
      document.getElementById("username").value = username;
      document.getElementById("phone").value = phone;
      document.getElementById("country").value = country;
  
      document.getElementById("output").innerHTML = `
        <p>Данные загружены из cookies:</p>
        <ul>
          <li>Email: ${email}</li>
          <li>Имя пользователя: ${username}</li>
          <li>Телефон: ${phone}</li>
          <li>Страна: ${country}</li>
        </ul>
      `;
    } else {
      document.getElementById("output").innerHTML = `<p>Данные в cookies отсутствуют.</p>`;
    }
  });
  // Сохранение данных формы в Local Storage
document.getElementById("submitButton").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;

  // Проверка на заполненность всех полей
  if (!email || !username || !phone || !country) {
    document.getElementById("output").innerHTML = `<p style="color: red;">Пожалуйста, заполните все поля!</p>`;
    return;
  }

  // Создание объекта с данными формы
  const formData = {
    email,
    username,
    phone,
    country,
  };

  // Сохранение данных в Local Storage
  localStorage.setItem("formData", JSON.stringify(formData));

  document.getElementById("output").innerHTML = `<p style="color: green;">Данные успешно сохранены в Local Storage!</p>`;
});

// Загрузка данных из Local Storage при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    const { email, username, phone, country } = JSON.parse(savedData);

    document.getElementById("email").value = email;
    document.getElementById("username").value = username;
    document.getElementById("phone").value = phone;
    document.getElementById("country").value = country;

    document.getElementById("output").innerHTML = `
      <p>Данные загружены из Local Storage:</p>
      <ul>
        <li>Email: ${email}</li>
        <li>Имя пользователя: ${username}</li>
        <li>Телефон: ${phone}</li>
        <li>Страна: ${country}</li>
      </ul>
    `;
  } else {
    document.getElementById("output").innerHTML = `<p>Данные в Local Storage отсутствуют.</p>`;
  }
});
