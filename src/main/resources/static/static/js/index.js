var supplyData;

$(function () {

    ajaxget('/v1/home',function (res) {
        console.dir(res.data);

        if(res.status=='success'){

             setShare();
            var temp=$.templates('#indexTemp');

            $.views.helpers({
                hello_1: function(surplus_days){
                   if(surplus_days>0){
                       return surplus_days;
                   }else{
                        return 0;
                   }
                },
                hello_2: function(temp){
                    return parseInt(temp);
                },
                hello_3: function(num){
                    var result = [], counter = 0;
                    num = (num || 0).toString().split('');
                    for (var i = num.length - 1; i >= 0; i--) {
                        counter++;
                        result.unshift(num[i]);
                        if (!(counter % 3) && i != 0) {
                            result.unshift(',');
                        }
                    }
                    return result.join('');

                },
                hello_4: function(temp){
                    return temp.substring(0,10);
                },
                hello_5: function(temp){
                    return numFormat(0,temp,0);
                }
            });

            supplyData=res.data.qiugou;
            var type=[];

            var index_type=[];

            for(var m=0;m < type.length;m++){
                if(type.indexOf(type[m]) == m){
                    index_type.push({index_type:type[m]});
                }
            }

            for(p=0;p < index_type.length;p++){
                var exponent=[];
                for(var n=0;n < res.data.zhishu.length;n++){
                    if(index_type[p].index_type==res.data.zhishu[n].index_type){
                        exponent.push(res.data.zhishu[n]);
                    }
                }
                index_type[p].data=chunk(exponent,5);
            }

            console.dir(index_type);

            res.data.exponent=index_type;

            //公告
            res.data.mynotice=chunk(res.data.notice,1);

            //自营
            res.data.supply_good=chunk(res.data.supply_good,8);

            //求车
            res.data.mytruck=chunk(res.data.truck,5);


            //煤矿
            res.data.coal_mine_name=chunk(res.data.coal_mine,5);
            // res.data.spot_goods_1=res.data.coal_mine_name[0];
            // res.data.spot_goods_2=res.data.spot_goods_1[0];

           // 成交信息
            res.data.myOrders=chunk(res.data.orders,5);

            // 日指数
            res.data.ri_zhi=chunk(res.data.ri_zhi_shu,6);

            // 成交信息
            res.data.zhou_zhi=chunk(res.data.zhou_zhi_shu,6);

            //有煤视点
            // res.data.myNews=chunk(res.data.news,3);


            //海运价格
            if(res.data.hangqing.haiyun){
                res.data.haiyun=chunk(res.data.hangqing.haiyun.data,6);
                res.data.hyctime=res.data.hangqing.haiyun.c_time;
            }else{
                res.data.haiyun=[];
                res.data.hyctime='';
            }

            //电厂库存
            if(res.data.hangqing.dianchang){
                res.data.dianchang=chunk(res.data.hangqing.dianchang.data,6);
                res.data.dianchang[0].ctime=res.data.hangqing.dianchang.c_time;
            }else{
                res.data.dianchang=[];
                res.data.dcctime='';
            }

            //港口
            if(res.data.hangqing.gangkou){
                res.data.gangkou=chunk(res.data.hangqing.gangkou.data,6);
                // res.data.gangkou=res.data.hangqing.gangkou.data;
                res.data.gangkou[0].ctime=res.data.hangqing.gangkou.c_time;
            }else{
                res.data.gangkou=[];
                res.data.gkctime='';

            }

            //处理团购进度条的数据

            $.views.helpers({
                hello: function(sold_count, total_count){
                    return (Number(sold_count/total_count)*100).toFixed(2)
                }
            });

            temp.link('#index',{data:res.data});

            // 鼠标悬浮触发现货点击切换事件
             $("#spot_recommend li").mouseenter(function(){
                 $(this).click()
              });

            var url = window.location.href;
            //获取最后一个/
            var index = url .indexOf('=');
            anchors = url .substring(index + 1, url .length);
            if(anchors === 'CCI'){
                 var target_top = $("#CCI").offset().top;
                 //$("html,body").animate({scrollTop: target_top}, 1000);  //带滑动效果的跳转
                 $("html,body").scrollTop(target_top);
            }


            $('.search-index-banner').hover(function () {
                $(this).prev('a').css('background-color','#ffffff');
            },function () {
                $(this).prev('a').css('background-color','#f9f9f9');
            });

            $('.screening-1 ul li a').hover(function () {
                $(this).css('background-color','#ffffff')
            },function () {
                $(this).css('background-color','#f9f9f9');
            });


            $('#myCarousel').carousel();

            //禁止有煤指数自动播放
            $('.myCarousel').carousel({
                interval: false
            });

            //判断是否登录
            $('.logined').css('display','none');
            $('.unlogin').css('display','none');


            if(localStorage.getItem('user_id')){
                $('.logined').css('display','block');
                $('#index-img').attr('src','/static/img/default-img-2.png');
            }else{
                $('.unlogin').css('display','block');
                $('#index-img').attr('src','/static/img/default-img-1.png');
            }

            $('#index-nickname').text(localStorage.getItem('top_user_name'));


            //发布供货
            $('#content').on('input propertychange', function () {
                var _value = $(this).val().replace(/\n/gi,"");
                if(_value.length==0){
                    $('.supply-label').css('display','block');
                }
                if(_value.length>0){
                    $('.supply-label').css('display','none');
                }
            });

            //发布采购
            $('#entrustContent').focus(function () {
                $('.demand-label').css('opacity','0.6');
            });

            $('#entrustContent').on('input propertychange', function () {
                var _value = $(this).val().replace(/\n/gi,"");
                if(_value.length==0){
                    $('.demand-label').css('display','block');
                    $('.demand-label').css('opacity','0.6');
                }
                if(_value.length>0){
                    $('.demand-label').css('display','none');
                }
            });

            var mySwiper_haiyun = new Swiper('.swiper-container', {
                loop: true,
                mode: 'vertical',
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });
            var mySwiper_dianchang= new Swiper('.swiper-container-1', {
                loop: true,
                mode: 'vertical',
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });
            var mySwiper_gangkou= new Swiper('.swiper-container-2', {
                loop: true,
                mode: 'vertical',
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });

            //海运价格
            var swipernns2 = new Swiper('.n-ns22', {
                loop: true,
                mode: 'vertical',
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });


            $('.n-ns2-next').on('click', function (e) {
                e.preventDefault();
                swipernns2.swipeNext()
            });
            $('.n-ns2-prev').on('click', function (e) {
                e.preventDefault();
                swipernns2.swipePrev()
            });


            //公告
            var swiperzmmarket = new Swiper('.zmmbox', {
                mode: 'vertical',
                loop: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });
            $('.zmmbox-next').on('click', function (e) {
                e.preventDefault();
                swiperzmmarket.swipePrev()
            });
            $('.zmmbox-prev').on('click', function (e) {
                e.preventDefault();
                swiperzmmarket.swipeNext()
            });
            $('.zmmbox').on('mouseover', function () {
                swiperzmmarket.stopAutoplay();
            });
            $('.zmmbox').on('mouseout', function () {
                swiperzmmarket.startAutoplay();
            });


            //成交信息
            var swiperorder = new Swiper('.order', {
                mode: 'vertical',
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });

            $('.order').on('mouseover', function () {
                swiperorder.stopAutoplay();
            });
            $('.order').on('mouseout', function () {
                swiperorder.startAutoplay();
            });


            //有煤视点
            var swipernews = new Swiper('.my-index-news', {
                mode: 'vertical',
                loop: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false
            });

            $('.my-index-news').on('mouseover', function () {
                swipernews.stopAutoplay();
            });
            $('.my-index-news').on('mouseout', function () {
                swipernews.startAutoplay();
            });

            // getSearchIndexData();
        }
    })

    setFunction();

});

