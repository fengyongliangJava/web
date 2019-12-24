function getBaseData() {
    //煤炭种类
    var coal_variety_alone;

     //煤矿
    var coal_mine;

    //供货类型
    var sale_goods_type;
    //省市区－地区
    var province;

    var rec_province;
    var price_type;

    for(var i = 0;i < basedata.coal_variety_alone.length;i++){
         coal_variety_alone += '<option value="'+basedata.coal_variety_alone[i].name+'"  id="'+basedata.coal_variety_alone[i].id+'">'+basedata.coal_variety_alone[i].name+'</option>';
    }

    for(var a = 0;a < basedata.coal_mine.length;a++){
         coal_mine += '<option value="'+basedata.coal_mine[a].name+'" id="'+basedata.coal_mine[a].id+'">'+basedata.coal_mine[a].name+'</option>';
    }

    for(var b = 0;b < basedata.sale_goods_type.length;b++){
        sale_goods_type += '<option value="'+basedata.sale_goods_type[b]+'">'+basedata.sale_goods_type[b]+'</option>';
    }

    for(var c = 0;c < basedata.district.length;c++){
        province += '<option value="'+basedata.district[c].province_name+'">'+basedata.district[c].province_name+'</option>';
    }

    for(var d = 0;d < cityJson.length;d++){
        rec_province += '<option value="'+cityJson[d].name+'">'+cityJson[d].name+'</option>';
    }

     for(var e = 0;e < basedata.price_type.length;e++){
        price_type += '<option value="'+basedata.price_type[e]+'">'+basedata.price_type[e]+'</option>';
    }
    console.dir(cityJson);

    $('#coal_variety_alone').append(coal_variety_alone);
    $('#coal_mine').append(coal_mine);
    $('#price_type').append(price_type);
    $('#sale_goods_type').append(sale_goods_type);
    $('#province').append(province);
    $('#rec_province').append(rec_province);

}


//获取规格
function getNorm() {
    $('#coal_norm').find('option').remove();

    var mine_id=$('#coal_mine option:selected').attr('id');
    var variety_id=$('#coal_variety_alone option:selected').attr('id');
    var coal_norm = '<option selected="selected" label="请选择" disabled></option>';

    console.log(mine_id);
    console.log(variety_id);

    if(mine_id && variety_id){
        ajaxget('/v1/sale-goods/norm?mine_id='+mine_id+'&variety_id='+variety_id,function (res) {
            if(res.status==='success'){
                console.log(res.data)
                console.log(res.data[1])
                for(var j=0;j <  res.data.length;j++){
                     coal_norm += '<option value="'+res.data[j]+'">'+res.data[j]+'</option>';
                }

                $('#coal_norm').append(coal_norm);
            }
        })
    }

    // for(var i = 0;i < basedata.coal_variety.length;i++){
    //     if(basedata.coal_variety[i].name==coal_variety){
    //         for(var j=0;j <  basedata.coal_variety[i].norms.length;j++){
    //             coal_norm += '<option value="'+basedata.coal_variety[i].norms[j]+'">'+basedata.coal_variety[i].norms[j]+'</option>';
    //         }
    //     }
    // }


}

//获取发布需求规格
function getNorm_1() {
    $('#coal_norm').find('option').remove();

    var coal_variety=$('#coal_variety_alone').val();
    var coal_norm;

    for(var i = 0;i < basedata.coal_variety.length;i++){
        if(basedata.coal_variety[i].name==coal_variety){
            for(var j=0;j <  basedata.coal_variety[i].norms.length;j++){
                coal_norm += '<option value="'+basedata.coal_variety[i].norms[j]+'">'+basedata.coal_variety[i].norms[j]+'</option>';
            }
        }
    }

    $('#coal_norm').append(coal_norm);
}


//获取产地的城市
function getCity() {
    $('#city').find('option').remove();

    var city;
    var province = $('#province').val();

    for(var i = 0;i <  basedata.district.length;i++){
        if(province == basedata.district[i].province_name){
            for(var j=0;j < basedata.district[i].citys.length;j++){
                city += '<option value="'+basedata.district[i].citys[j].city_name+'">'+basedata.district[i].citys[j].city_name+'</option>';
            }
        }
    }

    $('#city').append(city);
}
//获取所有的城市
function getCitys() {
    $('#city').find('option').remove();

    var city='<option value="全部">全部</option>';
    var province = $('#province').val();

    for(var i = 0;i <  basedata.district.length;i++){
        if(province == basedata.district[i].province_name){
            for(var j=0;j < basedata.district[i].citys.length;j++){
                city += '<option value="'+basedata.district[i].citys[j].city_name+'">'+basedata.district[i].citys[j].city_name+'</option>';
            }
        }
    }

    $('#city').append(city);
}

