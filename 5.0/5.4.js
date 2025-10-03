let N = +prompt ("Введите число");

let X = true;

if (N <= 0) {
    X = false;
} else {
    for ( D = 2; D < N; D++){
        if (N % D ===0){
            X = false;
        }
    }
}

alert (X ? 'Простое число ' : 'Не простое число')