const Month = prompt("Enter the month to find the number of days in it");

function getDaysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }

// May in a non-leap year.
console.log(getDaysInMonth(5, 2023));  

// February in a non-leap year.
console.log(getDaysInMonth(2, 2023));

// February in a leap year.
console.log(getDaysInMonth(2, 2000));