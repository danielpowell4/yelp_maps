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

var response =  [{
    'id' : '12309120',
    'name' : "Beacon's House",
    'snippet_text' : "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'image_url' : "http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-red-room-01.jpg",
    'address1' : '2950 Camozzi Rd',
    'cityState' : 'Revelstoke, BC',
    'display_phone' : '250 814 0087',
    'url' : 'www.revelstokemountainresort.com/',
    'location': {
      'coordinate': {
        'latitude': 50.9583028,
        'longitude': -118.1637752,
      },
      'display_address' : ['2950 Camozzi Rd'],

    }

  }, {
      'id' : '12309120',
      'name' : "Artie's House",
      'snippet_text' : "Artie has an abode to be adored. It's like nothing you've ever experienced. Not only does it have year round views of Canada's incredible Glacier National Park, but it is also has a pool. Artie is sure to have his humans keep a stockpile of treats always on the ready.",
      'image_url' : "https://s-media-cache-ak0.pinimg.com/originals/0d/80/1e/0d801ec8b8d40c12e67d4dffb994d31d.jpg",
      'address1' : '23 TransCanada Highway',
      'cityState' : 'Revelstoke, BC',
      'display_phone' : '250 837 7500',
      'url' : 'pc.gc.ca',

      'location': {
        'coordinate': {
          'latitude': 51.209417,
          'longitude': -117.723987,
        },
        'display_address' : ['23 TransCanada Highway'],

      }

    }, {
        'id' : '12309120',
        'name' : "Beacon's House #2",
        'snippet_text' : "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
        'image_url' : "http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-red-room-01.jpg",
        'address1' : '2950 Camozzi Rd',
        'cityState' : 'Revelstoke, BC',
        'display_phone' : '250 814 0087',
        'url' : 'www.revelstokemountainresort.com/',


        'location': {
          'coordinate': {
            'latitude': 50.9583028,
            'longitude': -118.1637752,
          },
          'display_address' : ['2950 Camozzi Rd'],

        }

      },
    ];

var markers = [];

var placeCard = function(data) {

  var that = this;

  this.name = ko.observable(data.name);
  this.description = ko.observable(data.snippet_text);
  this.imgSrc = ko.observable(data.image_url);
  this.address1 = ko.observable(data.location.display_address[0]);
  this.city =  ko.observable(data.location.city);
  this.state = ko.observable(data.location.state_code);
  this.zip = ko.observable(data.location.postal_code);
  this.address2 = ko.computed(function(){return that.city() + ", " + that.state() + " " + that.zip()});
  this.phone = ko.observable(data.display_phone);
  this.webURL = ko.observable(data.url);
  this.loc = {
    lat: data.location.coordinate.latitude,
    lon: data.location.coordinate.longitude,
    address: data.location.display_address[0] +
      '<br>' + data.location.display_address[data.location.display_address.length - 1]
  },
  this.review = {
    img: data.snippet_image_url,
    txt: data.snippet_text
  };

  this.marker = [this.name, this.phone, this.loc.lat, this.loc.lon, this.review.img, this.review.txt];
  markers.push(this.marker);
}

var resultList = ko.observableArray([]);

function updateYelpResults(){
  // get all the needed info
    yelpAjax(searchFor(), searchNear());
}

var searchFor =  ko.observable("Tacos"); // form Yelp Search Form with prepopulated placeholder
var searchNear = ko.observable("80210"); // form Yelp Search Form with prepopulated placeholder


var ViewModel = function() {
    var that = this;


  //  this.resultList = ko.observableArray([]);

    response.forEach(function(place){
      resultList.push( new placeCard(place) );
    });

};


ko.applyBindings(new ViewModel());


