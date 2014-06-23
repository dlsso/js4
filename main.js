var victimsNumber = prompt("Please enter the number of victims.")
var names = []
var numbers = []
var streets = []

for(i=1; i<=victimsNumber; i++) {
	names.push(prompt(i + ". Name:"));
	numbers.push(prompt(i + ". Phone number:"));
	streets.push(prompt(i + ". Street:"));
}

var volunteersNumber = prompt("Please enter the number of volunteers.")
var volNames = []
var volNumbers = []
var volStreets = []

for(i=1; i<=volunteersNumber; i++) {
	volNames.push(prompt(i + ". Name:"));
	volNumbers.push(prompt(i + ". Phone number:"));
	volStreets.push(prompt(i + ". Street:"));
}

alert("There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.\n"
		+ "In need: " + names + ".\n"
		+ "Volunteers: " + volNames + ".");

// Find victim street
inNeed = prompt("Who needs help?");
index = names.indexOf(inNeed);
street = streets[index];

// Match volunteer street
for(var i=0; i<volStreets.length; i++) {
    if(volStreets[i] === street){
		alert(volNames[i] + " is on the same street!");
     }
}


