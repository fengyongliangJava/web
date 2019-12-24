////////////////////////////////////////**快捷通道**/
$(function (){
	$("#fixd").attr("style","left:"+($(".sjw-header ").offset().left-75)+"px");
	window.onresize=function (){
 		$("#fixd").attr("style","left:"+($(".sjw-header ").offset().left-75)+"px");
	}

	 $(window).scroll(function (){
  		if($(document).scrollTop()>=550){
   		$("#fixd").attr("class","fixd2");
  	}else{
  		 $("#fixd").attr("class","fixd1");
 	 }
 });

	$("#fixd a").each(function (num,items){
		 if(document.title.indexOf($(items).html())>=0){
 		 $(items).attr("class","hover");
	 }         
});
});
////////////////////////////////////////**导航**/
$(function(){
	$("#zn_menu").on('mouseenter','dd',function(){
		var navId=$(this).attr('role');
		if(navId){
			$(navId).show();
			$("#zn_bg").show();
			$("#zn_bg3").show();
		}
	}).on('mouseleave','dd',function(){
		var navId=$(this).attr('role');
		if(navId){
			$(navId).hide();
			$("#zn_bg").hide();
			$("#zn_bg3").hide();
		}
	})
});
////////////////////////////////////////**友情链接**/
$(document).ready(function(){
  $("#selectdd .zse_p").click(function(){
      $("#selectdd .zse_ul").slideDown("slow");
  });
  $("#selectdd, #selectdd .zse_ul").mouseleave(function(){
     $("#selectdd .zse_ul").hide();
  });

$("#selectdd1 .zse_p").click(function(){
      $("#selectdd1 .zse_ul").slideDown("slow");
  });
  $("#selectdd1, #selectdd1 .zse_ul").mouseleave(function(){
     $("#selectdd1 .zse_ul").hide();
  })
  
  $("#selectdd2 .zse_p").click(function(){
      $("#selectdd2 .zse_ul").slideDown("slow");
  });
  $("#selectdd2, #selectdd2 .zse_ul").mouseleave(function(){
     $("#selectdd2 .zse_ul").hide();
  });


  $("#selectdd3 .zse_p").click(function(){
      $("#selectdd3 .zse_ul").slideDown("slow");
  });
  $("#selectdd3, #selectdd3 .zse_ul").mouseleave(function(){
     $("#selectdd3 .zse_ul").hide();
  });

  $("#selectdd4 .zse_p").click(function(){
      $("#selectdd4 .zse_ul").slideDown("slow");
  });
  $("#selectdd4, #selectdd4 .zse_ul").mouseleave(function(){
     $("#selectdd4 .zse_ul").hide();
  });
});


////////////////////////////////////////**信息公开**/
$(document).ready(

           function(){

                 if(!String.prototype.trim) {
                     String.prototype.trim = function () {
                          return this.replace(/^\s+|\s+$/g,'');
                     };
               }

           }

      )
$(function(){
    var columnname=new String();
    columnname="集团概况";
     $(".xxgk_leftnav .link").each(function(){
         if($(this).children("a").text().trim()==columnname.trim()){
               $(this).parent().addClass("open currentb")
               return false;

         } 
     })
     $(".xxgk_leftnav li").each(function(){
       
       if($(this).children("a").text().trim()==columnname.trim()){
        $(this).children("a").append("<i class='fa  fa-chevron-circle-right'></i>")
        $(this).addClass("current")
        $(this).parent('.submenu').parent().addClass("open currentb")
        $(this).parent('.submenu').slideDown()
        return false;

      }
   })
})


////////////////////////////////////////**新闻中心***tab键**/
function showCnt(l,n){
			getObject("d"+l).style.display=""
			getObject("a"+l).onmouseout=function (){getObject("d"+l).style.display="none"}

}
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}





























