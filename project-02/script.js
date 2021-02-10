$("document").ready(function () {  

  $(".menu").click(function () {
    $("nav").toggle();
  });

  $(".ins").mouseover(function () {
    $(".qr-codes").show();
    $(".ins-code").show();


  }).mouseleave(function () {
    $(".qr-codes").hide();
    $(".ins-code").hide();

  });

  $(".snap").mouseover(function () {
    $(".qr-codes").show();
    $(".snap-code").show();


  }).mouseleave(function () {
    $(".qr-codes").hide();
    $(".snap-code").hide();

  });


  $(".wechat").mouseover(function () {
    $(".qr-codes").show();
    $(".wechat-code").show();


  }).mouseleave(function () {
    $(".qr-codes").hide();
    $(".wechat-code").hide();

  });



});

$(window).on('load', function() {
  $("#latestwork-text01").arctext({ radius: 538, dir: -1 });
  $("#latestwork-text02").arctext({ radius: 538 });
});


