var victimsNumber
var names = []
var numbers = []
var streets = []
var namesCount

$("#victimsNumber-btn").click(function() {victimsNumber = $("#victimsNumber").val()

	for(var i=1; i<=victimsNumber; i++) {
		$("#content").append('Name: <input id=\'names'+i + '\' type="text" name="names"> ')
		$("#content").append('Phone number: <input id=\'numbers'+i + '\' type="text" name="numbers"> ')
		$("#content").append('Street: <input id=\'streets'+i + '\' type="text" name="streets"><br><br>')
	}

	$("#content").append('<button id="victimInfo-btn">Submit</button> <br><br>')
		$("#victimInfo-btn").click(function() {

				for(var i=1; i<=victimsNumber; i++) {
					names.push($("#names" + i).val());
					numbers.push($("#numbers" + i).val());
					streets.push($("#streets"+ i).val());
				}






			$("#content").append('<h1>How many Volunteers?</h1>')
			$("#content").append('<input id="volunteersNumber" type="text" name="volunteerssNumber"><br><br>')
			$("#content").append('<button id="victimsNumber-btn">Go!</button><br><br><br>')
		})



})


//var volunteersNumber = prompt("Please enter the number of volunteers.")
var volNames = []
var volNumbers = []
var volStreets = []

for(var i=1; i<=volunteersNumber; i++) {
	volNames.push(prompt(i + ". Name:"));
	volNumbers.push(prompt(i + ". Phone number:"));
	volStreets.push(prompt(i + ". Street:"));
}

alert("There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.\n"
		+ "In need: " + names + ".\n"
		+ "Volunteers: " + volNames + ".");

// Find victim street
var inNeed = prompt("Who needs help?");
var index = names.indexOf(inNeed);
var street = streets[index];

// Match volunteer street
for(var i=0; i<volStreets.length; i++) {
    if(volStreets[i].toLowerCase() === street.toLowerCase()){
		alert(volNames[i] + " is on the same street!");
     }
    else {
    	alert("No one nearby!")
    }
}