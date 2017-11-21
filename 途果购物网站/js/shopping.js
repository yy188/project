/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
$(".second-level-menu").hide();
//$("li.web_nav").find(".second-level-menu").show();
$(".shopping_bus_open").hide();
//$(".goods_icon").show();
//头部导航的左半部
$(".header_left li a").hover(function(){
     $(this).css({
               color:"#3E87C9"
           }); 
},function(){
       $(this).css({
               color:"#6c6c6c"
           }); 
});
//头部导航的的右半部的二级导航
var yrr =[];
$.each($(".hover"),function(index,value){
     yrr[index]=$(this).find(".second-level-menu").height()>0;
     if(yrr[index]==true){
        $(this).hover(function(){
        $(this).find(".second-level-menu").show();
        $(this).css("background-color","white");
        $(this).find("span").html("").removeClass("menu_succ");
       $(this).find("span").html("").addClass("menu_leave");
       /*$(this).css({
           border: "1px solid #DDDDDD",
           "border-bottom":"none"
       });*/
   },function(){
        $(this).find(".second-level-menu").hide();
         $(this).css("background-color","#F1F1F1");
         $(this).find("span").html("").removeClass("menu_leave");
        $(this).find("span").html("").addClass("menu_succ");
        /*$(this).css({
           border: "none"
          
       });*/
  } );
    }
    else{
         $(this).find("a").hover(function(){
           $(this).css({
               color:"#3E87C9"
           });  
         },function(){
             $(this).css({
               color:"#6c6c6c"
           }); 
         });
     }
});
$.each($(".header_right .s-l-menu_open"),function(index,value){
     $(this).find("a").hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#6c6c6c"
           }); 
    });
});
//search_list
$.each($(".search_list a"),function(index,value){ 
     $(this).hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#666666"
           }); 
    });
});
//shopping_bus
$(".shopping_bus").hover(function(){
    $(".shopping_bus_open").show();
    $(this).css({
        "background-color":"#FFFFFF"
    });
    $(this).find("span.shopping_bus_icon").html("").removeClass("shopping_bus_succ");
     $(this).find("span.shopping_bus_icon").html("").addClass("shopping_bus_leave");
},function(){
    $(".shopping_bus_open").hide();
      $(this).css({
        "background-color":"#F9F9F9"
    });
     $(this).find("span.shopping_bus_icon").html("").removeClass("shopping_bus_leave");
     $(this).find("span.shopping_bus_icon").html("").addClass("shopping_bus_succ");
});
//全部商品分类
$.each($(".goods ul li a"),function(index,value){ 
    $(this).hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#333"
           }); 
    });
    });


//侧栏的二级导航
err=[];
$.each($(".goods_open ul li"),function(index,value){ 
     var y=$('<div class="goods_icon"></div>').appendTo($(this).next());
     //$('<p>你好</p>').appendTo(y);
     $(".goods_icon").hide();
 err[index]=$(value).html();

  $(this).hover(function(){
          $(this).find(".goods_icon").show();
      $(this).css({
          "background-color":"#f7f7f7"
      });
      $(this).find("a.goods_open_a").css({
          color:"#4593DD"
      });  
  },function(){
      $(".goods_icon").hide();
      //$(this).html(err[index]);
      $(this).css({
          "background-color":"#4593DD"
      });
      $(this).find("a.goods_open_a").css({
          color:"#fff"
      });
  });
});



$.each($(".goods_icon p"),function(index,value){ 
           $(this).find("a").hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#666666"
           }); 
    });
    });
    //猜你喜欢
    $(function(){
var imgWid = 0 ;
var imgHei = 0 ; //变量初始化
var big = 1.1;//放大倍数
$(".fav_container ul li a").find("img").hover(function(){
$(this).stop(true,true);//???????????
var imgWid2 = 0;var imgHei2 = 0;//局部变量
imgWid = $(this).width();
imgHei = $(this).height();
imgWid2 = imgWid * big;
imgHei2 = imgHei * big;
$(this).css({"z-index":2});
$(this).animate({"width":imgWid2,"height":imgHei2});
},function(){
    $(this).stop().animate({"width":imgWid,"height":imgHei,"z-index":1});
});
});
    $.each($(".fav_img p.details"),function(index,value){ 
           $(this).hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#666666"
           }); 
    });
    });
