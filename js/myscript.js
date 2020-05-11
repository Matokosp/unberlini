// Menu Slide

	var menuHideShow = $('.menu').hasClass('menu_show');

	function desplazar (){
		$('.menu').toggleClass('menu_show');
		$('#hambIconOne').toggleClass('hamburger_icon_one');
		$('#hambIconTwo').toggleClass('hamburger_icon_two');
		$('#hambIconThree').toggleClass('hamburger_icon_three');
	}
	$('.hamburger').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.menu').hasClass('menu_show');
		// console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu menu_show') {
			$('.menu').removeClass('menu_show');
			$('#hambIconOne').removeClass('hamburger_icon_one');
			$('#hambIconTwo').removeClass('hamburger_icon_two');
			$('#hambIconThree').removeClass('hamburger_icon_three');
		}
		console.log(e.target)
	})


	// SCROLL WINDOW TO ID

	$('a[href^="#"]').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if( target.length ) {
					event.preventDefault();
					$('html, body').stop().animate({
							scrollTop: target.offset().top
					}, 1000);
			}
	});

// RESET FORM


var form = document.getElementById("myForm");
form.reset();
