function calculateFormula(x, y) {
    try {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw "Пожалуйста, введите числовые значения для x и y.";
        }

        if (x === 0) {
            throw "Знаменатель не может быть равен нулю. Пожалуйста, введите другое значение для x.";
        }

        if (y < 0){
            throw "Число под корнем не может быть отрицательным. Пожалуйста, введите другое значение для y.";
        }

        if(isNaN(x) || isNaN(y)) {
            throw "Введены некорректные данные.";
          }

        let result = (x**2 + 18*y - Math.sqrt(y)) / (7*x**2);
        return result;
    } catch(error) {
        alert(error);
    }
}
function calculate() {
    let x = parseFloat(prompt("Введите значение x:"));
    let y = parseFloat(prompt("Введите значение y:"));

    let result = calculateFormula(x, y);

    if (result !== undefined) {
        document.getElementById("result").innerHTML = "Ответ: " + result;
    }
}