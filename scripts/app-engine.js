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
    'image_url' : '',//"http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-#EE8060-room-01.jpg",
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
      'snippet_text' : "Artie has an abode to be ado#EE8060. It's like nothing you've ever experienced. Not only does it have year round views of Canada's inc#EE8060ible Glacier National Park, but it is also has a pool. Artie is sure to have his humans keep a stockpile of treats always on the ready.",
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
        'image_url' : '',//"http://img.lasvegasdirect.com/paris-hotel-casino-las-vegas-#EE8060-room-01.jpg",
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

var errorMessage = {
  'name' : 'Oh No!',
  'snippet_text' : 'We were unable to find any results. Please check your search and try again.'
};

var placeCard = function(data) {

  var that = this;

  this.name = ko.observable(data.name);
  this.id = ko.observable(data.id);
  this.idSelector = ko.computed(function(){return "#" + data.id});
  this.description = ko.observable(data.snippet_text);
  this.imgSrc = ko.computed(function(){return data.image_url.replace('ms.jpg', 'l.jpg')});
  this.address1 = ko.observable(data.location.display_address[0]);
  this.city =  ko.observable(data.location.city);
  this.state = ko.observable(data.location.state_code);
  this.zip = ko.observable(data.location.postal_code);
  this.address2 = ko.computed(function(){return that.city() + ", " + that.state() + " " + that.zip()});
  this.phone = ko.observable(data.display_phone);
  this.webURL = ko.observable(data.url);
  this.location = {
    coordinate : {
      latitude: data.location.coordinate.latitude,
      longitude: data.location.coordinate.longitude,
    },
    address: data.location.display_address[0] +
      '<br>' + data.location.display_address[data.location.display_address.length - 1]
  };
  this.review = {
    img: data.snippet_image_url,
    txt: data.snippet_text
  };
  this.stars = {
    count: ko.observable(data.rating),
    standard: ko.observable(data.rating_img_url),
    large: ko.observable(data.rating_img_url_large),
    small: ko.observable(data.rating_img_url_small)
  };
  this.marker = {
    title: data.name,
    phone: data.display_phone,
    imgSrc: data.image_url,
    description: data.snippet_text,
    lat: data.location.coordinate.latitude,
    lng: data.location.coordinate.longitude,
    idSelector: "#" + data.id,
    stars: data.rating_img_url
  };
  this.googleDirections = ko.computed(function(){return "//google.com/maps?q=" + data.location.display_address[0] + '+' + data.location.city  + '+' + data.location.state_code});
  this.facebookShare = ko.computed(function(){return "//www.facebook.com/sharer/sharer.php?u=" + data.url });
  this.twitterShare = ko.computed(function(){return "//twitter.com/intent/tweet?text=OMG " + data.name + " is an awesome spot for " + searchFor() + " in " + searchNear() + "&amp;url=" + data.url + ";via=dangerdan"})
};

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
      ['sort', 2], // '2' sorts results by rating
      ['limit', 15], // limits results to top 15
      ['oauth_consumer_key', auth.consumerKey],
      ['oauth_consumer_secret', auth.consumerSecret],
      ['oauth_token', auth.accessToken],
      ['oauth_signature_method', auth.serviceProvider.signatureMethod]
    ];



  	/**
  	  *	This message object is to be fi#EE8060 to Yelp as part of then
      * OAuth.setTimestampAndNonce TODO: someday make this server-side
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
      'timeout': 3000,
      'type': 'GET',
      'url': url,
      'data': yData,
      'dataType' : 'jsonp',
      'global': true,
      'cache': true,
      'jsonpCallback': 'cb',
      'success' : function(data){
        makeYelpList(data);
        console.log("data just came in");
      },
      'error': function() {
         alert("oh no! it didn't work!!");
      },



    });
  }

  yelpAjax(searchFor(), searchNear());

  function makeYelpList(d) {
    response = d.businesses; // push ajax response to the global var 'response'

    resultList.removeAll();  // empty the resultList

    clearAllMarkers(); // clears marker array

    // paint the new cards to the DOM
    response.forEach(function(place){
      resultList.push( new placeCard(place) );
    });

    scrollingTriggersMarkers(); // when card passed in DOM marker infowindow opens
    forceTop(); // ensure DOM is scrolled to top
    initMap(); // refresh map
  }


  ////// Yelp Stops Here ///////////////////////


  var currentMarkers = [];
  var activeMarker = ko.observable();

  function clearAllMarkers() {
      markers = [];
      currentMarkers = [];
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
    center: {lat: response[0].location.coordinate.latitude - 0.04, lng: response[0].location.coordinate.longitude - 0.07},
    scrollwheel: false,
    zoom: 12
  });

  setMarkers(map, resultList());
	infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });
}

var activeIcon = {
    path: "M10,0.5c2.7-0.1,6.6,1.8,7.1,7c0.4,5.2-7.1,11.6-7.1,11.6l0,0c0,0-7.5-6.4-7.1-11.6C3.4,2.3,7.2,0.5,10,0.5",
    fillColor: '#FFF',
    fillOpacity: 0.8,
    strokeWeight: 4,
    strokeColor: '#0BA',
    scale:2.5,
  };

var restingIcon = {
  path: "M10,0.5c2.7-0.1,6.6,1.8,7.1,7c0.4,5.2-7.1,11.6-7.1,11.6l0,0c0,0-7.5-6.4-7.1-11.6C3.4,2.3,7.2,0.5,10,0.5",
  fillColor: '#EE8060',
  fillOpacity: 0.6,
  strokeWeight: 4,
  strokeColor: '#fff',
  scale:2.5,
}

var mapShift = {
  right: 0.08,
  up: 0.04
}

function setMarkers(map, points) {

    for (var i = 0; i < points.length; i++) {
        var place = points[i];
        var siteLatLng = new google.maps.LatLng(place.location.coordinate.latitude, place.location.coordinate.longitude);
        var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            clickable: true,
            animation: google.maps.Animation.DROP, // TODO change to something else?
            icon: restingIcon,
            title: place.marker.title,
            phone: place.marker.phone,
            imgSrc: place.marker.imgSrc,
            description: place.marker.description,
            lat: place.location.coordinate.latitude,
            lng: place.location.coordinate.longitude,
            idSelector: place.marker.idSelector,
            stars: place.marker.stars,
            windowContent: '<div class="infowindow-title">' + place.marker.title + '</div><br/><img src="' + place.marker.stars + '"></img>',
        });

        currentMarkers.push(marker);

        var contentString = "Some content";

        google.maps.event.addListener(marker, "click", function (event) {
            resetMarkerIcons();
            infowindow.setContent(this.windowContent); //set infowindow Content
            infowindow.open(map, this);  // open the infowindow
            map.panTo({lat: (this.lat - mapShift.up), lng: (this.lng - mapShift.right)}); // center map to marker with shift for search
            $('html, body').animate({     // move the DOM listings to the marker that was just clicked
              scrollTop: $(this.idSelector).offset().top - 20
              }, 100);
            $(".gm-style-iw").next("div").css( 'display', 'none' ); // hide the close control in infowindow
            this.setIcon(activeIcon); // swap out icon from resting to active
            this.setZIndex(5);  // have marker be on top

        });

        google.maps.event.addListener(marker, "mouseover", function (event) {
            resetMarkerIcons();
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);
            this.setIcon(activeIcon);
            this.setZIndex(5);
            $(".gm-style-iw").next("div").hide(); // hide the close control
        });


  //  ------  DoubleClick listener used as the DOM Scrolling Trigger -------------------

        google.maps.event.addListener(marker, "dblclick", function (event) {
            resetMarkerIcons();
            map.panTo({lat: (this.lat - mapShift.up), lng: (this.lng - mapShift.right)}); // center map to marker with shift for search
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);
            this.setIcon(activeIcon);
            this.setZIndex(5);
            $(".gm-style-iw").next("div").hide(); // hide the close control

        });

    };
    forceTop();
}

function resetMarkerIcons() {
    //  reset all the icons back to normal except the one you clicked
    for (var i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].setIcon(restingIcon);
        currentMarkers[i].setZIndex(4);
    }
}


/**  ------------------------------------------------------------------------
  *   Vars that to help monitor the DOM and trigger events when appropriate
  *  ------------------------------------------------------------------------ */

/**
  *  scrollingTriggersMarkers: as the window scrolls it stores the pixel count
  *  and then compares that to the offsets of each of the result card
  *  divs when the window is approaching a top it triggers the dbllick event Listener
  **/

  function OpenInfowindowForMarker(index) {
      //var index = (listing - 1);
      google.maps.event.trigger(currentMarkers[index], 'dblclick');
  }

  function scrollingTriggersMarkers(){
    $(window).scroll(function () {
      var pixelsScrolled = $(window).scrollTop();
      for (resultCard in resultList()) {
        var resultOffset = $(resultList()[resultCard].idSelector()).offset().top;

        if (resultOffset - pixelsScrolled < 60 && resultOffset - pixelsScrolled > -60){
          OpenInfowindowForMarker(resultCard);
          //console.log(resultCard);
        }


      }

    });
  }

  // force scroll the resultCards in the DOM to the top

  function forceTop(){
    $('html, body').animate({
        scrollTop: $('body').offset().top + 137
      }, 300);
  }
