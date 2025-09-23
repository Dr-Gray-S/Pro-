const input = prompt('Введите трехзначное число');
const n = Number(input);
const [a, b, c] = String(Math.abs(n));

alert ( `Число: ${n}
    1) Все цифры одинаковые? — ${a===b && b===c ? 'Да' : 'Нет'}
    2) Есть одинаковые цифры? — ${a===b || b===c || a===c ? 'Да' : 'Нет'}`);
