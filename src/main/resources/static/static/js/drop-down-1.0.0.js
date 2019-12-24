/**
 * Created by ZD on 2018/9/22.
 */
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