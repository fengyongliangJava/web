/**
 * Created by xl on 2017/7/19.
 */
    //极光注册信息
var j_sername,
    j_password,
    j_nickname = '';

var socket;
$(function () {
    //移动客户端
    $('.drop-top').hover(function () {
        $(this).find('span').css('color', '#d2d2d2');
        $('.downstyle').css('display', 'block');
    }, function () {
        $(this).find('span').css('color', '#999');
        $('.downstyle').css('display', 'none');
    });

    //右侧浮动窗口
    $('.qq-contact').hover(function () {
        $(this).find('img').attr('src', '/static/img/right-qq-2.png');
        $(this).find('img').css('margin-left', "-50px");
    }, function () {
        $(this).find('img').attr('src', '/static/img/right-qq-1.png');
    });
    $('.top-scroll').hover(function () {
        $(this).find('img').attr('src', '/static/img/right-top-2.png');
        $(this).find('img').css('margin-left', "-50px");
    }, function () {
        $(this).find('img').attr('src', '/static/img/right-top-1.png');
    });
    $('.wechat').hover(function () {
        $(this).find('img').attr('src', '/static/img/wechat-2.png');
        $(this).find('img').css('margin-left', "-150px");
    }, function () {
        $(this).find('img').attr('src', '/static/img/wechat-1.png');
    });

    //弹框的关闭按钮
    $('.modal-modify-pwd-1 span img').hover(function () {
        $(this).attr('src', '/static/img/modal-close-1.png');
    }, function () {
        $(this).attr('src', '/static/img/modal-close.png');
    });

    $('#logout').css('display', 'none');
    $('#sign_up').css('display', 'none');
    $('#sign_in').css('display', 'none');
    $('#user-center').css('display', 'none');
    if (localStorage.getItem('user_id')) {
        $('#logout').css('display', 'block');
        $('#user-center').css('display', 'block');
        if (localStorage.getItem('is_enterprise') === '1') {
            $('#is_enterprise').css('display', 'block');
        } else {
            $('#is_enterprise').css('display', 'none');
        }

        getUnreadNoti();
        // 用于连接socket
        // 命名空间, 前后端约定，用于发送或者接收同一个namespace下的消息
        // var namespace = '/youmeiwang';  // 线上环境#}
        // socket = io.connect('https://im.360youmei.com:3600' + namespace);  // 线上环境
        // // var namespace = '/youmeiwangdev';  // 测试环境
        // // socket = io.connect('https://im.360youmei.cn:3600' + namespace);
        // var namespace = '/youmeiwangdev';  //开发环境#}
        // // socket = io.connect('http://192.168.1.100:3611' + namespace);  //开发环境
        // // 连接成功，告诉服务器
        // socket.on('connect', function() {
        //     console.log('connnect success');
        //     socket.emit('connected', {data: 'I\'m connected!', 'info': {'room': '200', 'user': 'user'}});
        // });
        //
        // // 断开了连接，告诉服务器
        // socket.on('disconnect', function() {
        //     console.log('disconnected');
        //     socket.emit('disconnected', {data: 'I\'m disconnected!'});
        // });
        //
        // // 事件为orders的消息.
        // socket.on('message_'+localStorage.getItem('user_id'), function(msg, func) {
        //     console.log('order message');
        //     $('.nopush').css('display','none');
        //     $('.push').css('display','block');
        // });
        jQuery.getScript("//cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.6/socket.io.min.js",
            function () {
                // var namespace = '/youmeiwangdev';  //开发环境#}
                var namespace = '/youmeiwang';  // 线上环境#}
                // socket = io.connect('http://192.168.1.100:3610' + namespace);  //开发环境
                socket = io.connect('https://im.360youmei.com:3600' + namespace);
                console.log(socket);
                // 连接成功，告诉服务器
                socket.on('connect', function () {
                    console.log('connnect success');
                    socket.emit('connected', {data: 'I\'m connected!', 'info': {'room': '200', 'user': 'user'}});
                });

                // 断开了连接，告诉服务器
                socket.on('disconnect', function () {
                    console.log('disconnected');
                    socket.emit('disconnected', {data: 'I\'m disconnected!'});
                });

                // 事件为orders的消息.
                socket.on('message_' + localStorage.getItem('user_id'), function (msg, func) {
                    console.log('order message');
                    $('.nopush').css('display', 'none');
                    $('.push').css('display', 'block');
                });
            });

    } else {
        $('#sign_up').css('display', 'block');
        $('#sign_in').css('display', 'block');
    }

    $('#top-nickname').text(localStorage.getItem('top_user_name'));

    showImg();

});

//消息的显示和隐藏
function showImg() {
    if (imgId.style.visibility == "visible")
        imgId.style.visibility = "hidden";
    else
        imgId.style.visibility = "visible";
    setTimeout('showImg()', 500);
}

