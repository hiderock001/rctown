
	
	// 메인메뉴 이미지 체인지
	
	$(document).ready(function(){
		var ing_gnb = "";

		$('.gnb > li > a ').mouseenter(function(){	
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 1) {
				$(this).children().attr( "src", $(this).children().attr("src").replace(".png","_on.png") );
			} else {
				ing_gnb = $(this).children().attr("src");
			}
		});
		$('.gnb > li > a').mouseleave(function(){
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 2) {
				if( ing_gnb == "" ) {
					$(this).children().attr( "src", $(this).children().attr("src").replace("_on.png",".png") );
				} else {
					ing_gnb = "";
				}
			}
		});
	});
	
	
	// 서브메뉴 이미지 체인지
	
	$(document).ready(function(){
		var ing_gnb = "";

		$('.sub li a').mouseenter(function(){	
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 1) {
				$(this).children().attr( "src", $(this).children().attr("src").replace(".png","_on.png") );
			} else {
				ing_gnb = $(this).children().attr("src");
			}
		});
		$('.sub li a').mouseleave(function(){
			var img_src = $(this).children().attr("src").split("_on");
			if( img_src.length == 2) {
				if( ing_gnb == "" ) {
					$(this).children().attr( "src", $(this).children().attr("src").replace("_on.png",".png") );
				} else {
					ing_gnb = "";
				}
			}
		});
	});
	
	// 메인 배너
	
	$(document).ready(function(){
		$(".banner > li").hide();
		$(".banner > li").eq(0).show();
		var ban_cnt=0;
		function main_ban(){
			ban_cnt++;
			if(ban_cnt>$(".banner > li").length-1) ban_cnt=0;
			$(".banner > li").fadeOut(1000);
			$(".banner > li").eq(ban_cnt).stop().fadeIn(1000);
			$(".ban_btn > li > a > img").attr("src","img/main_di_bg.png");
			$(".ban_btn > li:eq("+ban_cnt+") > a > img").attr("src","img/main_di_bg_on.png");
			if(ban_t)clearTimeout(ban_t);
			ban_t=setTimeout(main_ban,5000);
		}
		var ban_t=setTimeout(main_ban,5000);
		$(".ban_btn > li > a").click(function(){
			ban_cnt=$(this).parent().index()-1;
			main_ban();
			return false;
		});
		
	});
	
	// 작은 롤링 
	$(document).ready(function(){
	$(".rolling_page:last").prependTo(".rolling");
	$(".rolling").css("margin-left","-145px");
	
	setInterval(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))-145+"px"	
		},400,"swing",function(){
			$(".rolling").css("margin-left","-145px");
			$(".rolling_page:first").appendTo(".rolling");	
		});
	},3000);
		// next event
	$(".slide_next").click(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))-145+"px"	
		},400,"swing",function(){
			$(".rolling").css("margin-left","-145px");
			$(".rolling_page:first").appendTo(".rolling");	
		});
		
	});	
		
	$(".slide_prev").click(function(){
		$(".rolling").animate({
			marginLeft:parseInt($(".rolling:not(:animated)").css("margin-left"))+145+"px"	
		},400,"swing",function(){
			$(".rolling").css("margin-left","-145px");
			$(".rolling_page:last").prependTo(".rolling");	
		});	
	});
	
	// 커뮤니티 박스 탭
	
	$(".comm_box > div:not(:first)").hide();
	$(".choo_community").click(function(){
		$(".choo_community img").attr("src","img/choo_community_on.jpg");
		$(".free_community img").attr("src","img/free_community.jpg");
		$(".comm_box > div").hide()
		$(".c_c_box").show();
		return false;	
	});
	$(".free_community").click(function(){
		$(".free_community img").attr("src","img/free_community_on.jpg");
		$(".choo_community img").attr("src","img/choo_community.jpg");
		$(".comm_box > div").hide()
		$(".f_c_box").show();
		return false;	
	});
	
	// 지역별 채팅
	
	$(".area_sub_list:not(:first)").hide();
	$(".area_list li:first > a").addClass("area_on");
	$(".area_list li > a").click(function(){
		$(".area_list li > a").removeClass("area_on");
		$(".area_sub_list").hide();
		$(this).addClass("area_on");
		$(this).next().show();	
		return false;
	});
	
	// 서브 탭 박스	
	
	$(".sub_tab_list li:first > a").addClass("sub_tab_on");
	$(".sub_tab_list li > a").click(function(){
		$(".sub_tab_list li > a").removeClass("sub_tab_on");
		$(this).addClass("sub_tab_on");	
	});
	
	//서브 인원선택 
	
	$(".area_people_list li a").click(function(){
		$(".area_people_list li a").removeClass("area_people_on");
		$(this).addClass("area_people_on");	
	});
	
	// 메인메뉴 hover 시 sub 메뉴 보이고 숨기기
	$(".gnb > li").hover(function(){
		$(this).find(".sub").show();
	},function(){
		$(this).find(".sub").hide();	
		
	});
	
	//FAQ 탭 
	
	$(".faq_list dd").hide();
	$(".faq_list dt").click(function(){
		$(this).next().slideToggle();
	});
	
	
});