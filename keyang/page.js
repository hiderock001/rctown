$(document).ready(function(){
	$("#sub_gnb").hide();
	$("#person").hide();
	$("#family_box").hide();
	$(".person_wanted, #person").hover(function(){
		$("#person").show();	
	},
		function(){
		$("#person").hide();		
		
		});
	$("ul.gnb, #sub_gnb").hover(function(){
		$("#sub_gnb:not(:animated)").show();	
	},
		function(){
		$("#sub_gnb:not(:animated)").hide();		
		
		});
	$("ul.gnb li a").mouseover(function(){
			$("#show div").hide();
			$(this.hash).show();
			 
		});
	
	$("#tab h3 a").mouseover(function(){
			$("#tab div").hide();
			$(this.hash).show(); 	
		});
	$("#s_box p").hover(function(){
			$(this).stop().animate({
					fontSize:"12px"  
			},"slow","swing",function(){
				$(this).stop().animate({
					fontSize:"11px"	
				},"slow","swing")	
			});
				
		});
	$("#family, #family_box").hover(function(){
		$("#family_box:not(:animated)").show();	
	},
		function(){
		$("#family_box:not(:animated)").hide();		
		
		});	
});