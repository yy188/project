 $(function(){
            $(".panel-heading a").click(function(e){
                /*切换折叠指示图标*/
                $(this).find("span").toggleClass("glyphicon-triangle-bottom");
               
            });
            
        });