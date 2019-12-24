/**
 * Created by xl on 2017/3/27.
 */
$(function () {
    $('.eye').click(function () {

        var type = $('#password').attr('type');

        if (type == 'password') {
            $('#password').attr('type', 'text');
            $(this).css('background', 'url("/static/img/eye-2.png") no-repeat');
        }

        else {
            $('#password').attr('type', 'password');
            $(this).css('background', 'url("/static/img/eye-1.png") no-repeat');
        }

    });

    $('.reye').click(function () {

        var type = $('#rpwd').attr('type');

        if (type == 'password') {
            $('#rpwd').attr('type', 'text');
            $(this).css('background', 'url("/static/img/eye-2.png") no-repeat');
        }

        else {
            $('#rpwd').attr('type', 'password');
            $(this).css('background', 'url("/static/img/eye-1.png") no-repeat');
        }

    });

    $('.my-checkbox').click(function () {

        var check = $('#my-check').attr('type');

        if (check == 'button') {
            $('#my-check').attr('type', 'reset');
            $(this).css('background', 'url("/static/img/check_1.png") no-repeat');
            $('#register').attr('disabled', true);
            $('#register').css({'background-color': '#f09797', 'border-color': '#f09797'});
        }
        else {
            $('#my-check').attr('type', 'button');
            $(this).css('background', 'url("/static/img/check_2.png") no-repeat');
            $('#register').attr('disabled', false);
            $('#register').css({'background-color': '#e65252', 'border-color': '#e65252'});


        }
    })
});

var countdown = 60;

function sendMsg(val, url, code_type) {

    var mobileno = $("#mobileno").val();
    if (!mobileno || !mobileno.match(/(^1[3|5|7|8|9|][\d]{9}$)|(^14[7]\d{8}$)/)) {
        layer.alert('请输入正确格式的手机号码', {icon: 6});
        $('.getcode').css({'background': '#e53232', 'color': '#fff'});
        $('.getcode').html('获取验证码');
        val.removeAttribute("disabled");
        countdown = 60;
        $("#code").val('');
        return false;
    }
    if (countdown == 0) {

        $('.getcode').css({'background': '#e53232', 'color': '#fff'});
        $('.getcode').html('获取验证码');
        val.removeAttribute("disabled");
        countdown = 60;
        return;
    } else {
        val.setAttribute("disabled", true);
        val.value = "重新发送(" + countdown + ")";
        countdown--;
    }
    if (countdown == 59) {

        var data = JSON.stringify({mobile: mobileno, page: code_type});

        console.log(data);

        $.ajax({
            type: 'POST',
            url: url,
            headers: {'Content-Type': 'application/json', 'app_type': 'web'},
            data: JSON.stringify({mobile: mobileno, page: code_type}),
            success: function (res) {
                console.log(res);

                if (res.status == 'success') {

                    $('.getcode').css({'background': '#eee', 'color': '#555'});

                    if (res.data.hasOwnProperty('v_code')) {
                        layer.alert(res.data.v_code, {icon: 6});
                        $("#code").val(res.data.v_code);
                        return false;
                    } else {
                        layer.alert(res.msg, {icon: 6});
                        return false;
                    }
                } else {
                    val.removeAttribute("disabled");
                    val.value = "获取验证码";
                    countdown = 0;
                    layer.alert(res.msg, {icon: 2});
                    return false;
                }
            }
        })
    }
    setTimeout(function () {

        $('.getcode').html(countdown + 's后重试');
        sendMsg(val)
    }, 1000);
}

/*手机号判断*/
$('#mobileno').blur(function () {
    userTel()
});

function userTel() {
    var regExp = /(^1[3|5|7|8|9|][\d]{9}$)|(^14[7]\d{8}$)/;
    if ($("#mobileno").val() == "") {
        $('#checkExistPhone').html('<strong>×</strong> 手机号不能为空');
        return false;
    }
    else if (!regExp.test($("#mobileno").val())) {
        $('#checkExistPhone').html('<strong>×</strong> 手机号格式错误');
        return false;
    }
    else {
        $('#checkExistPhone').html('');
        return true;
    }
}

/*密码判断*/
$('#password').blur(function () {
    userPwd()
});

function userPwd() {
    var regExp = /^[a-zA-Z][a-zA-Z0-9~!@#$%^&*]{5,17}/;
    if ($("#password").val() == "") {
        $('#checkExistPwd').html('<strong>×</strong> 密码不能为空');
        return false;
    }
    else if (!regExp.test($("#password").val())) {
        $('#checkExistPwd').html('<strong>×</strong> 字母开头的6到16位字符、数字及特殊符号');
        return false;
    }
    else {
        $('#checkExistPwd').html('');
        return true;
    }
}

/*验证码判断*/
function userCode() {
    if ($("#code").val() == "") {
        $('#checkExistCode').html('<strong>×</strong> 验证码不能为空');
        return false;
    }
    else {
        return true;
    }
}
