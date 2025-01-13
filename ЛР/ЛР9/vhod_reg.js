// Скрыть панель входа и показать панель регистрации
function showRegister() {
    document.getElementById("login-panel").classList.add("hidden");
    document.getElementById("register-panel").classList.remove("hidden");
}

// Скрыть панель регистрации и показать панель входа
function showLogin() {
    document.getElementById("register-panel").classList.add("hidden");
    document.getElementById("login-panel").classList.remove("hidden");
}

// Функция для отображения панели регистрации
function showRegister() {
    document.getElementById("login-panel").classList.add("hidden");
    document.getElementById("register-panel").classList.remove("hidden");
}

// Функция для отображения панели входа
function showLogin() {
    document.getElementById("register-panel").classList.add("hidden");
    document.getElementById("login-panel").classList.remove("hidden");
}

// Валидация формы входа
document.querySelector("#login-panel form").addEventListener("submit", function (event) {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!validateEmail(email)) {
        alert("Пожалуйста, введите корректный email.");
        event.preventDefault();
    }

    if (password.length < 6) {
        alert("Пароль должен быть не менее 6 символов.");
        event.preventDefault();
    }
});

// Валидация формы регистрации
document.querySelector("#register-panel form").addEventListener("submit", function (event) {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (name.trim().length === 0) {
        alert("Имя не может быть пустым.");
        event.preventDefault();
    }

    if (!validateEmail(email)) {
        alert("Пожалуйста, введите корректный email.");
        event.preventDefault();
    }

    if (password.length < 8) {
        alert("Пароль должен содержать не менее 8 символов.");
        event.preventDefault();
    }
});

// Функция для проверки корректности email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Функция для извлечения данных из формы входа
function extractLoginData() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Вывод данных в диалоговое окно
    alert(`Вход\nEmail: ${email}\nПароль: ${password}`);
}

// Функция для извлечения данных из формы регистрации
function extractRegisterData() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Вывод данных в диалоговое окно
    alert(`Регистрация\nИмя: ${name}\nEmail: ${email}\nПароль: ${password}`);
}

// Обработчики событий для форм
// Форма входа
const loginForm = document.querySelector("#login-panel form");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращение отправки формы
    extractLoginData();
});

// Форма регистрации
const registerForm = document.querySelector("#register-panel form");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращение отправки формы
    extractRegisterData();
});

// Функция для сохранения данных в JSON-файл
function saveToJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// Функция для установки данных в Cookie
function setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
}

// Функция для извлечения данных из формы входа
function extractLoginData() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Данные для сохранения
    const loginData = { email, password };

    // Сохранение в JSON и Cookie
    saveToJSON(loginData, "loginData.json");
    setCookie("loginData", JSON.stringify(loginData));

    // Сохранение в localStorage
    localStorage.setItem("loginData", JSON.stringify(loginData));

    // Вывод данных в диалоговое окно
    alert(`Вход\nEmail: ${email}\nПароль: ${password}`);
    console.log(document.cookie);
}

// Функция для извлечения данных из формы регистрации
function extractRegisterData() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Сохранение в JSON и Cookie
    const registerData = { name, email, password };
    saveToJSON(registerData, "registerData.json");
    setCookie("registerData", JSON.stringify(registerData));

    localStorage.setItem("registerData", JSON.stringify(registerData));
    // Вывод данных в диалоговое окно
    alert(`Регистрация\nИмя: ${name}\nEmail: ${email}\nПароль: ${password}`);
    console.log(document.cookie);
}