function chunk(array, size) {
    //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
    const length = array.length
    //判断不是数组，或者size没有设置，size小于1，就返回空数组
    if (!length || !size || size < 1) {
        return []
    }
    //核心部分
    var index = 0 //用来表示切割元素的范围start
    var resIndex = 0 //用来递增表示输出数组的下标

    //根据length和size算出输出数组的长度，并且创建它。
    var result = new Array(Math.ceil(length / size))
    //进行循环
    while (index < length) {
        //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, (index += size))
    }
    //输出新数组
    return result;
}

function supply(id_no) {
    console.log(11111111111111111111)
    $('#supplyModal').modal('show');

    $('#id_no').val(id_no);

    for(var i=0;i< supplyData.length;i++){
        if(id_no==supplyData[i].id_no){

            $('#name').text(supplyData[i].name);
            if(supplyData[i].price==0){
                $('#price').text('待议');
            }else{
                $('#price').text(supplyData[i].price+'元/吨');
            }

            $('#buy_count').text(supplyData[i].buy_count);
            $('#address').text(supplyData[i].rec_province+supplyData[i].rec_city+supplyData[i].rec_address);
            $('#deadline').text(supplyData[i].deadline);

            $('#steamCoal').css('display','none');
            $('#blindCoal').css('display','none');
            $('#cokingCoal').css('display','none');


            if(supplyData[i].coal_variety=='动力煤'){
                $('#steamCoal').css('display','block');
                $('#coal_norm_steam').text(supplyData[i].coal_norm);
                $('#moisture_mt_steam').text(supplyData[i].moisture_mt+'%');
                $('#ashes_ar_steam').text(supplyData[i].ashes_ar+'%');
                $('#sulfur_ar_steam').text(supplyData[i].sulfur_ar+'%');
                $('#volatile_ar_steam').text(supplyData[i].volatile_ar+'%');
                $('#energy_ar_steam').text(supplyData[i].energy_ar+'Kcal');
            }
            if(supplyData[i].coal_variety=='无烟煤'){
                $('#blindCoal').css('display','block');
                $('#coal_norm_blind').text(supplyData[i].coal_norm);
                $('#ashes_ar_blind').text(supplyData[i].ashes_ar+'%');
                $('#sulfur_ar_blind').text(supplyData[i].sulfur_ar+'%');
                $('#volatile_ar_blind').text(supplyData[i].volatile_ar+'%');
            }
            if(supplyData[i].coal_variety=='炼焦煤'){
                $('#cokingCoal').css('display','block');
                $('#coal_norm_coke').text(supplyData[i].coal_norm);
                $('#ashes_ar_coke').text(supplyData[i].ashes_ar+'%');
                $('#sulfur_ar_coke').text(supplyData[i].sulfur_ar+'%');
                $('#caking_index_coke').text(supplyData[i].caking_index);
                $('#colloidal_matter_coke').text(supplyData[i].thickness_colloidal_matter_layer);
            }


        }
    }


}

