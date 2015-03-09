function getURL() {
	var url, apiKey, cseKey, searchTerm, numReturns;
	
	apiKey = "AIzaSyBfFT0wpMlRboDsQBtADeGbtdtE2rvHE5k";
	cseKey = "017067219566844262098:3ko36verstu";
	numReturns = "10";
	searchTerm = $("#txtSearchTerm").val();
	
	url = "https://www.googleapis.com/customsearch/v1?" + 
			"key=" + apiKey +
			"&cx=" + cseKey +  
			"&q=" + searchTerm + 
			"&num=" + numReturns +
			"&callback=?";	
	
	return url;
}

var main = function () {
	"use strict";
	
	//set variables
	var url, $searchresults;
	
	$("#btnSearch").click(function() {
		//empty search results
		$("main .searchresults").empty();
		
		//build URL was keyword
		url = getURL();
		
		//build search results
		$searchresults = $("<h2>").text("Search Results");
		
		$.getJSON(url, function (googleResponse) {
			googleResponse.items.forEach(function (gLink) {
				var $link = gLink.link;
				var $title = gLink.title;
				$searchresults.append($("<p>")).append($("<a class='dotalink'></a>").attr('href',$link).text($title));
			});
		});
		
		$("main .searchresults").append($searchresults);
	});
};

$(document).ready(main);