import { appWindow } from "@tauri-apps/api/window";

// appWindow.setDecorations(false);
// appWindow.center();
const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

setInterval(() => {
  day = new Date();
  hh = day.getHours() * 30;
  mm = day.getMinutes() * deg;
  ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
