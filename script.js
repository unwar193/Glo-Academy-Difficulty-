// 'use strict';
// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
// 1) Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let curDay = "";
curDay = new Date().getDay();

for (let key in week) {
  if (key == curDay - 1) {
    const div = document.createElement("div");
    div.innerHTML = `<b>${week[key]}</b>`;
    document.body.appendChild(div);
  } else if ((key === 5 || key === 6) && key === curDay) {
    const div = document.createElement("div");
    div.innerHTML = `<i><strong>${week[key]}</strong></i>`;
    document.body.appendChild(div);
  } else if (key == 5 || key == 6) {
    const div = document.createElement("div");
    div.innerHTML = `<i>${week[key]}</i>`;
    document.body.appendChild(div);
  } else {
    const div = document.createElement("div");
    div.textContent = `${week[key]}`;
    document.body.appendChild(div);
  }
}
