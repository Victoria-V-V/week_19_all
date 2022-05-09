class Calculator {
    static add(number1, number2) {
        return number1 + number2;
    }

    static subtract(number1, number2) {
        return number1 - number2;
    }

    static divide(number1, number2) {
        if (!number2) {
            return "На ноль делить нельзя!";
        } else {
            return number1 / number2;
        }
    }

    static multiplay(number1, number2) {
        return number1 * number2;
    }
}

const button = document.querySelector(".button");
button.addEventListener("click", operation);

function operation() {
    let number1 = Number(document.querySelector('#number1').value);
    let number2 = Number(document.querySelector('#number2').value);
    let result = document.querySelector('#result');

    switch (operator) {
        case '+':
            result.innerHTML = Calculator.add(number1, number2);
            break;

        case '-':
            result.innerHTML = Calculator.subtract(number1, number2);
            break;

        case '*':
            result.innerHTML = Calculator.multiplay(number1, number2);
            break;

        case '/':
            result.innerHTML = Calculator.divide(number1, number2);
            break;
    }
}