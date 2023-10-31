$(window).ready(function(){
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 1000,//可选选项，自动滑动
	pagination:".swiper-pagination",//让小圆点显示
    paginationClickable:true,//实现小圆点点击
    //effect:"flip"
　　
})
	$('.main-m ul li img').css('width','80%').css('margin','10% 0');
	$('.main-m ul li p:eq(1)').css('height','1.5rem').css('lin-height','1.5rem');
	$('.main-m ul li p:eq(1) span').css('border-bottom','1px solid #f0f2f5').css('height','1.4375rem').css('line-height','1.4375rem');
	/*下面开始显示回到顶部*/
	$(window).scroll(function(){
		var	step = $(this).scrollTop();
		if(step > 500){
			$('#top').show();
		}else{
			$('#top').hide();
		}
	});
	/*滑动顶部*/
	$('#top').click(function(){
			$('html,body').animate({
				scrollTop: '0px'
			}, 1000);
		});
});