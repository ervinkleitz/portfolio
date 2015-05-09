//Author: Ervin Kleitz Gonzales @ 2015

function onMouseHover() {
	document.getElementById( 'project1' ).setAttribute( 'src', 'img/project1.png' );
}

function onMouseOff() {
	document.getElementById( 'project1' ).setAttribute( 'src', 'img/project1-bw.png' );
}

$(document).ready(function(){
	
	var titleCounter = 0,
		strCounter = 1,
		scramblerCounter = 1
		images = ['html5','css3','javascript','expressjs','nodejs','angularjs','mongodb','github','npm','jquery','git','ajax'],
		imgArray = [];


	
	$('#about-me-button').click(function() {
		$('html, body').animate({
			scrollTop: $('#about-me').offset().top
		}, 1000);
	});

	$('#skills-button').click(function() {
		$('html, body').animate({
			scrollTop: $('#skills').offset().top
		}, 1000);
	});

	$('#projects-button').click(function() {
		$('html, body').animate({
			scrollTop: $('#projects').offset().top
		}, 1000);
	});
	
	for ( var i = 0; i < images.length; i++ ){
		images[i];
		imgArray.push( '<img src="img/' + images[i] + '.png" class="img-responsive" alt="' + images[i] + '">' );
	}



	document.getElementById( 'images-div' ).innerHTML = '<br>' + imgArray.join('');

	var fillTitle = setInterval( changeTitle, 150 );
	var titles 
		= ['full-stack javascript engineer  ', 'entrepreneur  ', 'foodie  ', 'web developer  ', 'gaming enthusiast  '];

	function changeTitle(){

		if ( titleCounter > titles.length - 1 ) { titleCounter = 0; }

		// var scrambler = titles[titleCounter].split('').sort( function() {
		// 	return 0.5-Math.random()
		// }).join('');

		document.getElementById( 'job-title' ).innerHTML = titles[ titleCounter ].substr( 0, strCounter );
		strCounter++;
		if (strCounter > titles[titleCounter].length ) { titleCounter++; strCounter = 1; }
	}


	
});