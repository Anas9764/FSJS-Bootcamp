const now = new Date();

// YYYY-MM-DD HH:mm
console.log(
  `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
);

// DD-MM-YYYY HH:mm
console.log(
  `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

// DD/MM/YYYY HH:mm
console.log(
  `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

// output

// 2023-2-17 23:40
// 17-2-2023 23:40
// 17/2/2023 23:40
