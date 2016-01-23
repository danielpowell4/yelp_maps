/**
  *   --------------------------------
  *   This grabs elements from the DOM
  *   --------------------------------
  **/

  var $mapWrapper = $('.map-wrapper');



/**
  *   ------------------------------
  *   This handles requests to Yelp
  *   ------------------------------
  **/


/**
  *   ------------------------------------
  *   This handles requests to Google Maps
  *   ------------------------------------
  **/

var googleMapsAPIKey = 'AIzaSyClMls0bXZ3jgznlsLiP0ZgRrzSgUGFMbU';

var googleMapsgeocodeKey = 'AIzaSyBEXHFmzvonWnDvII96o0Zx8Z--i64lArA';


function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.9995, lng: -118.2460},
    scrollwheel: false,
    zoom: 8
  });

  // sets the position for the marker to be called in a jiffy
  var myLatLng = {lat: 50.9995183, lng: -118.2460873};

  // adds a marker to the map
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });

  // resets the map to center when a marker is clicked
  marker.addListener('click', function(event){
    map.panTo({lat: marker.getPosition().lat(), lng: (marker.getPosition().lng() - 1.28)}); // includes correction factor to scoot the 'center' to the right

  });

}
