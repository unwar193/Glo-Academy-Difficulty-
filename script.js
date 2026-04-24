'use strict';
/* Урок 2 с усложнением


    1) Создать переменную num со значением 266219 (тип данных число)
    2) Вывести в консоль произведение (умножение) цифр этого числа
    Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
    3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
    4) Вывести в консоль первые 2 цифры полученного числа
    5) В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub


let num = 266219;
console.log("переменная: ", num, "её тип: ", typeof(num));

const multipl = function(num) {
    let i = 0; 
    let j = 1;
    while (i < num.toString().length) {
        k = num.toString();
        z = Number(k[i]);
        i++;
        j *= z;
    } 
    return j;
}; 

let answer1 = multipl(num);
console.log("произведение цифр в числе: ", answer1);

let answer2 = answer1 ** 3;

console.log("Первые две цифры: ", String(answer2).slice(0,2));

//Можешь попробовать усложненное задание сделать через метод reduce

let numStr = num.toString().split(''); //привожу число сначала к строке, потом к массиву чтобы использовать метод reduce
let multipl2 = numStr.reduce((a,b) => a * b); // метод reduce перемножает элементы массива между собой


console.log("Полчуение произведения всех цифр числа методом reduce: ",  multipl2);*/
/*Урок 3
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице

1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

 a) через if,

 b) через switch-case

 c) через многомерный массив без ифов и switch.



2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

 let lang = prompt("Введите ru или en")  ;
 let weekRu = ["понедельник" , "вториник" , "среда" , "четверг" , "пятница" , "суббота" , "воскресенье"];
 let weekEn = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"];

if (lang == 'en') {
    console.log(weekEn)
} else {console.log(weekRu)};

switch (lang) {
    case "en": console.log(weekEn);
    break;
    case "ru": console.log(weekRu);
    break;
}
    


const days = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

const result = days[lang] || days['en'];

result.forEach(day => console.log(day));*/

/* Урок 4 +
1) Создайте функцию, которая принимает 1 аргумент (название произвольное)

— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)


let myStr = "моя строка";
let myNum = 12;
let myStr2 = "оччень длинный текст надеюсь в нем больше букв чем мне надо";

function checkString(input) {
    if (typeof input !== 'string') {
        alert(`Ошибка: Ожидалась строка, а передан тип "${typeof input}"`);
        return "";
    }
    let trimmedText = input.trim();
    if (trimmedText.length === 0) {
        return "";
    }
    if (trimmedText.length > 30) {
        return trimmedText.slice(0, 30) + "...";
    }
};

console.log(checkString(myStr))
console.log(checkString(myNum))
console.log(checkString(myStr2))
*/
console.log('test')