//获取交货地的城市
function getRecCity() {
    $('#rec_city').find('option').remove();

    var city;
    var rec_province = $('#rec_province').val();

    for(var i = 0;i <  cityJson.length;i++){
        if(rec_province == cityJson[i].name){
            for(var j=0;j < cityJson[i].city.length;j++){
                city += '<option value="'+cityJson[i].city[j].name+'">'+cityJson[i].city[j].name+'</option>';
            }
        }
    }

    $('#rec_city').append(city);
}

//获取省市区(发货地址)
function getProvince(addressId,show_area, often, action) {
    var place = cityJson;
    var res = [];
    for(var i=0;i<place.length;i++){
        province_name=place[i].name;
        var p = {name: province_name};
        var c = place[i].city;
        var cities = []
        for(var j=0;j<c.length;j++){
            var cList = c[j]
            var cdict = {name:cList.name};
            var a = cList.area;
            var areas=[];
            for(var n=0;n<a.length;n++){
                areas.push(a[n]);
            }
            cdict.areas=areas;
            cities.push(cdict)
        }
        p.city=cities;
        res.push(p)
    }
    if (often) {
        var oftenList = often
    } else {
        var oftenList = []
    }
    aaPcdPicker1 = new AAPcdPicker({
        field: document.getElementById(addressId),
        districtsData: res,
        showCountry:show_area,      //如果显示市区，将其设置为True即可
        districtsOften: oftenList,
        onSelectDone: function () {
            $('#'+ addressId).val(aaPcdPicker1._o.district);
            aaPcdPicker1.hide();
            if(action) {
                action()
            }
        }
    });
}

//获取省市区(收货地址)
function getProvinceRec(addressId,show_area, often, action) {
    var place = cityJson;
    var res = [];
    for(var i=0;i<place.length;i++){
        province_name=place[i].name;
        var p = {name: province_name};
        var c = place[i].city;
        var cities = []
        for(var j=0;j<c.length;j++){
            var cList = c[j]
            var cdict = {name:cList.name};
            var a = cList.area;
            var areas=[];
            for(var n=0;n<a.length;n++){
                areas.push(a[n]);
            }
            cdict.areas=areas;
            cities.push(cdict)
        }
        p.city=cities;
        res.push(p)
    }
    if (often) {
        var oftenList = often
    } else {
        var oftenList = []
    }
    aaPcdPicker = new AAPcdPicker({
        field: document.getElementById(addressId),
        districtsData: res,
        showCountry:show_area,      //如果显示市区，将其设置为True即可
        districtsOften: oftenList,
        onSelectDone: function () {
            $('#'+ addressId).val(aaPcdPicker._o.district);
            aaPcdPicker.hide();
            // console.log(action)
            if(action) {
                // console.log(action)
                action()
            }
        }
    });
}


//企业认证
function getStartProvince(addressId,show_area, often, action) {
    var place = basedata.district;

    console.dir(place);
    var res = [];
    for(var i=0;i<place.length;i++){
        province_name=place[i].province_name;
        var p = {name: province_name};
        var c = place[i].citys;
        var cities = []
        for(var j=0;j<c.length;j++){
            var cList = c[j]
            var cdict = {name:cList.city_name};
            var a = cList.areas;
            var areas=[];
            for(var n=0;n<a.length;n++){
                areas.push(a[n].area_name);
            }
            cdict.areas=areas;
            cities.push(cdict)
        }
        p.city=cities;
        res.push(p)
    }
    if (often) {
        var oftenList = often
    } else {
        var oftenList = []
    }
    aaPcdPicker1 = new AAPcdPicker({
        field: document.getElementById(addressId),
        districtsData: res,
        showCountry:show_area,      //如果显示市区，将其设置为True即可
        districtsOften: oftenList,
        onSelectDone: function () {
            $('#'+ addressId).val(aaPcdPicker1._o.district);
            aaPcdPicker1.hide();
            if(action) {
                action()
            }
        }
    });
}

function getSearchData() {
    console.dir(basedata);

    //省市区－地区
    var province='';


    for(var c = 0;c < basedata.district.length;c++){
        province += '<li class="searchitem" data-searchkey="'+basedata.district[c].province_name+'"><a>'+basedata.district[c].province_name+'</a></li>';
    }

    $('#province').append(province);

}