//超值特惠
arr=[];
    $.each($(".Sale_value_container li"),function(index,value){
        arr[index]=$(value).html();
        $(this).hover(function(e){
            var s_v_img=$(this).find(".s_v_img").html("");
        var s_v_img_show=$('<div class="s_v_img_show"></div>').css({
            //height:"70px",
            //width:"130px",
            margin:"0 auto",
            padding:"20px 0 0 0",
            "text-align":"center"
        }).appendTo(s_v_img);
        $('<p class="p_one">找相似</p>').css({
            "font-size":"16px",
            color:"#F6F6F6"
        }).appendTo(s_v_img_show);
        // $('<hr/>').css({
        //    "background-color":"#3E87C9", 
        //     height:" 1px",
        //     border: "none"
        // }).appendTo(s_v_img_show);
        $('<p class="p_two">发现更多相似的宝贝</p>').css({
            color:"#fff",
            width:"130px",
            "border-top":"1px solid #3E87C9",
            margin:"0 auto"
        }).appendTo(s_v_img_show);
        $(this).css({
            "background":"#4593DD",
            "border":"1px solid #4593DD",
            cursor:"pointer"
        });
     
          $(this).find("img").css({
            opacity:"0.8"
        });
        },function(){
           $(this).html(arr[index]).css({
               border: "1px solid #EDEDED",
               "background-color": "#F5F5F5"
           });
           
        });
       
    });
  //图片轮播
     var slideBox = function(){
          var defaults = {
			direction : 'left',
			duration : 0.6,
			easing : 'swing',
			delay : 3,
			startIndex : 0,
			hideClickBar : true,
			clickBarRadius : 5,
			hideBottomBar : false,
			width : null,
			height : null
		};
		var wrapper = $("#demo1"), ul = wrapper.children('ul.items'), lis = ul.find('li'), firstPic = lis.first().find('img');
		var li_num = lis.size(), li_height = 0, li_width = 0;
		var order_by = 'ASC';
		var init = function(){
			if(!wrapper.size()) return false;
			li_height = lis.first().height();
			li_width = lis.first().width();
			
			wrapper.css({width: li_width+'px', height:li_height+'px'});
			lis.css({width: li_width+'px', height:li_height+'px'});
			
			if (defaults.direction == 'left') {
				ul.css('width', li_num * li_width + 'px');
			} 		
			ul.find('li:eq('+defaults.startIndex+')').addClass('active');
			
			if(!defaults.hideBottomBar){
				var tips = $('<div class="tips"></div>').css('opacity', 0.6).appendTo(wrapper);
				var nums = $('<div class="nums"></div>').hide().appendTo(tips);
				lis.each(function(i, n) {
					var a = $(n).find('a'), text = a.attr('title'), href = a.attr('href'), css = '';
					i ==defaults.startIndex && (css = 'active');
					$('<a>').attr('href', href).text(text).addClass(css).css('borderRadius', defaults.clickBarRadius+'px').mouseover(function(){
						$(this).addClass('active').siblings().removeClass('active');
						ul.find('li:eq('+$(this).index()+')').addClass('active').siblings().removeClass('active');
						start(); 
						stop();
					}).appendTo(nums);
				});
			
				if(defaults.hideClickBar){//ADD.JENA.201206300847
					tips.hover(function(){
						nums.animate({top: '0px'}, 'fast');
					}, function(){
						nums.animate({top: '0px'}, 'fast');
					});
					nums.show().delay(2000).animate({top: '0px'}, 'fast');
				}else{
					nums.show();
				}
			}
			
			lis.size()>1 && start();
		};
		var start = function() {
			var active = ul.find('li.active'), active_a = active.find('a');
			var index = active.index();
			if(defaults.direction == 'left'){
				offset = index * li_width * -1;
				param = {'left':offset + 'px' };
			}
			wrapper.find('.nums').find('a:eq('+index+')').addClass('active').siblings().removeClass('active');

			ul.stop().animate(param, defaults.duration*1000, defaults.easing, function() {
				active.removeClass('active');
				if(order_by=='ASC'){
					if (active.next().size()){
						active.next().addClass('active');
					}else{
						order_by = 'DESC';
						active.prev().addClass('active');
					}
				}else if(order_by=='DESC'){
					if (active.prev().size()){
						active.prev().addClass('active');
					}else{
						order_by = 'ASC';
						active.next().addClass('active');
					}
				}
			});
			wrapper.data('timeid', window.setTimeout(start, defaults.delay*1000));
		};
		var stop = function() {
			window.clearTimeout(wrapper.data('timeid'));
		};
		wrapper.hover(function(){
			stop();
		}, function(){
			wrapper.data('timeid', window.setTimeout(start, defaults.delay*1000));
		});	
	var imgLoader = new Image();
		imgLoader.onload = function(){
			imgLoader.onload = null;
			init();
		};
		imgLoader.src = firstPic.attr('src');	   
        };
