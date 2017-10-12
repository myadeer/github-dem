$(function(){
	'use strict';
	$(window).scroll(function(){
		window.console.log($('.navbar').height());
		window.console.log($(window).scrollTop());
		var navbar=$('.navbar');
		if($(window).scrollTop()>=navbar.height()){
		navbar.addClass('scrolled')	;
		
		}else{
			navbar.removeClass('scrolled');
		} 
		});
		$('.tab-switch li').click(function(){
			//Add selected class ta active links
			$(this).addClass('selected').siblings().removeClass(' selected');
			//hiden all div
			$('.tabs-section .tab-content >  div').hide();
			//show div commected with this link
			$('.'+$(this).data('class')).show();
			window.console.log($(this).data('class'));//ØÈÚ ÇáÚäÕÑ Çááí Úãá ÖÛØ Úáíå
		});
		//if ÇáãÎÊÕÑå condition? true :false
	//$(window).scrollTop()>=navbar.height()?navbar.addClass('scrolled'):navbar.removeClass('scrolled');

});