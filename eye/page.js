$(document).ready(function(){
	$("#c_tab .c_tabbox:not(:first)").hide();	
	$("#c_tab h2").first().addClass("on");
	$("#c_tab h2 a").mouseover(function(){
		$("#c_tab h2").removeClass("on");
		$(this).parent().addClass("on");
	});
	$("#c_tab h2 a").mouseover(function(){
		$(".c_tabbox").hide();
		$(this.hash).show();
		return false;
	});
	$("ul.quick_img li.a01").hover(function(){
		$(this).css("src","img/a01_over.jpg");	
	});
});