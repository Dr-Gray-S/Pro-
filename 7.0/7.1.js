function askAndRemove (){
    const word = 'Hello World';
    const input = prompt ('Уберите букву которую хотите из Hello World');
    if (input === null) return;
    const trimmed = input.trim();
    if (input.trim() === ''){
        alert ('Нужно ввести хотя бы один символ');
        return;
    }
    const toRemove = new Set(trimmed.toLowerCase().split(''));
    const result = word.split('').filter(symbol => !toRemove.has(symbol.toLowerCase())).join('');
    alert (`Результат: ${result}` );
}



