$("document").ready(function() {

const mq = window.matchMedia('(max-width: 768px)');

if(mq.matches) {
    $(".menu").click(function() {
        $("nav").toggle();
    });

}

});
