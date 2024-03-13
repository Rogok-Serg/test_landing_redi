const dateEl = document.getElementById("date");

let year = new Date().getFullYear();
let month = Number(new Date().getMonth()) + 1;
month = month < 10 ? "0" + month : month;
console.log("month: ", month);
let day = new Date().getDate();
day = day < 10 ? "0" + day : day;

dateEl.innerHTML = `${day}:${month}:${year}`;
