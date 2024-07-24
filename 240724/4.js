function Calculator(num1, type, num2) {
    switch(type){
        case "+" :
            return console.log(num1 + num2);
        case "-" :
            return console.log(num1 - num2);
        case "*" :
            return console.log(num1 * num2);
        case "/" :
            return console.log(num1 / num2);
    }
}

Calculator(3, "+", 6); // 결과값 9
Calculator(11, "-", 6); // 결과값 5
Calculator(6, "*", 3); // 결과값 18
Calculator(15, "/", 3); // 결과값 5