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


$("#victimsNumber-btn").click(function() {victimsNumber = $("#victimsNumber").val()

	$("#victimsNumber-btn").hide()

	for(var i=1; i<=victimsNumber; i++) {
		$("#content").append(i+'. Name: <input id=\'names'+i + '\' type="text" name="names"> ')
		$("#content").append('Phone number: <input id=\'numbers'+i + '\' type="text" name="numbers"> ')
		$("#content").append('Street: <input id=\'streets'+i + '\' type="text" name="streets"><br><br>')
	}

	$("#content").append('<button id="victimInfo-btn">Submit</button> <br><br>')

	$("#names1").focus()
	$('html, body').animate({
	    scrollTop: $("#names1").offset().top
	}, 500);

	$("#victimInfo-btn").click(function() {

		$("#victimInfo-btn").hide()

		for(var i=1; i<=victimsNumber; i++) {
			names.push($("#names" + i).val());
			numbers.push($("#numbers" + i).val());
			streets.push($("#streets"+ i).val());
		}

		$("#content").append('<h1 id="vol">How many Volunteers?</h1>')
		$("#content").append('<input id="volunteersNumber" type="text" name="volunteerssNumber"><br><br>')
		$("#content").append('<button id="volunteersNumber-btn">Go!</button><br><br><br>')

		$("#volunteersNumber").focus()
		$('html, body').animate({
		    scrollTop: $("#vol").offset().top
		}, 500);

		$("#volunteersNumber-btn").click(function() {volunteersNumber = $("#volunteersNumber").val()

			$("#volunteersNumber-btn").hide()

			for(var i=1; i<=volunteersNumber; i++) {
				$("#content").append(i+'. Name: <input id=\'volNames'+i + '\' type="text" name="volNames"> ')
				$("#content").append('Phone number: <input id=\'volNumbers'+i + '\' type="text" name="volNumbers"> ')
				$("#content").append('Street: <input id=\'volStreets'+i + '\' type="text" name="volStreets"><br><br>')
			}

			$("#content").append('<button id="volunteerInfo-btn">Submit</button> <br><br>')

			$("#volNames1").focus()
			$('html, body').animate({
			    scrollTop: $("#volNames1").offset().top
			}, 500);

			$("#volunteerInfo-btn").click(function() {

				$("#volunteerInfo-btn").hide()

				for(var i=1; i<=volunteersNumber; i++) {
					volNames.push($("#volNames" + i).val());
					volNumbers.push($("#volNumbers" + i).val());
					volStreets.push($("#volStreets"+ i).val());
				}

				$("#content").append("<p id='summary'>There are " + victimsNumber + " people in need and " + volunteersNumber + " volunteers.<p>"
					+ "<p>In need: " + names + "</p>"
					+ "<p>Volunteers: " + volNames + "</p><br><br>"
				)

				$("#content").append('<h1>Who needs help right now?</h1>')
				$("#content").append('Name: <input id="inNeed" type="text" name="inNeed"><br><br>')
				$("#content").append('<button id="inNeed-btn">Go!</button> <br><br>')

				$("#inNeed").focus()
				// Scroll not necessary because focused item forces scroll in this case
				// $('html, body').animate({
				//     scrollTop: $("#summary").offset().top
				// }, 500);

				$("#inNeed-btn").click(function() {

					inNeed = $("#inNeed").val().toLowerCase()
					lnames = []
					$.each( names, function(i,string) { lnames.push( string.toLowerCase() )})
					index = lnames.indexOf(inNeed)
					if(index === -1){$("#content").append("<h2 class='red'>Please check the name!</h2>")}
					street = streets[index]

				if(street) {
					var match = false
					for(var i=0; i<volStreets.length; i++) {
			    		if(volStreets[i].toLowerCase() === street.toLowerCase()){
							$("#content").append("<h2 class='green'>" + volNames[i] + " is on the same street!</h2>");
							match = true
						}
	   				}
	   				if(match === false){$("#content").append("<h2 class='yellow'>No one nearby!</h2>")}
				}

   				$('html, body').animate({
   				    scrollTop: $("h2:last").offset().top
   				}, 500);

				})
			})
		})
	})
})