/**
  *   ------------------------------
  *   This handles requests to Yelp
  *   ------------------------------
  **/

  function yelpAjax(searchFor, searchNear) {

  	/**
      *	Keys and other tokens needed to access the Yelp API via OAuth
  	  *	In a non-Udacious scenario this would have to be moved
      * to a server side script and therefore actually be "secret"
  	  **/

  	var auth = {
  			    consumerKey : "2M-JWI9l8UBCt3vm0R6vZg",
  			    consumerSecret : "2TIm_ve4y6unTQR2D1HGnWTjFOM",
  			    accessToken : "p44DAD9S6MecSv66hmrdR3qdJZhVkg7o",
  			    accessTokenSecret : "rhnGNKjrDKMLZT0aRET8qIA-aWQ",
  			    serviceProvider : {
  			        signatureMethod : "HMAC-SHA1" // found here https://www.yelp.com/developers/documentation/v2/authentication
  			    }
  			};

  	/**
  	  *	Grab the "secret" part of the auth keys and put them in an object
      * that will then be passed on to the coming OAuth.SignatureMethod
  	  **/

  	var accessor = {
  	    consumerSecret : auth.consumerSecret,
  	    tokenSecret : auth.accessTokenSecret
  	};

  	/**
  	  *	Create an array of parameters to handoff to message object that follows
      * This helps keep things more bite-sized...
  	  **/

  	var parameters = [
      ['term', searchFor],
      ['location', searchNear],
      ['callback', 'cb'],
      ['oauth_consumer_key', auth.consumerKey],
      ['oauth_consumer_secret', auth.consumerSecret],
      ['oauth_token', auth.accessToken],
      ['oauth_signature_method', auth.serviceProvider.signatureMethod]
    ];



  	/**
  	  *	This message object is to be fired to Yelp as part of then
      * OAuth.setTimestampAndNonce TODO: make this server-side
  	  **/

  	var message = {
  	    'action' : 'http://api.yelp.com/v2/search',
  	    'method' : 'GET',
  	    'parameters' : parameters
  	};


  	/**
  	  *	Vitrually sign and send things as part of some OAuth JS Magic
  	  **/

  	OAuth.setTimestampAndNonce(message);
  	OAuth.SignatureMethod.sign(message, accessor);
  	var parameterMap = OAuth.getParameterMap(message.parameters);
  	yJax(message.action, parameterMap);

  };

  /**
    *   Ajax OAuth mehod to go talk to Yelp and grab data (yData)
    **/

  function yJax(url, yData){
    $.ajax({
      'url': url,
      'data': yData,
      'dataType' : 'jsonp',
      'global': true,
      'cache': true,
      'jsonpCallback': 'cb',
      'success' : function(data){
        makeYelpList(data);
        console.log("data just came in");
      }
    });
  }

  yelpAjax("Tacos", 80210);

  function makeYelpList(d) {
    response = d.businesses; // push ajax response to the global var 'response'

    resultList.removeAll();  // empty the resultList

    // paint the new cards to the DOM
    response.forEach(function(place){
      resultList.push( new placeCard(place) );
    });


    initMap(); // refresh map
  }


  ////// Yelp Stops Here ///////////////////////


  function clearAllMarkers() {
    for (marker in markers){ // TODO decide if var should be markers or abstract away wtih allMarkers
      markers[marker].setMap(null);
    }

    markers = [];
  }

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
    center: {lat: response[0].location.coordinate.latitude, lng: response[0].location.coordinate.longitude},
    scrollwheel: true,
    zoom: 10
  });

  for(var i=0 ; i<response.length; i++){
      // create the positon object
      var position = new google.maps.LatLng(response[i].location.coordinate.latitude, response[i].location.coordinate.longitude);
      // create the mkr object from the marker param
      var mkr = new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP, //change to something else?
        title: response[i].name,
        ph: response[i].display_phone,
        pic: response[i].image_url,
        blurb: response[i].snippet_text,
      });
    }


}


/**
  * function that loops through markers array and places
  * any and all markers to the map
  **/

function addGoogleMapsMarkers() {
    for(var i=0 ; i<response.length; i++){
        // create the positon object
        var position = new google.maps.LatLng(response[i].location.coordinate.latitude, response[i].location.coordinate.longitude);
        // create the mkr object from the marker param
        var mkr = new google.maps.Marker({
          position: position,
          map: map,
          animation: google.maps.Animation.DROP, //change to something else?
          title: response[i].name,
          ph: response[i].display_phone,
          pic: response[i].image_url,
          blurb: response[i].snippet_text,
        });

      // push these new objects to an array variable

      // bind mouseover to infoWindows
      google.map.event.addListener(mrk, 'mouseover', (function(mk, i){
          return function() {
            makeInfoWindow(mk);
          }
        }));

      // bind click event to scroll event in DOM and create infoWindow
      google.map.event.addListener(mkr, 'click', function(event){
        map.panTo({lat: marker.getPosition().lat(), lng: (mkr.getPosition().lng() - 1.28)}); /** includes correction factor of -1.28
                                                                                                  * to scoot the 'center' to the right
                                                                                                  * */
      }, (function(mk, i){
          return function(){
            makeInfoWindow(mk);
          // need function with scrollTo position and change marker sytle
          }
        })
      )
  }
}
