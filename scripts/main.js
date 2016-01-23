/**
  *   --------------------------------
  *   This grabs elements from the DOM
  *   --------------------------------
  **/

  var $mapWrapper = $('.map-wrapper');

  /**
    *   -------------------------------------------------------------------------
    *   This is a tester Response JSON to help start wiring everything together
    *   -------------------------------------------------------------------------
    **/

var response = [{
    'id' : '12309120',
    'name' : "Beacon's House",
    'description' : "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'img' : "http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-red-room-01.jpg",
    'address1' : '2950 Camozzi Rd',
    'cityState' : 'Revelstoke, BC',
    'phone' : '250 814 0087',
    'website' : 'www.revelstokemountainresort.com/',
    'businesslatitude' : 50.9583028,
    'businesslongitude' : -118.1637752,
  }
]


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
    center: {lat: response[0].businesslatitude, lng: response[0].businesslongitude},
    scrollwheel: false,
    zoom: 8
  });

  // sets the position for the marker to be called in a jiffy
  var markerLatLng = {lat: response[0].businesslatitude, lng: response[0].businesslongitude};

  // adds a marker to the map
  var marker = new google.maps.Marker({
      position: markerLatLng,
      map: map,
      title: 'Hello World!'
    });

  // resets the map to center when a marker is clicked
  marker.addListener('click', function(event){
    map.panTo({lat: marker.getPosition().lat(), lng: (marker.getPosition().lng() - 1.28)}); /** includes correction factor of -1.28
                                                                                              * to scoot the 'center' to the right
                                                                                              * */

  });

}
