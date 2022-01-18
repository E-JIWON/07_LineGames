$(function(){
     
     $('.close_btn').on('click',function(){
          $('.popup').css('display',"none");
     });


     if (window.location.href.indexOf("index.php?sub=about") > -1 || window.location.href.indexOf("sub_games_info.php") > -1) {
          $('header').css("background-color","#00B900");
     }
    if (!(window.location.href.indexOf("index.php?sub=about") > -1) && !(window.location.href.indexOf("sub_games_info.php") > -1)){
          var ct = $('.contents').get();
          ct[1].style.zIndex = 3000;
          ct[2].style.zIndex = 2000;
     }
    $('#prev_btn').on('click',function(){
          console.log(ct[0]);
          ct.unshift(ct.pop());
          ct[0].style.opacity = 1;
          ct[0].style.zIndex = 4000;
          ct[1].style.opacity = 0;
          ct[1].style.zIndex = 3000;
          ct[2].style.opacity = 0;
          ct[2].style.zIndex = 2000;
     });
    $('#next_btn').on('click',function(){
          ct.push(ct.shift());
          ct[0].style.opacity = 1;
          ct[0].style.zIndex = 4000;
          ct[1].style.opacity = 0;
          ct[1].style.zIndex = 3000;
          ct[2].style.opacity = 0;
          ct[2].style.zIndex = 2000;
    });
    
    
    //헤더
    let heder_H = $('header').height();
    if (window.location.href.indexOf("index.php?sub=about") > -1) {
          var healing_T = $(".welfare_wrap.healing").offset().top-800;
          var fun_T = $(".welfare_wrap.fun").offset().top-800;
          var way_T = $(".way_come").offset().top-800;
     }

    $(window).on("scroll",function() {
          let offsetTop = $(window).scrollTop();
          if(offsetTop == 0 || offsetTop < heder_H){
               $('header').css("background-color","transparent");
               $('header > a > div').css("background-image","url('./img/lineGames_logo.png')");
          }else{
               $('header').css("background-color","#00B900");
               $('header > a > div').css("background-image","url('./img/lineGames_logo_black.png')");
          }
          
          if(offsetTop > healing_T){
               $('.welfare_wrap.healing').css({
                    "opacity": 1,
                    "margin-top": "0",
                    "transition": "0.5s linear"
               });
          }
          if(offsetTop > fun_T){
               $('.welfare_wrap.fun').css({
                    "opacity": 1,
                    "margin-top": "5%",
                    "transition": "0.5s linear"
               });
          }
          if(offsetTop > way_T){
               $('.way_come').css({
                    "opacity": 1,
                    "margin-top": "10%",
                    "transition": "0.5s linear"
               });
          }
          
          if (window.location.href.indexOf("index.php?sub=about") > -1) {
               if(offsetTop > healing_T){
                    $('.welfare_wrap.healing').css({
                         "opacity": 1,
                         "margin-top": "0",
                         "transition": "0.5s linear"
                    });
               }
               if(offsetTop > fun_T){
                    $('.welfare_wrap.fun').css({
                         "opacity": 1,
                         "margin-top": "5%",
                         "transition": "0.5s linear"
                    });
               }
               if(offsetTop > way_T){
                    $('.way_come').css({
                         "opacity": 1,
                         "margin-top": "10%",
                         "transition": "0.5s linear"
                    });
               }
          }
    });


})