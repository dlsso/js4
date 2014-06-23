var victimsNumber = prompt("Please enter the number of victims.")
var names = []
var numbers = []
var streets = []

for(i=1; i<=victimsNumber; i++) {
	names.push(prompt(i + ". Name:"));
	numbers.push(prompt(i + ". Phone number:"));
	streets.push(prompt(i + ". Street:"));
}