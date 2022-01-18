$(function(){
     // function show_joinus_popup(){
     //      $('.join_popup').css('display','flex');
     // }
     $('.popup_join_us').on('click',function(){
          $('.join_popup').css('display','flex');
     });
     $('.join_close').on('click',function(){
          $('.join_popup').css('display','none');
     });
});