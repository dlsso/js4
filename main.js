// Varibles are global because we hadn't covered scope yet
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

// Grab the value of the victims number form when Go! button is clicked
$("#victimsNumber-btn").click(function() {victimsNumber = $("#victimsNumber").val()

	$("#victimsNumber-btn").hide()	// Hide button after click

	// Create input fields numbered according to number of victims
	for(var i=1; i<=victimsNumber; i++) {
		$("#content").append(i+'. Name: <input id=\'names'+i + '\' type="text" name="names"> ')
		$("#content").append('Phone number: <input id=\'numbers'+i + '\' type="text" name="numbers"> ')
		$("#content").append('Street: <input id=\'streets'+i + '\' type="text" name="streets"><br><br>')
	}

	// Create submit button after fields
	$("#content").append('<button id="victimInfo-btn">Submit</button> <br><br>')

	$("#names1").focus()	// Move cursor to first field

	// Scroll first field to top of screen, half second duration 
	$('html, body').animate({
	    scrollTop: $("#names1").offset().top
	}, 500);

	$("#victimInfo-btn").click(function() {	// On click of submit button...

		$("#victimInfo-btn").hide()		// Hide submit button

		// Get values of fields and push to an array for each category of data
		for(var i=1; i<=victimsNumber; i++) {
			names.push($("#names" + i).val());
			numbers.push($("#numbers" + i).val());
			streets.push($("#streets"+ i).val());
		}

		// Add input for number of volunteers
		$("#content").append('<h1 id="vol">How many volunteers?</h1>')
		$("#content").append('<input id="volunteersNumber" type="text" name="volunteerssNumber"><br><br>')
		$("#content").append('<button id="volunteersNumber-btn">Go!</button><br><br><br>')

		$("#volunteersNumber").focus()	// Move cursor to volunteer number field

		// Scroll "How many volunteers?" to top of screen, half second duration
		$('html, body').animate({
		    scrollTop: $("#vol").offset().top
		}, 500);

		// On click of Go! button...
		$("#volunteersNumber-btn").click(function() {volunteersNumber = $("#volunteersNumber").val()

			$("#volunteersNumber-btn").hide()	// Hide Go! button

			// Add input for volunteer info
			for(var i=1; i<=volunteersNumber; i++) {
				$("#content").append(i+'. Name: <input id=\'volNames'+i + '\' type="text" name="volNames"> ')
				$("#content").append('Phone number: <input id=\'volNumbers'+i + '\' type="text" name="volNumbers"> ')
				$("#content").append('Street: <input id=\'volStreets'+i + '\' type="text" name="volStreets"><br><br>')
			}

			// Add submit button
			$("#content").append('<button id="volunteerInfo-btn">Submit</button> <br><br>')

			$("#volNames1").focus()		// Move cursor to first field

			// Scroll first field to top of screen, half second duration
			$('html, body').animate({
			    scrollTop: $("#volNames1").offset().top
			}, 500);

			$("#volunteerInfo-btn").click(function() {		// On click of submit button

				$("#volunteerInfo-btn").hide()		// Hide submit button

				// Get values of fields and push to an array for each category of data
				for(var i=1; i<=volunteersNumber; i++) {
					volNames.push($("#volNames" + i).val());
					volNumbers.push($("#volNumbers" + i).val());
					volStreets.push($("#volStreets"+ i).val());
				}

				// Display summary
				$("#content").append("<p id='summary'>There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.<p>"
					+ "<p>In need: " + names + "</p>"
					+ "<p>Volunteers: " + volNames + "</p><br><br>"
				)

				// Add who needs help right now input
				$("#content").append('<h1>Who needs help right now?</h1>')
				$("#content").append('Name: <input id="inNeed" type="text" name="inNeed"><br><br>')
				$("#content").append('<button id="inNeed-btn">Go!</button> <br><br>')

				$("#inNeed").focus()	// Move cursor to who needs help box
				// Scroll not necessary because focused item forces scroll in this case

				$("#inNeed-btn").click(function() {		// On click of Go! button...

					inNeed = $("#inNeed").val().toLowerCase()		// Get lower case value of person in need name
					lnames = []										// Set lower case names to empty array

					// For each victim name push the lower case value to the lower case array
					$.each( names, function(i,string) { lnames.push( string.toLowerCase() )})
					
					index = lnames.indexOf(inNeed)		// Store the index of the victim name in index
					
					// If index is undefined ask them to check the entered name
					if(index === -1){$("#content").append("<h2 class='red'>Please check the name!</h2>")}
					street = streets[index]		// Get victim street using index

					if(street) {				// Only run if street is defined
						var match = false		// No match unless we find one when we search

						// Loop through lower case volunteer streets, if there is a match with lower case victim street
						// display volunteer name and set match to true
						for(var i=0; i<volStreets.length; i++) {
				    		if(volStreets[i].toLowerCase() === street.toLowerCase()){
								$("#content").append("<h2 class='green'>" + volNames[i] + " is on the same street!</h2>");
								match = true
							}
		   				}
		   				// If there is no street match say no one nearby
		   				if(match === false){$("#content").append("<h2 class='yellow'>No one nearby!</h2>")}
					}
					// Scroll to the last h2 which is the last message, half second duration
	   				$('html, body').animate({
	   				    scrollTop: $("h2:last").offset().top
	   				}, 500);

				})
			})
		})
	})
})