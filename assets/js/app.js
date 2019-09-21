$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.menu-hide').toggleClass('menu-hide-active');
	});
});

$('.lovetoggle').click(function(){
	$(this).toggleClass('actived');
})