$(document).ready(function() {
  new WOW().init();

  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });

  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });

  $(".iphone-btn").delay(1500).animate( {bottom: "+=-3px"}, 300 );
  $(".iphone-btn").delay(300).animate( {top: "+=-3px"}, 100 );
});
