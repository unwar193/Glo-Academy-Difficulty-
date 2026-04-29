// 'use strict';
// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
// 1) Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let curDay = "";
curDay = new Date().getDay();

for (let key in week) {
  let day = week[key];
  console.log(day);

  if (key == curDay - 1) {
    const div = document.createElement("div");
    day = `<b>${week[key]}</b>`;
  } else {const div = document.createElement("div");
    day = week[key];};
  
  if (key == 5 || key == 6) {
    const div = document.createElement("div");
    day = `<i>${day}</i>`;
  } else {const div = document.createElement("div");
    day};
  
  const div = document.createElement("div");
    div.innerHTML = day;
    document.body.appendChild(div);
  }

 