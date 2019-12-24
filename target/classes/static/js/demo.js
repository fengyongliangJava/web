$(function(){
	var index = 0;
	$('.f_btn').find('li').mouseover(function(){
		//siblings 得到同级元素
		$(this).addClass('no').siblings().removeClass('no');
		var _index = $(this).index(); //得到当前li的索引
		index = _index;//重新赋值
		//联动切换
		$('.f_pic').find('li').eq(_index).fadeIn('slow')
		.siblings().hide();
		//同时改变背景
		//获取当前元素的color
		var bgd = $(this).data('color');
		$(this).parents('.b_bg').css('background',bgd);
	});
	//定时器
	setInterval(function(){
		index ++;
		var length = $('.f_pic').find('li').length;
		if(index >= length){
			index = 0;
		}
		//按钮变化
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//图片变化
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	},2000);
	
	//下一张
	$('.next').click(function(){
		index++;
		var length = $('.f_pic').find('li').length;
		if(index >= length){
			index = 0;
		}
		//按钮变化
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//图片变化
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	});
	//上一张
	$('.pre').click(function(){
		index--;
		var length = $('.f_pic').find('li').length;
		if(index < 0){
			index = length-1;
		}
		//按钮变化
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//图片变化
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	});
});












