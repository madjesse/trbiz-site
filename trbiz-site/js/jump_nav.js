$(function(){
  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 56;
    $('body,html').animate({scrollTop:position}, 500,  'swing');
    return false;
  });
});