//发布采购
function publishPurchase() {
    var entrustContent=$('#entrustContent').val();

    if(!entrustContent){
        layer.alert('采购内容不能为空',{icon:6});

        return false;
    }

    ajaxpost('/v1/u/goods-demand/submit/quick',{content:entrustContent},function (res) {

        if(res.status=='success'){
            layer.alert(res.msg,{icon:6},function (res) {
                window.location.reload();
            });
        }
    })
}

function showCarModel(truck_demand_no,c_time,province,city,rec_province,rec_city) {
    $('#carModal').modal('show');

    $('#truck_demand_no').text(truck_demand_no);
    $('#c_time').text(c_time);
    $('#startAddress').text(province+city);
    $('#endAddress').text(rec_province+rec_city);
}

// function getSearchIndexData() {
//     //煤炭种类
//     var coal_variety='';
//     //省市区－地区
//     var province='';
//     var province1='';
//     var province2='';
//     //发热量
//     var energy='';
//     //全硫份
//     var sulfur='';
//     var sulfur1='';
//     //灰份
//     var ashes='';
//     //挥发份
//     var volatile='';
//     //粘结指数
//     var caking_index='';
//     //胶质层厚度
//     var colloidal_layer='';
//     //固定碳
//     var carbon='';
//     for(var i = 0;i < basedata.coal_variety.length;i++){
//         coal_variety += '<a href="/goods-spot?coal_variety='+basedata.coal_variety[i].name+'">'+basedata.coal_variety[i].name+'</a>';
//     }
//     for(var j = 0;j < basedata.district.length;j++){
//         province += '<a href="/goods-spot?coal_variety=动力煤&province='+basedata.district[j].province_name+'">'+basedata.district[j].province_name+'</a>';
//     }
//     for(var q = 0;q < basedata.district.length;q++){
//         province1 += '<a href="/goods-spot?coal_variety=炼焦煤&province='+basedata.district[q].province_name+'">'+basedata.district[q].province_name+'</a>';
//     }
//     for(var w = 0;w < basedata.district.length;w++){
//         province2 += '<a href="/goods-spot?coal_variety=无烟煤&province='+basedata.district[w].province_name+'">'+basedata.district[w].province_name+'</a>';
//     }
//     for(var m = 0;m < basedata.energy.length;m++){
//         energy += '<a href="/goods-spot?coal_variety=动力煤&energy_ar='+basedata.energy[m].min+'-'+basedata.energy[m].max+'">'+basedata.energy[m].min+'-'+basedata.energy[m].max+'</a>';
//     }
//     for(var n = 0;n < basedata.sulfur.length;n++){
//         sulfur += '<a href="/goods-spot?coal_variety=动力煤&sulfur_ar='+basedata.sulfur[n].min+'-'+basedata.sulfur[n].max+'">'+basedata.sulfur[n].min+'-'+basedata.sulfur[n].max+'</a>';
//     }
//     for(var c = 0;c < basedata.sulfur.length;c++){
//         sulfur1 += '<a href="/goods-spot?coal_variety=无烟煤&sulfur_ar='+basedata.sulfur[c].min+'-'+basedata.sulfur[c].max+'">'+basedata.sulfur[c].min+'-'+basedata.sulfur[c].max+'</a>';
//     }
//     for(var a = 0;a < basedata.ashes.length;a++){
//         ashes += '<a href="/goods-spot?coal_variety=无烟煤&ashes_ar='+basedata.ashes[a].min+'-'+basedata.ashes[a].max+'">'+basedata.ashes[a].min+'-'+basedata.ashes[a].max+'</a>';
//     }
//     for(var b = 0;b < basedata.volatile.length;b++){
//         volatile += '<a href="/goods-spot?coal_variety=炼焦煤&volatile_ar='+basedata.volatile[b].min+'-'+basedata.volatile[b].max+'">'+basedata.volatile[b].min+'-'+basedata.volatile[b].max+'</a>';
//     }
//     for(var k = 0;k < basedata.caking_index.length;k++){
//         caking_index += '<a href="/goods-spot?coal_variety=炼焦煤&caking_index='+basedata.caking_index[k].min+'-'+basedata.caking_index[k].max+'">'+basedata.caking_index[k].min+'-'+basedata.caking_index[k].max+'</a>';
//     }
//     for(var o = 0;o < basedata.colloidal_layer.length;o++){
//         colloidal_layer += '<a href="/goods-spot?coal_variety=炼焦煤&thickness_colloidal_matter_layer='+basedata.colloidal_layer[o].min+'-'+basedata.colloidal_layer[o].max+'">'+basedata.colloidal_layer[o].min+'-'+basedata.colloidal_layer[o].max+'</a>';
//     }
//     for(var p = 0;p < basedata.carbon.length;p++){
//         carbon += '<a href="/goods-spot?coal_variety=无烟煤&carbon_ar='+basedata.carbon[p].min+'-'+basedata.carbon[p].max+'">'+basedata.carbon[p].min+'-'+basedata.carbon[p].max+'</a>';
//     }
//
//     $('.coal_variety').append(coal_variety);
//     $('.startAddressIndex').append(province);
//     $('.startAddressIndex-1').append(province1);
//     $('.startAddressIndex-2').append(province2);
//     $('.energy_ar').append(energy);
//     $('.sulfur_ar').append(sulfur);
//     $('.sulfur_ar-1').append(sulfur1);
//     $('.zhishu').append(caking_index);
//     $('.houdu').append(colloidal_layer);
//     $('.volatile_ar').append(volatile);
//     $('.ashes_ar').append(ashes);
//     $('.carbon_ar').append(carbon);
//
// }

