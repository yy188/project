$(function(){
//头部导航的展开和收起
	$.each($(".header-nav li"),function(index,value){
		$(this).hover(function(){
        $(this).find(".show").show();
        $(this).css({
               color:"#35b558"
           });
        $(this).find(".arrow-icon").css({
         transform:"rotate(45deg)",
         "margin-bottom":"-2px",
         
        });
		},function(){
          $(this).find(".show").hide();
          $(this).css({
               color:"#333"
           }); 
          $(this).find(".arrow-icon").css({
         transform:"rotate(-135deg)",
         "margin-bottom":"2px",
        });
		})
	})
	$.each($(".show a"),function(index,value){
     $(this).hover(function(){
     	$(this).css({
     		color:"#35b558",
     		"background-color":"#F5F5F5"
     	})
     },function(){
       $(this).css({
     		color:"#333",
     		"background-color":"#fff"
     	})
     })
	})
  //search-icon的展开和收起
  $("#search-icon").click(function(){
  $("#search").show(1000);
  });
  $("#close-btn").click(function(){
  $("#search").hide();
  });

//主体内容的头部导航
  $.each($(".soreMode dl"),function(){
  $(this).hover(function(){
    $(this).find("dd").show();
    $(this).css({
     "box-shadow":"1px 1px 10px gray"
    });
    $(this).find(".arrow").css({
      "opacity":"0"
    });

  },function(){
    $(this).find("dd").stop(true,true).hide();
     $(this).css({
    "box-shadow":"none"
    });
    $(this).find(".arrow").css({
      "opacity":"1"
    });
  });
  });
  $.each($(".soreMode dd a"),function(){
    $(this).hover(function(){
    $(this).css({
   "color":"#35b558"
   });
    },function(){
   $(this).css({
   "color":"gray"
   });
    });
 
  });
  //展开和收起侧边栏的二级导航
$.each($(".aside-cList li"),function(index,value){
$(this).hover(function(){
  $(this).find(".list-show").show();
  $(this).find(".list-show").html(index);
},function(){
  $(this).find(".list-show").hide();
  $(this).find(".list-show").html("");
})
});
//当鼠标滑过的时候展开主体内容
$(document).on("mouseenter",".lesson-list ul li",function(){
$(this).find(".lesson-infor").css({
    "height":"175px",
  });
  $(this).find(".lesson-infor p").css({
  "height":"52px",
  });

  $(this).find(".lesson-infor p").delay(100).slideDown(300);
  $(this).find(".zhongji").delay(200).show(50);
  $(this).find(".learn-number").delay(200).show(50);
  $(this).find(".lessonicon-box").find("img").css({
   "bottom":"0px"
  }); 
  $(this).find(".lessonplay").css({
 "opacity":"1"
  });
});
//当鼠标离开的时候收起主体内容
$(document).on("mouseleave",".lesson-list ul li",function(){
     $(this).find(".lesson-infor").css({
    "height":"88px"
  });
  $(this).find(".lesson-infor p").stop(true,true).slideUp(300).css({
  "height":"0px",
  });
  $(this).find(".zhongji").stop(true,true).hide();
  $(this).find(".learn-number").stop(true,true).hide();
   $(this).find(".lessonicon-box").find("img").css({
   "bottom":"8px"
  });
   $(this).find(".lessonplay").css({
 "opacity":"0"
  });
});


//点击list-icon按钮切换
$(".list-icon").click(function(){
  $("#change").removeClass("lesson-list");
  $("#change").addClass("lesson-list1");
  $(".lesson-list1").find(".lesson-infor p").css({
  "height":"36px",
  "display":"block"
  });
   $(".lesson-list1").find(".zhongji").css({
    "display":"block"
   });
  $(".lesson-list1").find(".learn-number").css({
  "display":"block"
  });
  });

$(document).on("mouseenter",".lesson-list1 ul li",function(){
  $(this).find(".lessonplay").css({
 "opacity":"1"
  });
});
$(document).on("mouseleave",".lesson-list1 ul li",function(){
   $(this).find(".lessonplay").css({
 "opacity":"0"
  });
});
//点击kuai-icon按钮切换
 $(".kuai-icon").click(function(){
  $("#change").addClass("lesson-list");
   $("#change").removeClass("lesson-list1");
   $(".lesson-list").find(".lesson-infor p").css({
  "height":"0px",
  "display":"none"
  });
   $(".lesson-list").find(".zhongji").css({
    "display":"none"
   });
  $(".lesson-list").find(".learn-number").css({
  "display":"none"
  });
  });
  
})