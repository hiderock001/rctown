// JavaScript Document

$(document).ready(function(){
	$("ul.sub").hide();
	$("ul.gnb").hover(function(){
		$("ul.sub").slideDown(300);	
	},
		function(){
		$("ul.sub").slideUp(300);
	});	
});