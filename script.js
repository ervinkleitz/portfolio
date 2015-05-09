$(document).ready(function(){
	
	var titleCounter = 0;
	var strCounter = 1;
	
	$("#about-me-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#about-me").offset().top
		}, 1000);
	});

	$("#skills-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#skills").offset().top
		}, 1000);
	});
	
	var fillTitle = setInterval( changeTitle, 250 );
	var titles = ['full-stack engineer', 'entrepreneur', 'fooddie', 'developer', 'dog fanatic', 'gaming enthusiast'];
	
	function changeTitle(){

		if ( titleCounter > titles.length - 1 ) { titleCounter = 0; }
		document.getElementById( 'job-title' ).innerHTML = titles[titleCounter].substr(0, strCounter);
		strCounter++;
		if (strCounter > titles[titleCounter].length ) { titleCounter++; strCounter = 1; }
	}
	
});