//是否有未读消息
function getUnreadNoti() {
    ajaxget('/v1/notifications/unread', function (res) {
        console.dir(res);
        if (res.resid == 200 && res.total > 0) {
            $('.nopush').css('display', 'none');
            $('.push').css('display', 'block');
        } else {
            $('.nopush').css('display', 'block');
            $('.push').css('display', 'none');
        }

    });
}

//头部的搜索
function searchSpotGoods() {
    var key = $('#key').val();

    if (!key) {
        layer.alert('请输入搜索内容', {icon: 6});

        return false;
    }

    window.location.href = '/goods-spot?keys=' + key;
}

//退出登录
function logout() {
    layer.confirm('您确定要退出吗？', function () {
        ajaxpost('/v1/sign-out', '', function (res) {

            if (res.status == 'success') {
                localStorage.clear();
                window.location.href = '/';
            }
        })
    });
}

//输入框内容为正整数或浮点数
function checkNum(oInput) {
    if ('' != oInput.value.replace(/\d{1,}\.{0,1}\d{0,}/, '')) {
        oInput.value = oInput.value.match(/\d{1,}\.{0,1}\d{0,}/) == null ? '' : oInput.value.match(/\d{1,}\.{0,1}\d{0,}/);
    }
}

//输入框内容为正整数或两位浮点数
function checkNum_2(oInput) {
    if(/^[0-9]+\d*(\.\d{0,2})?$|^0?\.\d{0,2}$/.test(oInput.value)){

    }else{
        layer.alert('请输入精度为两位小数以内的数！')
        oInput.value = '';
    }
}

//输入框内容为正整数
function checkInt(oInput) {
    if ('' != oInput.value.replace(/^[1-9]\d*|[1-9][0-9]\d*$/, '')) {
        oInput.value = oInput.value.match(/^[1-9]\d*|[1-9][0-9]\d*$/) == null ? '' : oInput.value.match(/^[1-9]\d*|[1-9][0-9]\d*$/);
    }
}
//检查英文及其数字
function checkNE(oInput) {
   oInput=value.replace(/[^\w\.\/]/ig,'');
}

//检查网址
function checkH(oInput) {
   oInput=value.replace(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,'');
}

//输入框为正数
function checkZero(oInput) {
    if (parseFloat(oInput.value) == 0) {
        oInput.value = '';
    } else {
        oInput.value = oInput.value;
    }
}

//查看缩略图
function lookImage() {
    var examining_report = $('#examining_report').val();

    if (!examining_report) {
        layer.alert('请先上传图片', {icon: 6});

        return false;
    }

    if (examining_report.indexOf('/static/uploads/goods_licence/') != -1) {
        window.open(examining_report);
    } else {
        window.open('/static/uploads/goods_licence/' + examining_report);
    }

}

//查看缩略图
function lookImageCoal(id) {
    var examining_report = $('#' + id).val();
    if (examining_report.indexOf('/static/uploads/goods_showcase/') != -1) {
        window.open(examining_report);
    } else {
        window.open('/static/uploads/goods_showcase/' + examining_report);
    }

}

//身份禁用
function warnIdentify() {
    $('#myWarnIndenty').modal('hide');
}

//提示信息
function setQtip(id, text) {
    $('#' + id).qtip({
        content: {
            text: text
        },
        position: {
            my: 'center left',
            at: 'center right'
        },
        show: {
            event: false,
            ready: true
        },
        hide: {
            event: 'click mouseleave'
        }

    });
}

//判断是否登录
function checkLogin(url) {
    if (localStorage.getItem('user_id')) {
        window.location.href = url;
    } else {
        layer.alert('请先登录', {icon: 6}, function () {
            window.location.href = '/auth/sign-in';
        });
    }
}


//点击图标
function hiddenNoty() {
    ajaxget('/v1/notifications/unread/unshow', function (res) {
        console.dir(res);
        if (res.resid == 200) {
            window.location.href = res.data;
        } else {
            layer.alert(res.msg, {icon: 2});
        }
    })
}

//是否有未读消息
function getUnreadNoti() {
    ajaxget('/v1/notifications/unread', function (res) {
        console.dir(res);
        if (res.resid === 200 && res.data > 0) {
            $('.nopush').css('display', 'none');
            $('.push').css('display', 'block');
        } else {
            $('.nopush').css('display', 'block');
            $('.push').css('display', 'none');
        }

    });
}

