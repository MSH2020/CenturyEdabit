
var year = 1756;

function century(year) {
    var yearString = year.toString(); 
    var firstTwo = yearString.substring(0, 2);
    var cent = parseInt(firstTwo) + 1;
    var resultDisplayed = year + " is in " + cent + "th century";
    console.log ( resultDisplayed );
    return cent;
}

document.getElementById("cent").innerHTML = century(year);