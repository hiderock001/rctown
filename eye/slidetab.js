
	$(document).ready(function(){
		$(".tab_c").hide();
		$("p.plus").toggle(function(){
			$(this).addClass("minus");
			$(this).next().slideDown(200);
		},
		function(){
			$(this).removeClass("minus");
			$(this).next().slideUp(200);		
		});
	});