//获取开户银行
function getBank(id) {
    if (id == 'ERCB') {
        return '鄂尔多斯农村商业银行';
    }
    else if (id == 'CMB') {
        return '招商银行';
    }
    else if (id == 'PSBC') {
        return '中国邮政储蓄银行';
    }
    else if (id == 'BOC') {
        return '中国银行';
    }
    else if (id == 'CNCB') {
        return '中信银行';
    }
    else if (id == 'ICBC') {
        return '中国工商银行';
    } else if (id == 'CEB') {
        return '中国光大银行';
    } else if (id == 'CCB') {
        return '中国建设银行';
    } else if (id == 'ABC') {
        return '中国农业银行';
    } else if (id == 'UPOP') {
        return '中国银联';
    } else if (id == 'BOCOM') {
        return '交通银行';
    } else if (id == 'HXB') {
        return '华夏银行';
    } else if (id == 'CIB') {
        return '兴业银行';
    } else if (id == 'ERDSBC') {
        return '鄂尔多斯银行';
    } else if (id == 'MGBC') {
        return '内蒙古银行';
    }
    else if (id == 'BSBC') {
        return '包商银行';
    }
    else if (id == 'NMNX') {
        return '内蒙古自治区农村信用社联合社';
    } else if (id == 'CMBC') {
        return '中国民生银行';
    } else if (id == 'SPDB') {
        return '上海浦东发展银行';
    }else if (id == 'BCCB') {
        return '北京商业银行';
    }
}


//在线联系
function connectAdmin(id) {
    window.open('/im/index?user_id=' + id);
}

var chatToken = '';
var chatKey = $('#chatKey').val();

function check_un_read() {
    var url = window.location.pathname;
    if (url !== "/im/index" && chatKey) {
        getTokenUnRead()
    }
}

var getTokenUnRead = function () {
    var url = '/v1/chat/token';
    ajaxpost(url, {}, function (res) {
        chatToken = res.token;
        sdkInitUnRead();
    })
};

var sdkInitUnRead = function (params, callbacks) {
    var appKey = chatKey;
    var token = chatToken;
    var navi = 'private';

    if (navi !== "") {
        //私有云
        var config = {
            navi: navi
        };
        console.log("私有云");
        console.log(params);
        RongIMLib.RongIMClient.init(appKey, null, config);
    } else {
        //公有云
        console.log("公有云");
        console.log(params);
        RongIMLib.RongIMClient.init(appKey);
    }

    var instance = RongIMClient.getInstance();

    // 连接状态监听器
    RongIMClient.setConnectionStatusListener({
        onChanged: function (status) {
            console.log(status);
            var connectDom = $('.rcs-connect-status')[0];
            if (connectDom) {
                connectDom.style.display = 'block';
            }
            switch (status) {
                case RongIMLib.ConnectionStatus.CONNECTED:
                    if (connectDom) {
                        connectDom.style.display = 'none';
                    }
                    callbacks.getInstance && callbacks.getInstance(instance);
                    break;
                case RongIMLib.ConnectionStatus.CONNECTING:
                    console.log('正在链接');
                    break;
                case RongIMLib.ConnectionStatus.DISCONNECTED:
                    console.log('断开连接');
                    break;
                case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                    console.log('其他设备登录');
                    break;
                case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
                    console.log('域名不正确');
                    break;
                case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                    console.log('网络不可用');
                    break;
                case RongIMLib.ConnectionStatus.DISCONNECTED:
                    console.log('断开连接');
                    break;
                case 4:
                    console.log('token无效');
                    break;
                default:
                    console.log('未知错误');
                    break;
            }
        }
    });

    //此接口必须在init()方法之后，连接融云服务器 connect 之前调用。
    RongIMClient.getInstance().hasRemoteUnreadMessages(token, {
        onSuccess: function (hasMessage) {
            if (hasMessage) {
                // 有未读的消息
                console.log('有未读消息');
                $('.nopush').css('display', 'none');
                $('.push').css('display', 'block');
                $('.chat-remind').css('display', 'block');
            } else {
                // 没有未读的消息
                console.log('没有未读消息')
            }
        }, onError: function (err) {
            // 错误处理...
            console.log('未知错误');
        }
    });

};

// 跟客服聊天
function addKefu() {
    //判断是否是微信浏览器
    var useragent = navigator.userAgent,
        is_weichatBrowser;
    if (useragent.match(/MicroMessenger/i) == 'MicroMessenger') {
        is_weichatBrowser = true;
    } else {
        is_weichatBrowser = false;
    }

    if (is_weichatBrowser) {
        window.location.href = '/im/index';
    } else {
        window.open('/im/index', '_blank');
    }

    localStorage.setItem('target_user','admin');
    localStorage.setItem('target_name','客服');
}

function cancelModal() {
    $('#kefuModal').modal('hide');
}


check_un_read();


//判断是否是微信浏览器
var useragent = navigator.userAgent,
    is_weichatBrowser;

function weichatBrowser() {
    if (useragent.match(/MicroMessenger/i) == 'MicroMessenger') {
        is_weichatBrowser = true;
    } else {
        is_weichatBrowser = false;
    }
}



