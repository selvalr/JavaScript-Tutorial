let x;
let d = new Date();

// Date methods

x = d.toString();
console.log(x); //Fri Dec 15 2023 22:27:16 GMT+0530 (India Standard Time)

x = d.getTime();
console.log(x); //1702659509418

x = d.valueOf();
console.log(x); //1702659524025

x = d.getFullYear();
console.log(x); //2023

x = d.getMonth();
console.log(x); //0-11

x = d.getMonth() + 1;
console.log(x); //12

x = d.getDate();
console.log(x); //15

x = d.getDay();
console.log(x); //0-6

x = d.getHours();
console.log(x); //0-23

x = d.getMinutes();
console.log(x); //0-59

x = d.getSeconds();
console.log(x); //0-59

x = d.getMilliseconds();
console.log(x); //645

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x); //2023-12-15

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat("en-US").format(d);
console.log(x); //12/15/2023

x = Intl.DateTimeFormat("en-GB").format(d);
console.log(x); //15/12/2023

x = Intl.DateTimeFormat("default").format(d);
console.log(x); //15/12/2023

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
console.log(x); //December

x = d.toLocaleString("default", { month: "short" });
console.log(x); //Dec

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(x); //Friday, 15 December 2023 at 12:02:20
