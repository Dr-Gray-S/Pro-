const year = prompt("Сколько вам лет ? ");
const city = prompt("Откуда вы ? ");
const sport = prompt("Какой ваш любимый вид спорта  ? ");

let cityMsg = `Ты живешь в ${city}`;
const cl = city.trim().toLowerCase();

if (city === 'Киев') {
    cityMsg = ('Ты живешь в столице Украины')
} else if  (city === 'Вашингтон'){
    cityMsg = ('Ты живешь в столице США')
} else if (city === 'Лондон'){
    cityMsg ('Ты живешь в столице Англии')
}

alert (`Твой возраст: ${year}.\n${cityMsg}\nТвой любимый вид спрта: ${sport}.`);