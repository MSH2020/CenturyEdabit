
var year = 1756;

function century(year) {
    var yearString = year.toString(); 
    var firsTwo = yearString.substring(0, 1);
    var cent = firstTwo.parseInt() + 1;
    
    var resultDisplayed = year + " is in " + cent + " century";
    console.log ( resultDisplayed );
    return cent;
}

document.getElementById("cent").innerHTML = century(year);