//发布供货
function submitDemand() {
    var content=$('#content').val();
    var id_no=$('#id_no').val();

    ajaxpost('/v1/u/sale-goods/submit/quick',{id_no:id_no,content:content},function (res) {
        if(res.status=='success'){
            layer.alert(res.msg,{icon:6},function (res) {
                window.location.reload();
            });
        }
    })
}

//下拉菜单
$(document).ready(function(){
    $('.level-s').mouseenter(function(){
        $(this).css({'background-color':'#4c4c4c'},{'color':'#d2d2d2'});
        $(this).next().show();
    });
    $(".li-2").mouseleave(function(){
       $(this).find('.level-s').css({'background-color':'#333'});
       $(this).find('.second-level').hide();
       $(this).find('.level').css({'height':'40px'});
    });

     $('.navSize').mouseenter(function(){
       $('.level').removeClass('level-1 level-2 level-3')
    });
    $(".navSize").mouseleave(function(){
      $('.level').addClass('level-1 level-2 level-3')
    });

})


function active_nav(temp) {
    if(temp === 'left'){
         $('.li-left').addClass('active').css('background-image','url("/static/img/xianhuo-left.png")')
             .siblings().removeClass('active').css('background-image','none');
         $('.mine-li').css('display','none');
         $('.mine-0').css('display','table-row');
    }else if(temp === 'middle1'){
         $('.li-middle-1').addClass('active').css('background-image','url("/static/img/xianhuo-middle.png")')
             .siblings().removeClass('active').css('background-image','none');
         $('.mine-li').css('display','none');
         $('.mine-1').css('display','table-row');
    }
    else if(temp === 'middle2'){
         $('.li-middle-2').addClass('active').css('background-image','url("/static/img/xianhuo-middle.png")')
             .siblings().removeClass('active').css('background-image','none');
         $('.mine-li').css('display','none');
         $('.mine-2').css('display','table-row');
    }
    else if(temp === 'middle3'){
         $('.li-middle-3').addClass('active').css('background-image','url("/static/img/xianhuo-middle.png")')
             .siblings().removeClass('active').css('background-image','none');
         $('.mine-li').css('display','none');
         $('.mine-3').css('display','table-row');
    }
    else if(temp === 'right'){
         $('.li-right').addClass('active').css('background-image','url("/static/img/xianhuo-right.png")')
             .siblings().removeClass('active').css('background-image','none');
         $('.mine-li').css('display','none');
         $('.mine-4').css('display','table-row');
    }

}



