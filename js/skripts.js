//1
let name,
    age,
    city,
    company,
    phone,
    email;

name = prompt('Ваше имя?');
age = prompt('Ваш возраст?');
city = prompt('В каком городе вы проживаете?');
company = prompt('В какой компании Вы работаете?');
phone = prompt('Ваш номер телефона?')
email = prompt('Ваш электронный адресс?');


document.write(`Меня зовут ${name}. Мне ${age} лет.Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone} и ${email}.`);


//2 
let born = (age <100) ? document.write(` ${name} родилась в ${2021-age} году`)
                    : document.write(`Интересный возраст у вас`);



//3
let str = prompt('Введите шесть цифр');

if ((str[0]+str[1]+str[2]) == (str[3]+str[4]+str[5])) {
    alert ('ДА');
} else {
    alert ('НЕТ');
}

//4
let A = 1;  /*(A = 0, A = -3)*/

if (A > 0) {
    console.log ('ВЕРНО');
} else {
    console.log ('НЕВЕРНО');
}

//5
let a = 10,
    b = 2;

let sum = a + b,
    difference = a - b,
    multiplication = a * b,
    division = a / b;

console.log(sum);
console.log(difference);
console.log(multiplication);
console.log(division);

if (sum > 1) {
    console.log(Math.pow(sum,2));
} else {
    console.log(sum);
}

//6
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('ВЕРНО');
} else {
    console.log('НЕВЕРНО');
}


//7 
let n = prompt ('Введите значение от 0 до 59');

if (n <= 15) {
        alert('Первая четверть');
} else if (n >= 16 && n <=30) {
        alert('Вторая четверть');
} else if (n >= 31 && n <=45) {
        alert('Третья четверть');
} else if (n >= 46 && n <=59) {
        alert('Четвертая четверть')
} else {
    alert('Ввели неверное значение');
}

//8
let day = prompt('Введите значение дня от 1 до 31');

if (day >=1 && day <= 10) {
    alert('Первая декада');
} else if (day >=11 && day <=20) {
    alert('Вторая декада');
} else if (day >=21 && day <=31) {
    alert('Третья декада');
} else  {
    alert ('Ввели неверное значение')
}


//9 
let DAY = prompt ('Введите количество дней'),
    years = DAY/365,
    months = DAY/31,
    weeks = DAY/7,
    hours = DAY * 24, 
    min = hours * 60,
    sec = min * 60;

if (years < 1) {
    alert(`Меньше года`)
} else {
    document.write(`Количество лет: ${years}.`);
}

if (DAY < 31) {
    alert(`Меньше месяца`);
} else {
    document.write(`  Количество месяцев: ${months}.`);
}

if (DAY < 7) {
    alert('Меньше недели');
} else {
    document.write(`  Количество недель: ${weeks}.`);
}

document.write(`  Количество часов: ${hours}.`);
document.write(`  Количество минут: ${min}.`);
document.write(`  Количество секунд: ${sec}.`);


// 10 
let month;

if (DAY >=1 && DAY <=31) {
    alert(month = 'Январь');
} else if ( DAY >= 32  && DAY <= 59 ) {
    alert(month = 'Февраль');
} else if (DAY >= 60 && DAY <= 90 ) {
    alert(month ='Март');
} else if (DAY >= 91 && DAY <= 120 ) {
    alert(month = 'Апрель');
} else if (DAY >= 121 && DAY <= 151) {
    alert(month = 'Май');
} else if (DAY >= 152 && DAY <= 181) {
    alert(month = 'Июнь');
} else if ( DAY >= 182 && DAY <= 212) {
    alert(month = 'Июль');
} else if ( DAY >= 213 && DAY <= 243) {
    alert(month = 'Август');
} else if (DAY >= 244 && DAY <= 273) {
    alert(month = 'Сентябрь');
} else if (DAY >= 274 && DAY <= 304) {
    alert(month = 'Октябрь');
} else if ( DAY >= 305 && DAY <= 334) {
    alert(month = 'Ноябрь');
} else if (DAY >=335 && DAY <= 365) {
    alert(month = 'Декабрь');
}

switch (month) {
    case 'Декабрь':
    case 'Январь': 
    case 'Февраль':
        alert('Зима');
    break;

    case 'Март':
    case 'Апрель': 
    case 'Май':
        alert('Весна');
    break;
    
    case 'Июнь':
    case 'Июль': 
    case 'Август':
        alert('Лето');
    break;
    
    case 'Сентябрь':
    case 'Октябрь': 
    case 'Декабрь':
        alert('Осень');
    break;
}
