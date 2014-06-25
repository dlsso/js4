var victimsNumber
var names = []
var numbers = []
var streets = []
var volunteersNumber
var volNames = []
var volNumbers = []
var volStreets = []

$("#victimsNumber-btn").click(function() {victimsNumber = $("#victimsNumber").val()

	for(var i=1; i<=victimsNumber; i++) {
		$("#content").append(i+'. Name: <input id=\'names'+i + '\' type="text" name="names"> ')
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
		$("#content").append('<button id="volunteersNumber-btn">Go!</button><br><br><br>')

		$("#volunteersNumber-btn").click(function() {volunteersNumber = $("#volunteersNumber").val()
			for(var i=1; i<=volunteersNumber; i++) {
				$("#content").append(i+'. Name: <input id=\'volNames'+i + '\' type="text" name="volNames"> ')
				$("#content").append('Phone number: <input id=\'volNumbers'+i + '\' type="text" name="volNumbers"> ')
				$("#content").append('Street: <input id=\'volStreets'+i + '\' type="text" name="volStreets"><br><br>')
			}

			$("#content").append('<button id="volunteerInfo-btn">Submit</button> <br><br>')

			$("#volunteerInfo-btn").click(function() {

				for(var i=1; i<=volunteersNumber; i++) {
					volNames.push($("#volNames" + i).val());
					volNumbers.push($("#volNumbers" + i).val());
					volStreets.push($("#volStreets"+ i).val());
				}

				$("#content").append("<p>There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.<p>"
		+ "<p>In need: " + names + ".</p>"
		+ "<p>Volunteers: " + volNames + ".</p>")

			})

		})

	})



})







// alert("There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.\n"
// 		+ "In need: " + names + ".\n"
// 		+ "Volunteers: " + volNames + ".");

// // Find victim street
// var inNeed = prompt("Who needs help?");
// var index = names.indexOf(inNeed);
// var street = streets[index];

// // Match volunteer street
// for(var i=0; i<volStreets.length; i++) {
//     if(volStreets[i].toLowerCase() === street.toLowerCase()){
// 		alert(volNames[i] + " is on the same street!");
//      }
//     else {
//     	alert("No one nearby!")
//     }
// }