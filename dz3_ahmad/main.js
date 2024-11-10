
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : " 'не делится на ноль' ";
        default:
            return "Неизвестный оператор";
    }
}

console.log(calculator(1234, 123, "/"));



function str() {
    var input = prompt("Введите строку:");
    console.log("Длина строки:", input.length);
}

str();


function minNum(num1, num2) {
    console.log("Минимальное число:", Math.min(num1, num2));
}
minNum(23434, 1232);
