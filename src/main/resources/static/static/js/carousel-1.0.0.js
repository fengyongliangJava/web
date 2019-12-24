/**
 * Created by djz on 2018/1/16.
 */
// 轮播图
function getCarousel(position, dict) {
    var url = '/v1/base/banner';
    var data = {
        banner_type:"pc",
        position: position
    };
    ajaxpost(url, data, function(res) {
        console.log(res);
        if(res.resid === 200 && res.data.length!== 0){
            var banners = res.data.slice(0, 4);
            // console.log(banners);
            for(var index = 0; index < banners.length; index++) {
                var img = banners[index].img;
                $(dict[index]).css("background-image",'url(' + img + ')');
            }
        }
    })
}