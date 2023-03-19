Month= prompt("Enter the month to check the season.")

if (Month === 'September' || Month === 'October' || Month === "Novermber"){
    console.log('The season is Autumn');
} else if (Month === 'December' || Month ==='January' || Month === "February"){
    console.log('The season is Winter');
} else if (Month === 'March' || Month === 'April' || Month === "May"){
    console.log('The season is Spring');
} else if (Month === 'June' || Month === 'July' || Month === "August"){
    console.log('The season is Summer');
}

// output
// input :April
// The season is Spring