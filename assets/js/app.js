$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.menu-hide').toggleClass('menu-hide-active');
	});
});

$(document).ready(function(){
	$('#nav-open').click(function(){
		$(this).toggleClass('open');
		$('.menu-hide1').toggleClass('menu-hide1-active');
	});
});

$(document).ready(function(){
	$('.img').click(function(){
		$(this).toggleClass('open');
		$('.menu-hiden').toggleClass('menu-hiden-active');
	});
});

$(document).ready(function(){
	$('.vid').click(function(){
		$('.popup').addClass('popup-active');
		$('.popup').removeClass('popup-non');
	});
});

$(document).ready(function(){
	$('#balas').click(function(){
		$(this).toggleClass('open');
		$('.balasan').toggleClass('balasan-aktif');
	});
});

$(document).ready(function(){
	$('#balas1').click(function(){
		$(this).toggleClass('open');
		$('.balasan1').toggleClass('balasan1-aktif');
	});
});

$(document).ready(function(){
	$('#los').click(function(){
		$('.popup').addClass('popup-non');
		$('.popup').removeClass('popup-active');
	});
});

$('.lovetoggle').click(function(){
	$(this).toggleClass('actived');
})