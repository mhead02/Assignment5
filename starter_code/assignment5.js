$(document).ready(function(){


	//listen for form submit or submi-btn click
	//once clickec, it will changeBackground
	//changeBackground--->will get the city-type value
	//check to see if it is one of our cities
	//if it is, change the body background image
	//if it is not one of the citie--->reset city-type input to "nothing"


	$("#submit-btn").click(changeBackground);


	function changeBackground(){
		event.preventDefault();
		var city = $("#city-type").val();	
		
		if(city === "New York" || city === "New York City" || city === "NYC"){
			$("body").attr("class", "nyc");
		
		} 	else if(city === "San Francisco" || city === "SF" || city === "Bay Area"){
			$("body").attr("class", "sf");
		} 	else if(city === "Los Angeles" || city === "LA" || city === "LAX"){
			$("body").attr("class", "la");
		} 	else if(city === "Austin" || city === "ATX"){
			$("body").attr("class", "austin");
		}	else if(city === "Sydney" || city === "SYD"){
			$("body").attr("class", "sydney");
		}	else {
		 	$("body").attr("class", "");
		}	
			$("#city-type").val("");
			$.trim(city);

	}






});