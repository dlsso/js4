var victimsNumber
var names = []
var lnames = []
var numbers = []
var streets = []
var volunteersNumber
var volNames = []
var volNumbers = []
var volStreets = []
var index
var street

$("#victimsNumber-btn").click(function() {victimsNumber = $("#victimsNumber").val()

	$("#victimsNumber-btn").hide()

	for(var i=1; i<=victimsNumber; i++) {
		$("#content").append(i+'. Name: <input id=\'names'+i + '\' type="text" name="names"> ')
		$("#content").append('Phone number: <input id=\'numbers'+i + '\' type="text" name="numbers"> ')
		$("#content").append('Street: <input id=\'streets'+i + '\' type="text" name="streets"><br><br>')
	}

	$("#content").append('<button id="victimInfo-btn">Submit</button> <br><br>')



	$("#victimInfo-btn").click(function() {

		$("#victimInfo-btn").hide()

		for(var i=1; i<=victimsNumber; i++) {
			names.push($("#names" + i).val());
			numbers.push($("#numbers" + i).val());
			streets.push($("#streets"+ i).val());
		}

		$("#content").append('<h1>How many Volunteers?</h1>')
		$("#content").append('<input id="volunteersNumber" type="text" name="volunteerssNumber"><br><br>')
		$("#content").append('<button id="volunteersNumber-btn">Go!</button><br><br><br>')

		$("#volunteersNumber-btn").click(function() {volunteersNumber = $("#volunteersNumber").val()

			$("#volunteersNumber-btn").hide()

			for(var i=1; i<=volunteersNumber; i++) {
				$("#content").append(i+'. Name: <input id=\'volNames'+i + '\' type="text" name="volNames"> ')
				$("#content").append('Phone number: <input id=\'volNumbers'+i + '\' type="text" name="volNumbers"> ')
				$("#content").append('Street: <input id=\'volStreets'+i + '\' type="text" name="volStreets"><br><br>')
			}

			$("#content").append('<button id="volunteerInfo-btn">Submit</button> <br><br>')

			$("#volunteerInfo-btn").click(function() {

				$("#volunteerInfo-btn").hide()

				for(var i=1; i<=volunteersNumber; i++) {
					volNames.push($("#volNames" + i).val());
					volNumbers.push($("#volNumbers" + i).val());
					volStreets.push($("#volStreets"+ i).val());
				}

				$("#content").append("<p>There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.<p>"
					+ "<p>In need: " + names + "</p>"
					+ "<p>Volunteers: " + volNames + "</p><br><br>"
				)

				$("#content").append('<h1>Who needs help right now?</h1>')
				$("#content").append('Name: <input id="inNeed" type="text" name="inNeed"><br><br>')
				$("#content").append('<button id="inNeed-btn">Go!</button> <br><br>')
				$("#inNeed-btn").click(function() {
					inNeed = $("#inNeed").val().toLowerCase()
					$.each( names, function(i,string) { lnames.push( string.toLowerCase() )})
					index = lnames.indexOf(inNeed)
					street = streets[index]

				var match = false
				for(var i=0; i<volStreets.length; i++) {
		    		if(volStreets[i].toLowerCase() === street.toLowerCase()){
						alert(volNames[i] + " is on the same street!");
						return match = true
					}

   				}
   				if(match === false){alert("No one nearby!")}

				})
			})
		})
	})
})