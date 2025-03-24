let a = Math.floor(Math.random() * 100);


// if...else
let result;
if ((a > 10 ? a : a * 2) > 5) {
    if ((2 * a) + 1 > 4) {
        result = 5;
    } else {
        result = (a % 2 == 0 ? 6 : 7);
    }
} else {
    result = (a < 3) ? 1 : 2 * (a - 2);
}

console.log("Результат if...else: ", result);

// switch
switch(true) {
    case (a > 10 ? a : a * 2) > 5:
        switch(true) {
            case (2 * a) + 1 > 4:
                result = 5;
                break;
            default:
                result = (a % 2 == 0 ? 6 : 7);
                break;
        }
        break;
    default:
        result = (a < 3) ? 1 : 2 * (a - 2);
        break;
}

console.log("Результат switch: ", result);
