$(function(){
	var index = 0;
	$('.f_btn').find('li').mouseover(function(){
		//siblings �õ�ͬ��Ԫ��
		$(this).addClass('no').siblings().removeClass('no');
		var _index = $(this).index(); //�õ���ǰli������
		index = _index;//���¸�ֵ
		//�����л�
		$('.f_pic').find('li').eq(_index).fadeIn('slow')
		.siblings().hide();
		//ͬʱ�ı䱳��
		//��ȡ��ǰԪ�ص�color
		var bgd = $(this).data('color');
		$(this).parents('.b_bg').css('background',bgd);
	});
	//��ʱ��
	setInterval(function(){
		index ++;
		var length = $('.f_pic').find('li').length;
		if(index >= length){
			index = 0;
		}
		//��ť�仯
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//ͼƬ�仯
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	},2000);
	
	//��һ��
	$('.next').click(function(){
		index++;
		var length = $('.f_pic').find('li').length;
		if(index >= length){
			index = 0;
		}
		//��ť�仯
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//ͼƬ�仯
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	});
	//��һ��
	$('.pre').click(function(){
		index--;
		var length = $('.f_pic').find('li').length;
		if(index < 0){
			index = length-1;
		}
		//��ť�仯
		$('.f_btn').find('li').eq(index).addClass('no')
		.siblings().removeClass('no');
		//ͼƬ�仯
		$('.f_pic').find('li').eq(index).fadeIn('slow').siblings().hide();
	});
});