slideBox();
 //友情链接
       $.each($(".block ul li a"),function(index,value){
            $(this).hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#666666"
           }); 
    });
       });
    //版本信息  
        $.each($(".bottom .bottom_top a"),function(index,value){
            $(this).hover(function(){
        $(this).css({
               color:"#3E87C9"
           });
    },function(){
         $(this).css({
               color:"#666666"
           }); 
    });
       });
  
  
  //注册表单验证
  $("form p.required span.form_term").each(function(){
            var $required = $("<strong class='high'> &nbsp;&nbsp;&nbsp;&nbsp;</strong>");
            $(this).append($required); 
        });
        $('form p span.form_term input.border_show').blur(function(){
             var $parent = $(this).parent().parent();
            $parent.find(".formtips").remove();
             if( $(this).is('#user') ){
                  if( this.value==""){
                      $(this).attr("placeholder","您的账户名和登录名");
                      $(this).parent().find("strong").removeClass("icon");
                        var errorMsg ='支持中文、字母、数字、"_"、"-",6-20个字符';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                 $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                    } 
                   else if(this.value.length < 6){
                         $(this).parent().find("strong").removeClass("icon");
                        var errorMsg = '请输入至少6位的用户名.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                        $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                 
                    }
                   else if(this.value.length >20){
                         $(this).parent().find("strong").removeClass("icon");
                        var errorMsg = '请输入不超过20位的用户名.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                        $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                 
                    }else{
                        //var okMsg = '输入正确.';
                        $(this).parent().find("strong").addClass("icon");
                        $parent.append('<span class="formtips onSuccess"></span>');
                 //        $(this).css({
                 //     "border":"1px solid #DDDDDD"
                 // });
                 // $parent.find("span").css({
                 //     color:"#C5C5C5"
                 // });
                    }
             }
                 if( $(this).is('#pass') ){
                  if( this.value==""){
                      $(this).attr("placeholder","建议至少使用两种字符组合");
                      $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '建议使用字母、数字两种及以上的组合,6-20个字符';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                 $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                    } 
                   else if(this.value.length < 6||this.value.length >20){
                         $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '长度只能在6-20个字符之间.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                        $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                 
                    }
             else{
                        //var okMsg = '输入正确.';
                        $(this).parent().parent().find("strong").addClass("icon");
                        $parent.append('<span class="formtips onSuccess"></span>');
                 //        $(this).css({
                 //     "border":"1px solid #DDDDDD"
                 // });
                 // $parent.find("span").css({
                 //     color:"#C5C5C5"
                 // });
                    }
             }
              if( $(this).is('#pass1')){
                  if( this.value==""){
                      $(this).attr("placeholder","请再次输入密码");
                      $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '请再次输入密码';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                 $(this).css({
                     "border":"1px solid red"
                 });
                $parent.find("span").css({
                     color:"red"
                 });
                    } 
                   else if(!(this.value===$("#pass").val())){
                         $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '两次密码输入不一致';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                        $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                 
                    }
             else{
                        //var okMsg = '输入正确.';
                        $(this).parent().parent().find("strong").addClass("icon");
                        $parent.append('<span class="formtips onSuccess"></span>');
                //         $(this).css({
                //      "border":"1px solid #DDDDDD"
                //  });
                // $parent.find("span").css({
                //      color:"#C5C5C5"
                //  });
                    }
             }
              if( $(this).is('#phone')){
                  if( this.value==""){
                      $(this).attr("placeholder","建议使用常用手机");
                      $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '完成验证后，可以使用该手机登录和找回密码';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                 $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                    } 
                   else if( !/(^1[3|5|8][0-9]{9}$)/.test(this.value)){
                         $(this).parent().parent().find("strong").removeClass("icon");
                        var errorMsg = '格式有误';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                        $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                 
                    }
             else{
                        //var okMsg = '输入正确.';
                        $(this).parent().parent().find("strong").addClass("icon");
                        $parent.append('<span class="formtips onSuccess"></span>');
                 //        $(this).css({
                 //     "border":"1px solid #DDDDDD"
                 // });
                 // $parent.find("span").css({
                 //     color:"#C5C5C5"
                 // });
                    }
             }
              if( $(this).is('#validate')){
                  if( this.value==""){
                      $(this).attr("placeholder","请输入验证码");
                        var errorMsg = '看不清?点击图片更新验证码';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                 $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 });
                    }  
                    else if($(this).val().toLowerCase()!= $(this).parent().find("input.no_border").val().toLowerCase())   
                    { 
                 var errorMsg = '验证输入错误';
                 $parent.append('<span class="formtips onError">'+errorMsg+'</span>');

                 $(this).css({
                     "border":"1px solid red"
                 });
                 $parent.find("span").css({
                     color:"red"
                 }); 
          
                       } 
             }
        }).keyup(function(){
       //$(this).triggerHandler("blur");
        }).focus(function(){
       $(this).triggerHandler("blur");
       $(this).attr("placeholder","");
       $(this).css({
                     "border":"1px solid #DDDDDD"
                 });
         $(this).parent().parent().find("span").css({
                     color:"#C5C5C5"
                 });
           
        });
       //$(this).find(".no_border").createCode;

         $('#send').click(function(){
               $("form p span.form_term input.border_show").trigger('blur'); //??????
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
             
                alert("注册成功");
             /**/
                //$("form p input").trigger('blur');
                 // alert($("form .onError").size());
              /*  var numError = $('form .onError').size();
                if(numError){
                    return false;
                    alert("注册失败");
                } 
                alert("注册成功,密码已发到你的邮箱,请查收.");*/
         });


});
 //生产验证码
    var code ;   
     function createCode()   
     {    
       code = "";   
       var codeLength = 6;  
       var checkCode = document.getElementById("checkCode");   
       var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
       for(var i=0;i<codeLength;i++)   
       {   
          
            
       var charIndex = Math.floor(Math.random()*36);   
       code +=selectChar[charIndex];   
           
       }
      
       if(checkCode)   
       {   
         
         checkCode.value = code;   
       }   
           
     }  
        