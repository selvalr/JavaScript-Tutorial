let d;

// Get today's date and time
d = new Date();
console.log(d); //Fri Dec 15 2023 22:23:42 GMT+0530 (India Standard Time)

// Set to a string
d = d.toString();
console.log(d); //Fri Dec 15 2023 22:23:42 GMT+0530 (India Standard Time)

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);
console.log(d); //Sun Jan 10 2021 12:30:00 GMT+0530 (India Standard Time)

// Pass in a string
d = new Date("2021-07-10T12:30:00");
console.log(d); //Sat Jul 10 2021 12:30:00 GMT+0530 (India Standard Time)
d = new Date("07/10/2021 12:30:00");
console.log(d); //Sat Jul 10 2021 12:30:00 GMT+0530 (India Standard Time)
d = new Date("2022-07-10");
console.log(d); //Sun Jul 10 2022 05:30:00 GMT+0530 (India Standard Time)
d = new Date("07-10-2022");
console.log(d); //Sun Jul 10 2022 00:00:00 GMT+0530 (India Standard Time)

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();
console.log(d); //1702659297031

// Get the timestamp of a specific date
d = new Date();
console.log(d); //Fri Dec 15 2023 22:24:57 GMT+0530 (India Standard Time)

d = d.getTime();
console.log(d); //1702659297031

d = d.valueOf();
console.log(d); //1702659297031

// Create a date from a timestamp
d = new Date(1666962049745);
console.log(d); //Fri Oct 28 2022 18:30:49 GMT+0530 (India Standard Time)

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d); //1702659359
