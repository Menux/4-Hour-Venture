// JavaScript Codes
$(function(){

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });
});

function initialize() {
    var latlng = new google.maps.LatLng(52.1791125, 10.5587162);
    var myOptions = {
        zoom: 16,
        center: latlng,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
myOptions);
}
var myKey = "AIzaSyCSpMm9sAWUDHV-RIgK1mDsRGMDFPLjKRQ";
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + myKey + "&sensor=false&callback=initialize";
    document.body.appendChild(script);
}
