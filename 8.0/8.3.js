function askTheNumber(){
    let lastInput = null;
    for (let i = 0; i < 10; i++){
            const takeNumber = prompt('Введите число больше 100');
        lastInput = takeNumber;
        if(takeNumber === null){
            console.log(lastInput);
            return;
        }
        const num = Number(takeNumber);
        if (Number.isNaN(num)){
            console.log(lastInput);
            return;
        }
        if (num > 100){
            console.log (lastInput)
            return;
        }
        alert('Вы ввели число меньше 100, попробуйте еще раз');
    }
    console.log(lastInput);
}