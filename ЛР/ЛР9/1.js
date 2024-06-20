
function showAd() {
    alert("Посетите наш сайт для уникальных товаров и услуг!");
}

// Задаем интервал для появления рекламных окон (например, каждые 30 секунд)
setInterval(showAd, 300000);
document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {                                              //if 
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


let day = new Date().getDay();
switch (day) {
    case 0:
        alert("Сегодня воскресенье");
        break;
    case 1:
        alert("Сегодня понидельник");
        break;
    case 2:
        alert("Сегодня Вторник");
        break;   
    case 3:
        alert("Сегодня Среда");
        break;
    case 4:
        alert("Сегодня Четверг");
        break; 
    case 5:
        alert("Сегодня Пятница");
        break;
    case 6:
        alert("Сегодня Суббота");
        break;
    default:
        alert("Не удалось определить текущий день");
}
for (let i = 0; i < 5; i++) {
    console.log("Это сообщение будет выведено 5 раз");
}

let count = 0;
while (count < 3) {
    alert("Это сообщение будет показано 3 раза");
    count++;
}

let userName = prompt("Пожалуйста, введите ваше имя", "Имя");
if (userName) {
    confirm("Привет," + userName +"! Вы уверены, что хотите продолжить?");
} else {
    alert("Пожалуйста, введите ваше имя!");
}

let i = 0;
do {
  console.log("Этот текст будет выведен 3 раза");
  i++;
} while (i < 3);

for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue; 
    }
    console.log(i);
  }
