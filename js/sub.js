$(function(){
     $('header').css("background-color","#00B900");
    
    //헤더
    let sub_header = $('header').height();

    $('html, .body_cont').on("scroll",function() {
         var offsetTop = $('.body_cont').scrollTop();
         var last_p_T  = $('.last_p').offset().top+800;
         var game_video_wrap_T  = $('.game_video_wrap').offset().top+400;
          if(offsetTop == 0 || offsetTop < sub_header){
               $('header').css("background-color","#00B900");
               $('header > a > div').css("background-image","url('./img/lineGames_logo.png')");
          }else{
               $('header').css("background-color","#00B900");
               $('header > a > div').css("background-image","url('./img/lineGames_logo_black.png')");
          }
          
          if(offsetTop > last_p_T){
               $('.body_cont').css({
                    'transition':"0.51s linear",
                    'background-color':"#000"
               });
               $('.game_info_container').css({
                    'transition':"0.51s linear",
                    'background-color':"#000"
               });
               $('.game_video_wrap').css({
                    'transition':"0.51s linear",  
                    'opacity':1,
                    // 'background-color':"#000"
               });
          }
          if(offsetTop > game_video_wrap_T){
               $('.game_video_wrap > video').css({
                    'transition':"1s linear",
                    "width" : '90%',
                    "margin" :  "0 5%"
               });
          }
    });

})