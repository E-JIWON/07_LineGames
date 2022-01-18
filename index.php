<?php
    include './header.html';    
    include './popup.html';     
    include './join_us.html'; 
    if(isset($_GET['sub'])){
    $sub = $_GET['sub'];
        if($sub =='about'){
            include './sub_about.html';
            include './footer.html';
        }else if($sub == 'games'){
            include './sub_games.html';
        }
    }else{
        include './main.html';    
        include './footer.html';
    }
?>