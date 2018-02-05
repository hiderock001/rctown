
$(document).ready(function(){
	$(".about").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
	$(".business").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
	$(".investors").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
	$(".sus").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
	$(".careers").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
	$(".media").toggle(function(){
		$(".contents").animate({
			marginLeft:"230px"	
		},500,"swing");	
		},
		function(){
		$(".contents").animate({
			marginLeft:"0px"	
		},500,"swing");
		});	
		
		
		$(".gnb li a").click(function(){
			$(".h_right div").hide();
			$(this.hash).show();	
		});	
		
		$("#b_2").hide();
		$(".banner_1 a ").click(function(){
			$(".sub_banner div").hide();
			$(this.hash).show();
			return false;
		});	
		
		$(".c_middle div:not(:first)").hide();
		$(".project a ").click(function(){
			$(".c_middle div").hide();
			$(this.hash).show();
			return false;
		});
		
		
		
});