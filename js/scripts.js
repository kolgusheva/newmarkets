
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(50.445386, 30.504914);

  var mapOptions = {
    center: latlng,
    zoom: 14,                        // set the zoom level manually
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("canvas-map"), mapOptions);
  marker.setMap(map);

};
/* end google maps -----------------------------------------------------*/
});