/**
 * Created by ZD on 2018/12/3.
 */

    var across_user = 'zdth';
    var across_appkey = 'dc1c38bf064227b8df00fb45';
	var target_nickname='test001';
    var msg_ids = [];

    var timestamp = (new Date()).getTime()+'';

   //页面初始化以后拿到所有聊过天的会话key集合
    var all_keys = [];

     //消息未读数
    var unread_count=0;

    var signature = $.md5("appkey="+across_appkey+"&timestamp="+timestamp+"&random_str=022cd9fd995849b&key=5da3a578bf3e946c080fbf5e");
    console.log($.md5(timestamp));
    window.JIM = new JMessage({
        debug : true
    });

	 JIM.onDisconnect(function(){
	  console.log("【disconnect】");
	  layer.alert('异常断线,请刷新页面重新连接！')
	 }); //异常断线监听

    function appendToDashboard(text) {
        $('#dashboard').append('<p style="margin-left: 16px">' + text + '</p>')

    }

    //用户上传头像
    function updateUserPic() {
        JIM.updateSelfAvatar({'avatar' : getFile()}).onSuccess(function(data) {
            console.log(data);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }



    function getFile() {
        var fd = new FormData();
        var file = document.getElementById('file_box');
        if(!file.files[0]) {
		    appendToDashboard('error:' + '获取文件失败');
            throw new Error('获取文件失败');
        }
        fd.append(file.files[0].name, file.files[0]);
        return fd;
    }

     //粘贴获取图片2018.12.12 23：32
    function getFile_1() {
        var fd = new FormData();
        if(!_file) {
            appendToDashboard('error:' + '获取文件失败');
            throw new Error('获取文件失败');
        }
        fd.append(_file.name, _file);
        return fd;
    }

    //获取文件
    function getFile_2() {
        var fd = new FormData();
        var file = document.getElementById('file_box_2');
        if(!file.files[0]) {
		    appendToDashboard('error:' + '获取文件失败');
            throw new Error('获取文件失败');
        }
        fd.append(file.files[0].name, file.files[0]);
        return fd;
    }

      function init() {


		JIM.init({
                    "appkey":"dc1c38bf064227b8df00fb45",
                    "random_str":  "022cd9fd995849b",
                    "signature":  signature,
                    "timestamp":  timestamp,
                    "flag": 1

                }).onSuccess(function(data) {
                console.log('success:' + JSON.stringify(data));
                login_J();
            }).onFail(function(data) {
               console.log('error:' + JSON.stringify(data))
           });
    }

    //用户登陆时用来初始化极光并注册账户
    function init_1() {
       console.log('注册第0步');

		JIM.init({
                    "appkey":"dc1c38bf064227b8df00fb45",
                    "random_str":  "022cd9fd995849b",
                    "signature":  signature,
                    "timestamp":  timestamp,
                    "flag": 1

                }).onSuccess(function(data) {
                    console.log('注册第一步');
                console.log('success:' + JSON.stringify(data));

            }).onFail(function(data) {
               console.log('error:' + JSON.stringify(data))

           });
    }

	// init();

    function loginOut(){
	     JIM.loginOut();
	}
	function register(){

		  JIM.register({
            'username' : j_username,
			'password': j_password,
			'nickname' : j_nickname
        }).onSuccess(function(data) {
             console.log('注册第2步');
          }).onFail(function(data) {
               console.log('注册第4步');
        });
	}

	 function isConnect(){
	   console.log('isConnect:'+JIM.isConnect());
	  appendToDashboard('isConnect : ' +JIM.isConnect());
	}

	function isInit(){
	  console.log('isInit:'+JIM.isInit());
	  appendToDashboard('isInit : ' +JIM.isInit());
	}

     function isLogin(){
         if(!JIM.isLogin()){
	         layer.alert('异常断线,请刷新页面重新连接！')
         }
	    console.log('isLogin:'+JIM.isLogin());
	}



    function login_J() {
         var j_username='0000'+localStorage.getItem('user_id');
         //var j_username='test001';

        JIM.login({
            'username' : j_username,
			'password': j_username
        }).onSuccess(function(data) {
            console.log('登陆成功')
            //更新用户昵称
            updateUserInfo()
            getConversation();

            console.log('success:' + JSON.stringify(data));
            appendToDashboard(JSON.stringify(data));

		   JIM.onMsgReceive(function(data) {
               console.log('消息实时监听')
               console.log(data)

		       // 收到消息时，判断会话列表中是否含有该用户，如果没有，添加该用户并且更新会话列表
               if($.inArray(data.messages[0].from_username, key_arr) === -1 && $.inArray(data.messages[0].from_username, all_keys) !== -1){
                   console.log($.inArray(data.messages[0].key+'', key_arr));
                   console.log('创建新用户01');
                   addKey(data.messages[0].from_username);
               }else if($.inArray(data.messages[0].from_username, all_keys) === -1){
                   console.log($.inArray(data.messages[0].from_username, key_arr));
                   console.log('创建新用户02')
                   var msg_length = message_data.length;

                   var msg_temp = {
                       from_appkey: "dc1c38bf064227b8df00fb45",
                       from_username: "",
                       key: "",
                       msg_type: 3,
                       msgs:  [],
                       receipt_msgs:  [],
                       unread_msg_count: ''
                   };
                   message_data[msg_length] = msg_temp;
                   message_data[msg_length].key = data.messages[0].key+'';
                   message_data[msg_length].from_username = data.messages[0].from_username;
                   message_data[msg_length].msgs = [];
                   message_data[msg_length].msgs[0] = data.messages[0];
                   addKey(data.messages[0].from_username);
               }

		        // 收到消息时，判断是哪个用户，将消息添加到对话内容中去
                for(var i=0;i<message_data.length;i++){
                    if(message_data[i].key == data.messages[0].key){
                        message_data[i].msgs.push(data.messages[0])
                         // 不是当前会话收到消息时，添加未读消息标识
                        if(message_data[i].from_username !== chart_name){
                             $('#'+ message_data[i].from_username).find('.J-notification').removeClass('hide');
                             //消息闪烁提示
                             showImg();
                             $('.nopush').css('display','none');
                             $('.push').css('display','block');
                        }

                    }
                }
                 console.log(message_data);
               // 只有当前会话收到消息时，立马更新会话数据
               console.log(8888888888888888)
               console.log(chart_name)
                if(chart_name == data.messages[0].from_username){
                    if(data.messages[0].content.msg_type === 'image' || data.messages[0].content.msg_type === 'file'){
                        msgCreat(data.messages[0]);
                        getResource(data.messages[0].content.msg_body.media_id,data.messages[0].msg_id,data.messages[0].content.msg_type);
                    }else{
                         msgCreat(data.messages[0]);
                    }

                    //单条消息已读回执，并重置未读消息数
                    msg_ids.push(data.messages[0].msg_id);
                    addSingleReceiptReport();
                    resetUnreadCount()
                }
                data = JSON.stringify(data);
                console.log('1msg_receive:' + data);
            });


            JIM.onEventNotification(function(data) {
                console.log('event_receive: ' + JSON.stringify(data));
            });

			JIM.onSyncConversation(function(data) { //离线消息同步监听
                //console.log( data);
                message_data = data;
            });

           JIM.onUserInfUpdate(function(data) {
                console.log('onUserInfUpdate : ' + JSON.stringify(data));
            });

	     JIM.onSyncEvent(function(data) {
                console.log('onSyncEvent : ' + JSON.stringify(data));
            });

		JIM.onMsgReceiptChange(function(data){
            console.log(1111111222)
            console.log(data);

            //将监听到的已读消息id添加到对应的集合中
            for(var i=0;i<msgReceipt.length;i++){
                if(msgReceipt[i].username == data.username){
                    msgReceipt[i].receipt_msgs.push(data.receipt_msgs[0])
                }
            }
            //监听到已读消息以后，修改未读状态
            if(chart_name){
                 msgReceipt_arr_msgid.push(data.receipt_msgs[0].msg_id+'');
                 console.log('哈哈')
                 $('.'+ data.receipt_msgs[0].msg_id).css('display','inline-block').next().css('display','none')
            }

        });

        JIM.onSyncMsgReceipt(function(data){
            msgReceipt = data;
            console.log(222223333)
            console.log(data);
        });

			JIM.onMutiUnreadMsgUpdate(function(data){
			    console.log('onConversationUpdate : ' + JSON.stringify(data));
			});

		    JIM.onTransMsgRec(function(data){
			    console.log('onTransMsgRec : ' + JSON.stringify(data));
			});

			JIM.onRoomMsg (function(data){
			    console.log('onRoomMsg  : ' + JSON.stringify(data));
			});

        }).onFail(function(data) {
             console.log('error:' + JSON.stringify(data));
        }).onTimeout(function(data) {
            console.log('timeout:' + JSON.stringify(data));
        });
    }


	function resetUnreadCount(){
	   JIM.resetUnreadCount({'username':across_user});
	}

    function getSelfInfo() {
        JIM.getUserInfo({
            'username' : '000013'
        }).onSuccess(function(data) {
            console.log(data);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });

    }

	function getResource(media_id,id,_type,username){
	  	// var id ='qiniu/file/j/348F9C1DAD3A98849BEADE006B70CEF8.txt';
	    JIM.getResource({'media_id' : media_id})
            .onSuccess(function(data){
                if(_type == 'image'){
                     $('#'+ id).attr("src", data.url);
                }else if(_type == 'file'){
                     $('#'+ id).attr("href", data.url);
                }else if(_type == 'avatar'){
                    avatar_arr.push({username:username,'data_url':data.url});
                    if(data.url){
                          $('#'+ id).find('.J-img').attr("src", data.url);
                    }
                }

             }).onFail(function(data){
                   console.log('error:' + JSON.stringify(data));

             });

	}

	//创建新会话
   function newChat(){
       console.log('创建新会话')
       console.log(creat_user)
       JIM.sendSingleMsg({
           'target_username' : creat_user,
           'appkey' :  across_appkey,
           'content' : '你好啊！',
           'no_offline' : false,
           'no_notification' : true,
           //'custom_notification':{'enabled':true,'title':'title','alert':'alert','at_prefix':'atprefix'}
           need_receipt:true
       }).onSuccess(function(data,msg) {
               var msg_length = message_data.length;
               var msg_temp = {
                   from_appkey: "dc1c38bf064227b8df00fb45",
                   from_username: "",
                   key: "",
                   msg_type: 3,
                   msgs:  [],
                   receipt_msgs:  [],
                   unread_msg_count: ''
               };
               message_data[msg_length] = msg_temp;
               message_data[msg_length].key = data.key+'';
               message_data[msg_length].from_username = data.target_username;
               message_data[msg_length].msgs = [];
              // message_data[msg_length].msgs[0] = data.messages[0];
               console.log(111111111111111);
               console.log(message_data);
               addKey(data.from_username);
       }).onFail(function(data) {
           console.log('error:' + JSON.stringify(data));
       });
   }

    function sendSingleMsg() {
        isLogin();
	    var send_message = $('#send_message').text().replace(/(^\s*)|(\s*$)/g, "")+' ';
	    //限制发送文本消息不为空
	    if(send_message == ' '){
            layer.alert('请输入发送内容!');
            return false;
        }
        JIM.sendSingleMsg({
            'target_username' : across_user,
			'appkey' :  across_appkey,
            'content' : send_message,
			'no_offline' : false,
			'no_notification' : true,
			//'custom_notification':{'enabled':true,'title':'title','alert':'alert','at_prefix':'atprefix'}
			need_receipt:true
        }).onSuccess(function(data,msg) {
            console.log(data);
            // 发送消息时，判断当前会话列表中是否含有该用户，如果没有，添加该用户并且更新会话列表
            if($.inArray(data.target_username, key_arr) === -1 && $.inArray(data.target_username, all_keys) !== -1){
                console.log($.inArray(data.key+'', key_arr));
                console.log('创建新用户01');
                addKey(data.target_username);
                for(var i=0;i<message_data.length;i++){
                    if(message_data[i].key == data.key){
                        message_data[i].msgs.push(msg)
                    }
                }
            }else if($.inArray(data.target_username, all_keys) === -1){ // 判断历史会话列表中是否含有该用户，如果没有，创建该用户会话列表并且更新会话列表
                console.log($.inArray(data.target_username, all_keys))
                console.log('创建新用户02')
                var msg_length = message_data.length;

                var msg_temp = {
                    from_appkey: "dc1c38bf064227b8df00fb45",
                    from_username: target_user,
                    key: "",
                    msg_type: 3,
                    msgs:  [],
                    receipt_msgs:  [],
                    unread_msg_count: ''
                };
                message_data[msg_length] = msg_temp;
                message_data[msg_length].key = data.key+'';
                message_data[msg_length].from_username = data.target_username;
                message_data[msg_length].msgs = [];
                message_data[msg_length].msgs[0] = msg;
                console.log(111111111111111);
                console.log(message_data);
                addKey(data.target_username);
            }else{
                for(var i=0;i<message_data.length;i++){
                    if(message_data[i].key == data.key){
                        message_data[i].msgs.push(msg)
                    }
                }
            }

            // //发送消息时，将消息插入聊天窗口
            msgCreat(msg);

			$('#send_message').text('');
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }



    function sendSinglePic() {
        isLogin();
        JIM.sendSinglePic({
            'target_username' : across_user,
			'target_nickname' : target_nickname,
			'appkey' : across_appkey,
            'image' : getFile(),
			'need_receipt':true
        }).onSuccess(function(data,msg) {
             for(var i=0;i<message_data.length;i++){
                if(message_data[i].key == data.key){
                    message_data[i].msgs.push(msg)
                }
            }
            msgCreat(msg);
            getResource(msg.content.msg_body.media_id,msg.msg_id,msg.content.msg_type);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }

    //粘贴发送图片2018.12.12 23：32
    function sendSinglePic_1() {
        JIM.sendSinglePic({
            'target_username' : across_user,
            'target_nickname' : target_nickname,
            'appkey' : across_appkey,
            'image' : getFile_1(),
            'need_receipt':true
        }).onSuccess(function(data,msg) {

            console.log(data)
            console.log(msg)
            for(var i=0;i<message_data.length;i++){
                if(message_data[i].key == data.key){
                    message_data[i].msgs.push(msg)
                }
            }
            msgCreat(msg);
            getResource(msg.content.msg_body.media_id,msg.msg_id,msg.content.msg_type);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }


    function sendSingleFile() {
        isLogin();
        JIM.sendSingleFile({
            'file' : getFile_2(),
			'target_username' : across_user,
			'target_nickname' : target_nickname,
			'appkey' : across_appkey,
			'extras': {'key':'val','key2':'val2'},
			'need_receipt':true
        }).onSuccess(function(data,msg) {
            for(var i=0;i<message_data.length;i++){
                if(message_data[i].key == data.key){
                    message_data[i].msgs.push(msg)
                }
            }
            msgCreat(msg);
            getResource(msg.content.msg_body.media_id,msg.msg_id,msg.content.msg_type);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }

  function getConversation() {
        JIM.getConversation().onSuccess(function(data) {
           console.log(9999)
           console.log(data)

            for(var i=0;i<data.conversations.length;i++){
                all_keys.push(data.conversations[i].username);
                if(data.conversations[i].avatar){
                     getResource(data.conversations[i].avatar,data.conversations[i].name,'avatar',data.conversations[i].username)
                }
            }

            //2018.12.10  23:42修改
            console.log('清空user')

            for(var k=0;k<data.conversations.length;k++){
                if(creat_user === data.conversations[k].username+''){
                    creat_user_key = data.conversations[k].key;
                    if($.inArray(data.conversations[k].key, key_arr) !== -1){
                        unread_count = Number(unread_count) + Number(data.conversations[k].unread_msg_count);
                    }
                }
            }

            if(unread_count > 0){
                 showImg();
                 $('.nopush').css('display','none');
                 $('.push').css('display','block');
            }
             // console.log(key_arr)
             // console.log(creat_user_key)

            // //2018.12.10  23:42修改
            // if($.inArray(creat_user_key, key_arr) === -1 && $.inArray(creat_user_key, all_keys) !== -1){
            //     console.log('6666666');
            //     addKey_1(target_user);
            //     key_arr.push(creat_user_key+'')
            // }else if($.inArray(creat_user_key, all_keys) === -1 && creat_user !== ''){
            //     console.log('当前用户不存在');
            //     newChat();
            // }

            $.views.helpers({
                 is_show: function(val){
                     if($.inArray(val, key_arr) === -1){
                         return 'user-hide'
                     }
                 },
                is_show_1: function(val){
                     if(val == 0){
                         return 'hide'
                     }
                 },
                 hello_avatar: function(val){
                     for (var i = 0; i < avatar_arr.length; i++) {
                         if (val === avatar_arr[i].username) {
                             return avatar_arr[i].data_url
                         }
                     }
                 }
             });
            // 如果历史会话列表中有该会话对象，将其添加到列表中
            if ($.inArray(target_user, all_keys) !== -1) {
                addKey_1(target_user);
            }
             var temp= $.templates('#chatList');
             temp.link('#chat-list',{msg_user:data.conversations});

            //打开新的会话窗口
            if (target_user && $.inArray(target_user, all_keys) === -1) {
                across_user = target_user;
                $('#chat-list').prepend(list_temp);
                $('.J-kefuChat-none').css('display', 'none');
                $('.J-kefuChat-in').css('display', 'block');
                $('#' + target_user).addClass('list_bg')
            } else if ($.inArray(target_user, all_keys) !== -1) {
                $('.J-kefuChat-none').css('display', 'none');
                $('.J-kefuChat-in').css('display', 'block');
                $('#' + target_user).addClass('list_bg');
                getMessage(this,target_user,target_user)
            }

        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }



    function addSingleReceiptReport(){
	      JIM.addSingleReceiptReport({'username':across_user,'msg_ids':msg_ids}).onSuccess(function(data,data2){
		   });
	}

	//更新用户信息
	function updateUserInfo() {
        var nickname = localStorage.getItem('company_name');
        JIM.updateSelfInfo({'nickname':nickname,'address':'','extras':{'k':'v'}}).onSuccess(function(data) {
            console.log(data);
        }).onFail(function(data) {
            console.log('error:' + JSON.stringify(data));
        });
    }
