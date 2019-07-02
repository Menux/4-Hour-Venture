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

// ## Count Down
$(function() {
    $("#countdown").countdown("2019/10/18 14:00:00", {elapse: true}).on('update.countdown', function(event) {
        if (event.elapsed && event.strftime('%H') === "06") {
            $(this).text(event.strftime('Das Event ist schon zu Ende. Bis zum nächsten Mal.'));
        } else if (event.elapsed) {
            $(this).text(event.strftime('Das Event läuft grade auf hochtouren.'));
        } else {
            $(this).text(event.strftime('Noch %D Tage und %H:%M:%S'));
        }
    });

});

// Eventbrite function
$(function(){

  var eventbriteCheckout = function() {
      console.log('Order complete!');
  };

  window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '64450915423',
      iframeContainerId: 'eventbrite-widget-container-64450915423',

      // Optional
      iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: eventbriteCheckout  // Method called when an order has successfully completed
  });

});



// ## Google Maps
function initialize() {
    var latlng = new google.maps.LatLng(52.2762958,10.5379855);
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
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
}
var myKey = "AIzaSyCSpMm9sAWUDHV-RIgK1mDsRGMDFPLjKRQ";
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + myKey + "&sensor=false&callback=initialize";
    document.body.appendChild(script);
}