function active_nav_1(temp) {
    $('.'+temp).addClass('active').siblings().removeClass('active');
    if(temp == 'dayIndex'){
        $('.ri_zhi_shu').css('display','table-row');
        $('.zhou_zhi_shu').css('display','none');
    }else{
         $('.zhou_zhi_shu').css('display','table-row');
        $('.ri_zhi_shu').css('display','none');
    }
}

function active_nav_2(temp) {
    $('.'+temp).addClass('active').siblings().removeClass('active');
}

function active_nav_3(temp) {
    $('.'+temp).addClass('active').siblings().removeClass('active');
    if(temp == 'shipPrice'){
         $('.table-list').css('display','none');
        $('.haiyun-table').css('display','block');
    }else if(temp == 'powerStock'){
         $('.table-list').css('display','none');
        $('.dianchang-table').css('display','block');
    }else if(temp == 'portStock'){
         $('.table-list').css('display','none');
        $('.gangkou-table').css('display','block');
    }
}

$("input[type='number']").InputSpinner()
$("input.small").InputSpinner({groupClass: "input-group-sm"})
$("input.large").InputSpinner({groupClass: "input-group-lg"})


    function setFunction(){
       $("body").on("mouseenter", ".show-chart", function(event){
            $(this).stop();
            var self = event.target;
            var group = $(self).parent().parent();
            $(group).find(".management-price-change").removeClass('chart-open');
              // 画图
            var goodsId = $(this).parent().parent().attr("data-id");

            var price = $(this).parent().parent().attr("data-price");
            var chart = document.getElementById('chart-'+goodsId);
            // 基于准备好的dom，初始化echarts实例
            var tmp = 'myChart' + goodsId + '= echarts.init(chart);';
            eval(tmp);
            getChart(goodsId, price, eval('myChart' + goodsId));

        }).on('mouseleave', '.management-price-change', function(event) {
            $(this).stop();
            var self = event.target;
            var group = $(self).parent().parent();
            $(group).find(".management-price-change").addClass('chart-open');
        })
    }

