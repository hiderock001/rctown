	$(document).ready(function(){
		
		$(".page:last").prependTo("#slide");
		$("#slide").css("margin-left","-0px");
		$(".next").click(function(){
			$("#slide").animate({
				marginLeft:parseInt($("#slide").css("margin-left"))-477+"px"	
			},0,"swing",function(){
				$("#slide").css("margin-left","-477px");
				$(".page:first").appendTo("#slide");
			});
			return false;	
		});
		$(".s_input").click(function(){
			$(this).val("");	
		});	
		$(".s_input").blur(function(){
			if($(this).val()==""){
				$(this).val("검색어를 입력하세요").one("focus",function(){
					$(this).val("");	
				});
			}
		});
		$(".prev").click(function(){
			$("#slide").animate({
				marginLeft:parseInt($("#slide").css("margin-left"))+477+"px"	
			},0,"swing",function(){
				$("#slide").css("margin-left","-477px");
				$(".page:last").prependTo("#slide");
			});	
			return false;
		});
		
		// 더보기
		$("#c_more").css("margin-left","-750px");
		$(".left_more").click(function(){
			$("#c_more").animate({
				marginLeft:"0px"	
			},500,"swing");
		});
		$(".minus").click(function(){
			$("#c_more").animate({
				marginLeft:"-750px"	
			},500,"swing");
		});
		
		
		$(document).ready(function() {
        $("iframe").each(function() {
            var ifr_source = $(this).attr('src');
            var wmode = "wmode=transparent";
                if(ifr_source.indexOf('?') != -1) {
                    var getQString = ifr_source.split('?');
                    var oldString = getQString[1];
                    var newString = getQString[0];
                    $(this).attr('src',newString+'?'+wmode+'&'+oldString);
                }
                else $(this).attr('src',ifr_source+'?'+wmode);
    });
});

	});