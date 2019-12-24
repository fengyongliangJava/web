$().ready(function() {
	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		save();
	}
});


function save() {
	$.ajax({
		cache : true,
		type : "POST",
		url : "/web/img/save",
		data : $('#signupForm').serialize(),// 你的formid
		async : false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(data) {
			if (data.code == 0) {
				parent.layer.msg("操作成功");
				parent.reLoad();
				var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
				parent.layer.close(index);

			} else {
				parent.layer.alert(data.msg)
			}

		}
	});

}
function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
			title : {
				required : true
			},
			type : {
				required : true
			},
			src : {
				required : true
			},
			oderby : {
				required : true,
				digits:true
			}
		},
		

		
		messages : {
			title : {
				required : icon + "请输入图片标题！"
			},
			type : {
				required : icon + "请选择图片类型！"
			},
			src : {
				required : icon + "请上传图片！"
			},
			oderby : {
				required : icon + "请输入排序号！"
			}
		}
	})
}