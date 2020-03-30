
var array1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];

function getBudgets(arr) {
	var sumBudgets = 0;
	for (i=0; i<arr.length; i++){
		var budget=arr[i];		
		sumBudgets += arr[i].budget;
    }
    return sumBudgets;
    
}

console.log (getBudgets(array1));

document.getElementById("sumBudgetsValue").innerHTML = getBudgets(array1);