 $(document).ready(function(){
    /*$("#home").css({
  css({width:"100%"});
});*/

$(window).resize(function(){
resizes();
});

var h1=$(window).height()-$("#header").height();
var h2=h1+"px";
var jumbotron=$("#jumbotron");
$("#jumbotron").css({height:h2,width:$(window).width()});
var img = $("#img"); 
img.css({
  position:"absolute",
  bottom:"0px",
  left:($("#jumbotron").width()-img.width())/2+"px"
});
  });
  function resizes(){
$(window).height();
var h1=$(window).height()-$("#header").height();
var h2=h1+"px";
var jumbotron=$("#jumbotron");
$("#jumbotron").css({height:h2,width:$(window).width()});
var img = $("#img"); 
img.css({
  position:"absolute",
  bottom:"0px",
  left:($("#jumbotron").width()-img.width())/2+"px"
});

 }