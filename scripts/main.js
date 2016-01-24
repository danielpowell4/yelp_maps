/**
  *   --------------------------------
  *   This grabs elements from the DOM
  *   --------------------------------
  **/



  /**
    *   -------------------------------------------------------------------------
    *   This is a tester Response JSON to help start wiring everything together
    *   -------------------------------------------------------------------------
    **/

var response = [{
    'id' : '12309120',
    'name' : "Beacon's House",
    'description' : "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'imgSrc' : "http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-red-room-01.jpg",
    'address1' : '2950 Camozzi Rd',
    'cityState' : 'Revelstoke, BC',
    'phone' : '250 814 0087',
    'webURL' : 'www.revelstokemountainresort.com/',
    'businesslatitude' : 50.9583028,
    'businesslongitude' : -118.1637752,
  }, {
      'id' : '12309120',
      'name' : "Artie's House",
      'description' : "Artie has an abode to be adored. It's like nothing you've ever experienced. Not only does it have year round views of Canada's incredible Glacier National Park, but it is also has a pool. Artie is sure to have his humans keep a stockpile of treats always on the ready.",
      'imgSrc' : "https://s-media-cache-ak0.pinimg.com/originals/0d/80/1e/0d801ec8b8d40c12e67d4dffb994d31d.jpg",
      'address1' : '23 TransCanada Highway',
      'cityState' : 'Revelstoke, BC',
      'phone' : '250 837 7500',
      'webURL' : 'pc.gc.ca',
      'businesslatitude' : 51.209417,
      'businesslongitude' : -117.723987,
    }, {
        'id' : '12309120',
        'name' : "Beacon's House #2",
        'description' : "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
        'imgSrc' : "http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-red-room-01.jpg",
        'address1' : '2950 Camozzi Rd',
        'cityState' : 'Revelstoke, BC',
        'phone' : '250 814 0087',
        'webURL' : 'www.revelstokemountainresort.com/',
        'businesslatitude' : 50.9583028,
        'businesslongitude' : -118.1637752,
      },

]

var placeCard = function(data) {

  this.name = ko.observable(data.name);
  this.description = ko.observable(data.description);
  this.imgSrc = ko.observable(data.imgSrc);
  this.address1 = ko.observable(data.address1);
  this.cityState = ko.observable(data.cityState);
  this.phone = ko.observable(data.phone);
  this.webURL = ko.observable(data.webURL);
  this.businesslatitude = ko.observable(data.businesslatitude);
  this.businesslongitude = ko.observable(data.businesslongitude);

}

var ViewModel = function() {
    var that = this;

    this.resultList = ko.observableArray([]);

    response.forEach(function(place){
      that.resultList.push( new placeCard(place) );
    });
};

ko.applyBindings(new ViewModel());


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
      title: 'Beacons House'
    });

  var marker2 = new google.maps.Marker({
      position: {lat: response[1].businesslatitude, lng: response[1].businesslongitude},
      map: map,
      title: 'Arties House'
      });

  // resets the map to center when a marker is clicked
  marker.addListener('click', function(event){
    map.panTo({lat: marker.getPosition().lat(), lng: (marker.getPosition().lng() - 1.28)}); /** includes correction factor of -1.28
                                                                                              * to scoot the 'center' to the right
                                                                                              * */
  });

  marker2.addListener('click', function(event){
    map.panTo({lat: marker2.getPosition().lat(), lng: (marker2.getPosition().lng() - 1.28)}); /** includes correction factor of -1.28
                                                                                              * to scoot the 'center' to the right
                                                                                              * */
  });

}
