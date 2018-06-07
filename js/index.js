/**
 *
 * Created by Administrator on 2018/1/30 0030.
 */
var i=0;
var time;
$(document).ready(function () {
	
	$('.ig').eq(0).show().siblings().hide()  
	
	timer();
	
$('.left_button').click(function(){
	clearInterval(time);
	if(i==0){
		i=4;
		}
	i--;
	show();
	timer();
})	
 $('.right_button').click(function(){
	clearInterval(time);
	if(i==3){
		i=-1;
		}
		i++;
		show();
	    timer();
	 })

});

	
	function show(){
	   $('.ig').eq(i).fadeIn(300).siblings().fadeOut(300)
	   
	}
	function timer(){
		time =setInterval(function () {
		  show();
		  i++;
		  if(i==4){
			  i=0
			  }
		},2000)
}
$('.back-top').click(function(){
	$('window').animate({
		scrolltop:0
	},300)	
})
$(window).scroll(function() {
	if($(window).scrolltop()>100){
		$('.back-top').css('display','block')
	}else{
		$('.back-top').css('display','none')
	}
})
		

	
