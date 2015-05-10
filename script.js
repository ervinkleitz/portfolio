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
		scramblerCounter = 1,
		imgArray = [],
		index = 1,
		indexLength = 1,
		repeatitions = 0,
		images = ['html5','css3','javascript','expressjs','nodejs','angularjs','mongodb','github','npm','jquery','git','ajax'],
		titles 
		= ['full-stack javascript engineer  ', 'entrepreneur  ', 'foodie  ', 'web developer  ', 'gaming enthusiast  '];
	
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

	$('#contact-button').click(function() {
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
	});
	
	for ( var i = 0; i < images.length; i++ ){
		images[i];
		imgArray.push( '<img src="img/' + images[i] + '.png" class="img-responsive" alt="' + images[i] + '">' );
	}

	document.getElementById( 'images-div' ).innerHTML = '<br>' + imgArray.join('');

	var fillTitle = setInterval( changeTitle, 50 );

	function changeTitle(){

		if ( titleCounter > titles.length - 1 ) { titleCounter = 0; }

		var scrambler = titles[titleCounter].substr( index, titles[titleCounter.length-1] ).split('').sort( function() {
			return 0.5-Math.random()
		}).join('');

		if ( repeatitions > 4 ) {
			index++;
			repeatitions = 0;
		}

		repeatitions++;

		document.getElementById( 'job-title' ).innerHTML = titles[titleCounter].substring( 0, index ) + scrambler;

			if ( index === titles[titleCounter].length - 1) {
				index = 1;
				if ( titleCounter === titles[titleCounter].length - 1 ) { titleCounter = 0; }
				titleCounter++;
			}

		

	}
	
});

console.log( 'Hi there! :) Thanks for visiting my site! \nSince you\'re looking at this you\'re probably awesome, and I think we should connect! My email is hi@ervinkleitz.com. Have fun inspecting!');