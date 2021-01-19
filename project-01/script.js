$(document).ready(function() {
    $(".inside").hide();
    
    var audio = new Audio('kathleen_mccormack_mother_macree.mp3');

    $(".click").on('click', function() {
        $(".outside").animate({
            opacity: 0
        }, 2000, function() {
            $(".outside").hide();
        });
        setTimeout(function() {
            $(".inside").slideDown(2000);
            audio.play();
        }, 2100);
    })
})