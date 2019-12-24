/**
 * Created by xl on 2017/3/27.
 */
//post请求
function ajaxpost(url, data, callback) {
    $.ajax({
        type: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        data: JSON.stringify(data),
        success: callback,
        complete: function (res) {
            console.dir(res.responseJSON);
            if (res.responseJSON.resid === 20004) {
                var url = window.location.href;
                url = url.substring(url.indexOf('\/') + 2, url.length);
                url = url.substring(url.indexOf('\/') + 1, url.length);
                layer.alert('请登录后再操作', {icon: 6}, function () {
                    window.open('/auth/sign-in?next=' + url);
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20400) {//用户竞价资质审核未通过
                layer.alert('企业资料备案审核未通过,点击查看详情！', {icon: 5}, function () {
                    window.open('/auction-examine/company-info-add?id_no=20400');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20401) {//	用户竞价资质审核未填写数据
                layer.alert('您的资料未上传！请上传企业资料备案！', {icon: 5}, function () {
                    window.open('/auction-examine/agreement');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20402) {//	用户竞价资质审核正在审核
                layer.alert('企业资料备案正在审核中！', {icon: 5}, function () {
                    window.open('/auction-examine/company-info-add?id_no=20402');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20410) {//	用户保证金审核未通过
                layer.alert('用户保证金审核未通过,请前往修改！', {icon: 5}, function () {
                    window.open('/auction-examine/ensure-upload?order_num=' + res.responseJSON.data + '&id_no=20410');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20411) {//	用户保证金审核未添加数据
                layer.alert('您的保证金凭证未上传！请上传保证金凭证！', {icon: 5}, function () {
                    window.open('/auction-examine/ensure-upload?order_num=' + res.responseJSON.data + '&id_no=20411');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20412) {//	用户保证金正在审核
                layer.alert('保证金凭证正在审核中！', {icon: 5}, function () {
                    window.open('/auction-examine/ensure-upload?order_num=' + res.responseJSON.data + '&id_no=20412');
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20413) {//	用户保证金已退回
                layer.alert('保证金已退回！', {icon: 5}, function () {
                    layer.closeAll();
                });
            } else if (res.responseJSON.resid === 20420) {//验证码错误
                layer.alert('验证码错误', {icon: 5}, function () {
                     layer.closeAll();
                });
            } else if (res.responseJSON.status != 'success') {
                layer.alert(res.responseJSON.msg, {icon: 2});
            }
            // console.clear();
        },
        error: function (err) {
            console.dir(err);
        }
    })
}


//get请求
function ajaxget(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        cache: false,
        headers: {
            'Content-Type': 'application/json',
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        beforeSend: function () {
            $('.myloading').css('display', 'block');
        },
        success: callback,
        complete: function (res) {
            console.dir(res.responseJSON);
            $('.myloading').css('display', 'none');

            if (res.responseJSON.resid == 20004) {
                localStorage.clear();
                window.location.href = '/auth/sign-in';
            }
        },
        error: function (err) {
            console.dir(err);
        }
    })
}


//put请求
function ajaxput(url, data, callback) {
    $.ajax({
        type: 'PUT',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        data: JSON.stringify(data),
        success: callback,
        complete: function (res) {
            console.dir(res.responseJSON);

            if (res.responseJSON.resid == 20004) {
                localStorage.clear();
                window.location.href = '/auth/sign-in';
            }
            else if (res.responseJSON.status != 'success') {
                layer.alert(res.responseJSON.msg, {icon: 2});
            }

            console.clear();
        },
        error: function (err) {
            console.dir(err);
        }
    })
}


//DELETE请求
function ajaxdelete(url, data, callback) {
    $.ajax({
        type: 'DELETE',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        data: JSON.stringify(data),
        success: callback,
        complete: function (res) {
            console.dir(res.responseJSON);

            if (res.responseJSON.resid == 20004) {
                localStorage.clear();
                window.location.href = '/auth/sign-in';
            }
            else if (res.responseJSON.status != 'success') {
                layer.alert(res.responseJSON.msg, {icon: 2});
            }
            console.clear();
        },
        error: function (err) {
            console.dir(err);
        }
    })
}


//post请求
function ajaxpost_img(url, data, callback) {
    $.ajax({
        type: 'POST',
        url: url,
        headers: {
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        data: data,
        processData: false, // 必须false才会自动加上正确的Content-Type
        contentType: false,// 必须false才会避开jQuery对 formdata 的默认处理
        success: callback,
        complete: function (res) {
            console.log(data);
            console.dir(res.responseJSON);
            if (res.responseJSON.resid == 20004) {
                var url = window.location.href;
                url = url.substring(url.indexOf('\/') + 2, url.length);
                url = url.substring(url.indexOf('\/') + 1, url.length);
                layer.alert('请登录后再操作', {icon: 6}, function () {
                    localStorage.clear();
                    window.location.href = '/auth/sign-in?next=' + url;
                });
            }
            else if (res.responseJSON.status != 'success') {
                layer.alert(res.responseJSON.msg, {icon: 2});
            }

            // console.clear();
        },
        error: function (err) {
            console.dir(err);
        }
    })
}

//get请求不跳转登录
function ajaxget_1(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        cache: false,
        headers: {
            'Content-Type': 'application/json',
            'app_type': 'web',
            'auth-token': decodeURIComponent(localStorage.getItem('auth-token')),
            'current-user-id': decodeURIComponent(localStorage.getItem('user_id'))
        },
        beforeSend: function () {
            $('.myloading').css('display', 'block');
        },
        success: callback,
        complete: function (res) {
            console.dir(res.responseJSON);
            $('.myloading').css('display', 'none');

        },
        error: function (err) {
            console.dir(err);
        }
    })
}