const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const month = [
"Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

const wordsHour = ["час", "часа", "часов"];
const wordsMinutes = ["минута", "минуты", "минут"];
const wordsSecondes = ["секунда", "секунды", "секунд"];

function declensionNum(num, words) {    
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
    
    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        return words[2];
    }
    if (lastDigit > 1 && lastDigit < 5) {
        return words[1];
    }
    if (lastDigit === 1) {
        return words[0];
    }
    return words[2];
}

function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

function updateDateTime() {
    const now = new Date();
    let curDay = now.getDay();
    let year = now.getFullYear();
    let monthOfTheYear = now.getMonth();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOfTheWeek = week[curDay === 0 ? 6 : curDay-1];
    let dayOfMonth = now.getDate();

    const dateFormatA = `Сегодня ${dayOfTheWeek}, ${dayOfMonth} ${month[monthOfTheYear]} ${year} года, ${hour} ${declensionNum(hour, wordsHour)} ${minutes} ${declensionNum(minutes, wordsMinutes)} ${seconds} ${declensionNum(seconds, wordsSecondes)}`;
    const dateFormatB = `${formatNumber(dayOfMonth)}.${formatNumber(monthOfTheYear + 1)}.${year} - ${formatNumber(hour)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;


    return `${dateFormatA}<br>${dateFormatB}`;
  }


const div = document.createElement("div");
document.body.appendChild(div);

function refresh() {
    div.innerHTML = updateDateTime();
}

refresh();
setInterval(refresh, 1000);
