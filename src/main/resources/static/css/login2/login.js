$(function(){
	sendBtn();
})

	// 登录点击事件
	function sendBtn(){
		$(".login-btn").click(function(){
			// var type = 'phone';
			var inp = $.trim($('#uname').val());
			var pass = $.trim($('#upass').val());
			var params = {};
			params.username = inp;
			params.password = pass;
			
			console.log(params);
			
			$.ajax({
	            type: "POST",
	            url: ctx+"login",
	            data: params,
	            success: function (r) {
	                if (r.code == 0) {
	                    parent.location.href = '/index';
	                } else {
	                    layer.msg(r.msg);
	                }
	            }
	        });
		});
	}

	// 登录的回车事件
	$(window).keydown(function(event) {
    	if (event.keyCode == 13) {
    		$('.log-btn').trigger('click');
    	}
    });
	


	