/* 价格变化折线图 */
    function getChart(goodsId, price, myChart) {
        console.log(goodsId, price, myChart)
        console.log('/v1/goods/management/prices/' + goodsId)
          var xtime = [],yprice = [];
          var now = new Date();
         ajaxget('/v1/gp/gp-price?id=' + goodsId,function (res) {

             var gp_prices_list =  res.data.gp_prices_list;

             for(var i = 0;i < gp_prices_list.length;i++){
                 xtime.push(gp_prices_list[i].e_time);
                 yprice.push(parseFloat(gp_prices_list[i].group_purchase_price));

             }
             // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '价格趋势图',
                        left: 30,
                        top: 10,
                        textStyle: {
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    grid: {
                        top: 80,
                        right: '10%',
                        left: '10%'
                    },
                    label:{
                        normal: {
                            show:true
                        },

                    },
                    backgroundColor: 'white',
                    tooltip: {
                        trigger: 'axis'
                    },
                    dataZoom: [{
                        type: 'inside',
                        xAxisIndex: [0],
                        filterMode: 'filter'
                    },
                        {
                            type: 'slider',
                            xAxisIndex: [0],
                            filterMode: 'filter'
                        }],
                    xAxis: {
                        type: 'category',
                        data: xtime,
                        axisLable: {
                            fontsize: 8
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '煤价(元/吨)'
                    },
                    series: [
                        {
                            name:'煤价(元/吨)',
                            type:'line',
                            step: 'end',
                            symbolSize: 12,
                            data:yprice,
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
         });

    }

  //加减按钮响应数据变化
   function bgChange(id,start_number,total_count,sold_count,one_car_number){
        var groups_number=$('#input_'+id).val()*one_car_number;
        var Surplus = total_count - sold_count;
        if(groups_number >= Surplus){
            $('#input_'+id).parent().find('.btn-tuan-2').css({'background':'#d7d7d7 url("/static/img/increment-2.png") no-repeat  8px'}).attr('disabled',true)
        }else if(start_number <= groups_number <= Surplus){
             $('#input_'+id).parent().find('.btn-tuan-2').css({'background':'#fff url("/static/img/increment-1.png") no-repeat  8px'}).attr('disabled',false)
        }

        if(groups_number > start_number){
             $('#input_'+id).parent().find('.btn-tuan-1').css({'background':'#fff url("/static/img/decrement-1.png") no-repeat 8px 14px'}).attr('disabled',false)
        }else if(groups_number <= start_number ){
            console.log('6666')
             $('#input_'+id).parent().find('.btn-tuan-1').css({'background':'#d7d7d7 url("/static/img/decrement-2.png") no-repeat 8px 14px'}).attr('disabled',true)
        }
   }


 //立即抢购
    function rushBuy(id,total_count,sold_count,start_number,one_car_number) {
       weichatBrowser()
       console.log(id)
       var Surplus = total_count - sold_count;
       //分类为块煤时，one_car_number为后台传回值，分类为其他oen_car_number值为1；
       var buy_count= $('#input_'+id).val();
       var buy_count_1= $('#input_'+id).val()*one_car_number;
       var isTrue = Surplus - buy_count;

       console.log(buy_count);
       console.log(Surplus);
       if(buy_count_1<start_number){
           layer.alert('您好，您购买的数量小于规定',{icon:6});
           return false;
       }else{
          if(isTrue < 0){
               layer.alert('货量不足，请重新选择货物数量',{icon:6});
               return false;
           }else if(isTrue >= 0){
               // 解决浏览器弹窗拦截
                var newTab=window.open('about:blank');
                ajaxget('/v1/u/order?&id='+id+'&buy_count='+buy_count_1,function (res) {
                   if(res.status==='success'){
                       if(is_weichatBrowser){
                           window.location.href='/gp/order?id_no='+id+'&buy_count='+buy_count;
                       }else{
                            newTab.location.href='/gp/order?id_no='+id+'&buy_count='+buy_count;
                       }
                   }else if(res.resid==20004){
                       if(is_weichatBrowser){
                           window.location.href='/auth/sign-in';
                       }else{
                           newTab.location.href='/auth/sign-in';
                       }
                   }
                });
           }
       }



    }

     //团购下单数量
    function getGroupNumber(type,id,start_number) {
        var groups_number=$('#input_'+id).val();
        var number =  parseInt(groups_number);
        if(type=='-'){
            if(number <= start_number ){
                return false;
            }else{
                number = number-1;
            }
        }else {
                number = number+1;
        }
        $('#input_'+id).val(number).change();

    }

    var share_price_index,
         share_norm_index;
    function myEnterFunction_1(temp){
        share_price_index=$(temp).attr('data-price')+'';
        share_norm_index=$(temp).attr('data-norm')+'';
        if(share_price_index){
              setShare();
        }

    }

    // 分享团购
    //定义团购分享链接
    var img_url = $('#img_url').val();
    var shareurl_group = img_url+'/wapp/gp/list';

    function setShare(){
        window._bd_share_config = {
            "common" : {
                "bdSnsKey" : {},
                "bdMini" : "2",
                "bdMiniList" : false,
                "bdPic" : img_url+"/static/img/logo-app.png",//此处为分享时自带的图片
                "bdStyle" : "0",
                "bdSize" : "32",
                "bdUrl" : shareurl_group, //此处为后台要进行分享的内容的定义
                "bdDesc":'有煤网团购',  //分享时的文本摘要
                onBeforeClick: function(cmd,config) {

                    return {
                       bdText: "【有煤】我发现一个团购，优质"+share_norm_index+'只要'+share_price_index+"元/吨哦！",  //分享时的标题
                    }
                }
            },
            "share" : {}
        };
        //此处为需要引入的百度分享的js文件
        with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];

    }

    //分享团购复制链接
    function copyText() {
        $('#share-group').val(shareurl_group); // 修改文本框的内容
        $('#share-group').select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        layer.alert('复制链接成功',{icon:6});
    }


    //格式化数字  0：向下取整数 1：浮点数  fix:小数点位数
    function numFormat(type,value,fix){
        var val = Number(value).toFixed(fix);
        if(type===0){
            return parseInt(val);
        }else if(type===1){
            return parseFloat(val);
        }
    }
