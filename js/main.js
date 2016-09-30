

$(document).ready(function(){
	var planetId = ['#sun', '#mercury', '#venus', '#earth', '#mars', '#jupiter', '#saturn', '#uranus', '#neptune', '#pluto'];
	var delay = 7600;

		$('.launch, .spaceheader').hide();
    	$('.launch').fadeIn(4000);
	
	
	for(let i = 0; i < planetId.length; i++){
			let id = planetId[i].toString();
			id = id.substring(1, id.length);	
			let image = '<img/>';
			let source = './img/' + id + '.png';
	}

	$('#sun h2, #video-player').hide();
    $('.spaceship').click(function(){
		$('#launchpad').animate({top: '100vh'}, 8000);
		$('body.meadow').switchClass( "meadow", "space", 8000);
		$(this).animate({bottom: '150px'}, 8000);
		$(this).switchClass( "spaceship", "spaceship-launch",8000 );
		$("img.prelaunch").switchClass( "prelaunch", "postlaunch", 8000 );
		$('#sun h2').delay(4000).fadeIn(2000);
		$('.spaceheader').delay(8000).fadeIn(4000);
		$('#cloud, #cloud1, #cloud2, .launch').fadeOut(4000);

			for(let i = 0; i < planetId.length; i++){
				$(planetId[i]).delay(delay).animate({top: '50%'}, 'slow', travel);
				delay += 200;
			}
			
		 $(this).unbind();
		});
    
	function travel() {
		$(this).click(function() {
		var planet = $( this );
		var planetPos = planet.position();
		planetPos = planetPos.left;
			$('.spaceheader').fadeOut(1000);
			if(this.id != 'saturn') {
				$('.spaceship-launch').animate({'left' : planetPos,
			 								 	'margin-left': '-2%'}, 2500);
			}
			else {
				$('.spaceship-launch').animate({'left' : planetPos,
												 'margin-left': '1%'}, 2500);
			}
			
			$('#video-player').empty().show();
			if(this.id === 'sun'){
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/dU-BioqJBX0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'mercury') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/NWUsfud9PzM?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'venus') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/UciCLg8g_4Y?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'earth') {
				$('#video-player').append('<iframe  src="https://www.youtube.com/embed/IDhapt7nw4A?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'mars') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/gr7ShbG231U?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'jupiter') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/hz_fc69LdjY?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'saturn') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/KjZf88aBGe8?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'uranus') {
				$('#video-player').append('<iframe  src="https://www.youtube.com/embed/63KonRAL6CA?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else if(this.id === 'neptune') {
				$('#video-player').append('<iframe src="https://www.youtube.com/embed/VM22MyLaRSs?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
			else {
				$('#video-player').append('<iframe  src="https://www.youtube.com/embed/YZfi89JiXKM?list=PLXB5R79dmFB56RtG4Q5lR7PjZ8ifnul_b?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
			}
		});
	}
});

/*for(let i = 0; i < 5; i++){
				let div = '<div><img src ="./img/star.png"/></div>';
				let img = "<img src ='./img/star.png'/>";
				 $('<div>', {id:'star'+i}).append(img).appendTo('body');
				 $('#star0,#star1,#star2,#star3,#star4').fadeIn(8000);
				 events = click
				 animations = fadeOut, animate positiom,hide,fadeIn
			}*/


