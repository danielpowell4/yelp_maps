/*
 *   -------------------------------------------------------------------------
 *          This is the data for an errorMessage
 *   -------------------------------------------------------------------------
 */
var errorResponses = [{

    'id': '12309120',
    'name': "OH NO!!",
    'snippet_text': "You're yelp request didn't go through. Please try again later, or just hang out with the crew.",
    'image_url': 'http://41.media.tumblr.com/1afb893857c5205fc19341c1c034ab70/tumblr_nye0u9CZBd1udod9xo1_1280.jpg',
    'rating_img_url': 'http://41.media.tumblr.com/1afb893857c5205fc19341c1c034ab70/tumblr_nye0u9CZBd1udod9xo1_1280.jpg',
    'address1': '2950 Camozzi Rd',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 814 0087',
    'url': 'www.revelstokemountainresort.com/',
    'location': {
        'coordinate': {
            'latitude': 50.962,
            'longitude': -118.216,
        },
        'display_address': ['2955 Ski Town Canada'],

    }
}, {
    'id': '12309120',
    'name': "Beacon's House",
    'snippet_text': "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'image_url': 'http://36.media.tumblr.com/170b376be332902fd8365a6db73b4164/tumblr_nyv6efMxPM1udod9xo1_1280.jpg',
    'address1': '2950 Camozzi Rd',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 814 0087',
    'url': 'www.revelstokemountainresort.com/',
    'location': {
        'coordinate': {
            'latitude': 50.9583028,
            'longitude': -118.1637752,
        },
        'display_address': ['2950 Camozzi Rd'],

    }

}, {
    'id': '12309120',
    'name': "Artie's House",
    'snippet_text': "Artie has an abode to be ado#EE8060. It's like nothing you've ever experienced. Not only does it have year round views of Canada's inc#EE8060ible Glacier National Park, but it is also has a pool. Artie is sure to have his humans keep a stockpile of treats always on the ready.",
    'image_url': "https://s-media-cache-ak0.pinimg.com/originals/0d/80/1e/0d801ec8b8d40c12e67d4dffb994d31d.jpg",
    'address1': '23 TransCanada Highway',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 837 7500',
    'url': 'pc.gc.ca',

    'location': {
        'coordinate': {
            'latitude': 51.209417,
            'longitude': -117.723987,
        },
        'display_address': ['23 TransCanada Highway'],

    }

}, {
    'id': '12309120',
    'name': "Beacon's House #2",
    'snippet_text': "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'image_url': 'http://36.media.tumblr.com/170b376be332902fd8365a6db73b4164/tumblr_nyv6efMxPM1udod9xo1_1280.jpg',
    'address1': '2950 Camozzi Rd',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 814 0087',
    'url': 'www.revelstokemountainresort.com/',


    'location': {
        'coordinate': {
            'latitude': 50.9583028,
            'longitude': -118.1637752,
        },
        'display_address': ['2950 Camozzi Rd'],

    }

}, ];

var noMatchFilterResponse = [{

    'id': '12309120',
    'name': "OH NO!!",
    'snippet_text': "No titles matched in these results. We only show the top 15 results from Yelp based on ratings. Try another search. There's totally something out there.",
    'image_url': 'http://41.media.tumblr.com/1afb893857c5205fc19341c1c034ab70/tumblr_nye0u9CZBd1udod9xo1_1280.jpg',
    'rating_img_url': 'http://36.media.tumblr.com/170b376be332902fd8365a6db73b4164/tumblr_nyv6efMxPM1udod9xo1_1280.jpg',
    'address1': '2950 Camozzi Rd',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 814 0087',
    'url': 'www.revelstokemountainresort.com/',
    'location': {
        'coordinate': {
            'latitude': 50.962,
            'longitude': -118.216,
        },
        'display_address': ['2955 Ski Town Canada'],

    }
}];

var response = [{
    'id': '12309120',
    'name': "Beacon's House",
    'snippet_text': "Beacon has a world class home. If it is found to be clean, it is shiny than the Trump towner and is filled with an infinite amount of treats as to attract a large amount of puppy friends. In the summer it is often hosting a BBQ and other lustrious affairs.",
    'image_url': 'http://36.media.tumblr.com/170b376be332902fd8365a6db73b4164/tumblr_nyv6efMxPM1udod9xo1_1280.jpg',
    'address1': '2950 Camozzi Rd',
    'cityState': 'Revelstoke, BC',
    'display_phone': '250 814 0087',
    'url': 'www.revelstokemountainresort.com/',
    'location': {
        'coordinate': {
            'latitude': 50.9583028,
            'longitude': -118.1637752,
        },
        'display_address': ['2950 Camozzi Rd'],

    }

}];

/**
 *   --------------------------------------------------------------------
 *     placeCard is a data object used to display results in the view
 *   --------------------------------------------------------------------
 **/

var placeCard = function(data) {

    var that = this;
    this.name = ko.observable(data.name);
    this.id = ko.observable(data.id);
    this.idSelector = ko.computed(function() {
        return "#" + data.id;
    });
    this.description = ko.observable(data.snippet_text);
    this.imgSrc = ko.computed(function() {
        return data.image_url.replace('ms.jpg', 'l.jpg');
    });
    this.imgAltTag = ko.computed(function() {
        return 'Photo of ' + data.name;
    });
    this.address1 = ko.observable(data.location.display_address[0]);
    this.city = ko.observable(data.location.city);
    this.state = ko.observable(data.location.state_code);
    this.zip = ko.observable(data.location.postal_code);
    this.address2 = ko.computed(function() {
        return that.city() + ", " + that.state() + " " + that.zip();
    });
    this.phone = ko.observable(data.display_phone);
    this.webURL = ko.observable(data.url);
    this.location = {
        coordinate: {
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
    this.googleDirections = ko.computed(function() {
        return "//google.com/maps?q=" + data.location.display_address[0] + '+' + data.location.city + '+' + data.location.state_code;
    });
    this.facebookShare = ko.computed(function() {
        return "//www.facebook.com/sharer/sharer.php?u=" + data.url;
    });
    this.twitterShare = ko.computed(function() {
        return "//twitter.com/intent/tweet?text=OMG " + data.name + " is an awesome spot for " + searchFor() + " in " + searchNear() + "&amp;url=" + data.url + ";via=dangerdan";
    });
};

/* ---  resultList is the placeCards' holder --- */
var resultList = ko.observableArray([]);
var originalList = ko.observableArray([]);

/*
 *   -----------------------------------------------------------------
 *     easily recognized function that performs ajax request to yelp
 *   -----------------------------------------------------------------
 */

function updateYelpResults() {
    yelpAjax(searchFor(), searchNear()); // get all the needed info
}

/**  Hide search results
 *
 */

function hideYelpResults() {
    $('.yelp-search-results').toggleClass('hidden');
}

/*
 *   -------------------------------------------------------------------------
 *      ViewModel, binding and DOM input elements in the form of observables
 *   -------------------------------------------------------------------------
 */

var searchFor = ko.observable("Pizza"); // form Yelp Search Form with prepopulated placeholder
var searchNear = ko.observable("80210"); // form Yelp Search Form with prepopulated placeholder

var filterField = ko.observable();

/*
 *   -------------------------------------------------------------------------
 *      The filter and functions
 *   -------------------------------------------------------------------------
 */

function filterInputField() {
    // ensure emtpy lists
    nameList = []; // for names
    filteredList = []; // for matches

    filterField(filterField().toLowerCase()); //  force the case on the search

    for (var card in resultList()) {
        nameList.push({
            'index': card, // store index
            'name': resultList()[card].name().toLowerCase(), // grab name as string
            'description': resultList()[card].description().toLowerCase() // grabs description as string
        });
    }

    for (var name in nameList) {
        if (nameList[name].name.includes(filterField()) || nameList[name].description.includes(filterField())) { // if a name or description contains the search variable...
            filteredList.push(resultList()[nameList[name].index]); // put it in filtered List
        }
    }

    if (filteredList.length >= 1) { // if something in filtered List
        resultList(filteredList); // put that on the board + map
        prepMap();
    } else { // otherwise
        /* ------  Throw error message ------ */

        /*  ---  Clean up the old lists ---  */
        resultList.removeAll(); // empty the resultList
        clearAllMarkers(); // clears marker array

        /*  ---  Display the error message + Beacon  ---  */
        resultList.push(new placeCard(noMatchFilterResponse[0]));

        /*  ---  clean up the view  ---  */
        initMap(); // refresh and reconstruct map
        OpenInfowindowForMarker(0); // open first infoWindow
        forceTop(); // ensure DOM is scrolled to top
    }

};

var ViewModel = function() {
    var self = this;
};

/** ---------- filter functions --------------------- **/

function prepMap() {
    clearAllMarkers(); // empty current markers
    initMap(); // refresh and reconstruct map
    OpenInfowindowForMarker(0); // open first infoWindow
    forceTop(); // ensure DOM is scrolled to top
}

function flipCards() {
    resultList(resultList().reverse());
    prepMap();
}

function sortABC() {
    resultList(resultList().sort(function(left, right) {
        return left.name() == right.name() ? 0 : (left.name() < right.name() ? -1 : 1);
    }));
    prepMap();
}

function sortStars() {
    resultList(resultList().sort(function(left, right) {
        return left.stars.count() == right.stars.count() ? 0 : (left.stars.count() < right.stars.count() ? -1 : 1);
    }));
    resultList(resultList().reverse());
    prepMap();
}

function resetList() {
    resultList(originalList());
    prepMap();
}

ko.applyBindings(new ViewModel());


/*
 *   ----------------------------------------------------
 *     The following functions handle requests to Yelp
 *   ----------------------------------------------------
 */

function yelpAjax(searchFor, searchNear) {

    /*
     *	Keys and other tokens needed to access the Yelp API via OAuth
     *	In a non-Udacious scenario this would have to be moved
     * to a server side script and therefore actually be "secret"
     */

    var auth = {
        consumerKey: "2M-JWI9l8UBCt3vm0R6vZg",
        consumerSecret: "2TIm_ve4y6unTQR2D1HGnWTjFOM",
        accessToken: "p44DAD9S6MecSv66hmrdR3qdJZhVkg7o",
        accessTokenSecret: "rhnGNKjrDKMLZT0aRET8qIA-aWQ",
        serviceProvider: {
            signatureMethod: "HMAC-SHA1" // found here https://www.yelp.com/developers/documentation/v2/authentication
        }
    };

    /*
     *	Grab the "secret" part of the auth keys and put them in an object
     * that will then be passed on to the coming OAuth.SignatureMethod
     */

    var accessor = {
        consumerSecret: auth.consumerSecret,
        tokenSecret: auth.accessTokenSecret
    };

    /*
     *	Create an array of parameters to handoff to message object that follows
     * This helps keep things more bite-sized...
     */

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



    /*
     *	This message object is to be fi#EE8060 to Yelp as part of then
     *  OAuth.setTimestampAndNonce TODO: someday make this server-side
     */

    var message = {
        'action': 'http://api.yelp.com/v2/search',
        'method': 'GET',
        'parameters': parameters
    };


    /*
     *	Vitrually sign and send things as part of OAuth JS Magic
     */

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);
    var parameterMap = OAuth.getParameterMap(message.parameters);
    yJax(message.action, parameterMap);

}

/*
 *   Ajax OAuth method GETs data from Yelp API
 */

function yJax(url, yData) {
    $.ajax({
        'timeout': 3000,
        'type': 'GET',
        'url': url,
        'data': yData,
        'dataType': 'jsonp',
        'global': true,
        'cache': true,
        'jsonpCallback': 'cb',
        'success': function(data) {
            makeYelpList(data);

        },
        'error': function() {
            makeErrorList();
            alert("oh no! the yelp request failed. Please try again later.");
        },
    });
}

/*
 *   --------------------------------------------------------
 *       Changes out the resultList with a new yelp results
 *   --------------------------------------------------------
 */

function makeYelpList(d) {
    response = d.businesses; // push ajax response to the global var 'response'

    /*  ---  Clean up the old lists ---  */

    resultList.removeAll(); // empty the resultList
    originalList.removeAll();
    clearAllMarkers(); // clears marker array

    /*  ---  Display the search results  ---  */

    response.forEach(function(place) { // place cards into observables
        resultList.push(new placeCard(place));
        originalList.push(new placeCard(place));
    });

    scrollingTriggersMarkers(); // activate scroll position monitor triggers
    initMap(); // refresh and reconstruct map
    OpenInfowindowForMarker(0); // open first infoWindow
    forceTop(); // ensure DOM is scrolled to top
}

function makeErrorList() {
    /*  ---  Clean up the old lists ---  */
    resultList.removeAll(); // empty the resultList
    clearAllMarkers(); // clears marker array

    /*  ---  Display the error message + Beacon  ---  */
    errorResponses.forEach(function(place) {
        resultList.push(new placeCard(place));
    });

    /*  ---  clean up the view  ---  */
    initMap(); // refresh and reconstruct map
    OpenInfowindowForMarker(0); // open first infoWindow
    forceTop(); // ensure DOM is scrolled to top
}

/*
 *   -------------------------
 *     Inital Call to Yelp
 *   -------------------------
 */

yelpAjax(searchFor(), searchNear()); // onload initalize with starting Yelp Results


/*
 *   -------------------------------------------------------------------------
 *      This section handles requests to Google Maps and the related markers
 *   -------------------------------------------------------------------------
 */

/*  ---  google map keys ---  */
var googleMapsAPIKey = 'AIzaSyClMls0bXZ3jgznlsLiP0ZgRrzSgUGFMbU';
var googleMapsgeocodeKey = 'AIzaSyBEXHFmzvonWnDvII96o0Zx8Z--i64lArA';

/*  ---  var to track data set ---  */
var currentMarkers = [];

/*  ---  clear currentMarkers set ---  */
function clearAllMarkers() {
    currentMarkers = [];
}


/*
 *  ---------------------------------------------------------------
 *     build the map and place markers, listeners and triggers
 *  ---------------------------------------------------------------
 */
var map;

function initMap() {

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: response[0].location.coordinate.latitude - mapShift.right,
            lng: response[0].location.coordinate.longitude - mapShift.up
        },
        scrollwheel: false,
        zoom: 12,
        mapTypeControl: false
    });
    // set markers with placeholding copy
    setMarkers(map, resultList());
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });

    reformatOnSize(); // for map
    $('#map').css('position: absolute');
    forceTop();
}

/*  ---  define icons used for markers ---  */

var markerIcon = {
    active: {
        path: "M10,0.5c2.7-0.1,6.6,1.8,7.1,7c0.4,5.2-7.1,11.6-7.1,11.6l0,0c0,0-7.5-6.4-7.1-11.6C3.4,2.3,7.2,0.5,10,0.5",
        fillColor: '#FFF',
        fillOpacity: 0.8,
        strokeWeight: 4,
        strokeColor: '#0BA',
        scale: 2.5,
    },
    resting: {
        path: "M10,0.5c2.7-0.1,6.6,1.8,7.1,7c0.4,5.2-7.1,11.6-7.1,11.6l0,0c0,0-7.5-6.4-7.1-11.6C3.4,2.3,7.2,0.5,10,0.5",
        fillColor: '#EE8060',
        fillOpacity: 0.6,
        strokeWeight: 4,
        strokeColor: '#fff',
        scale: 2.5,
    }
};

/*  ---  define mapShift to ensure the markers are  ----
    ---  staged on the right side of the view window ---  */

var mapShift = {
    right: 0.08,
    up: 0.04
};



/*
 *  -----------------------------------------------------------------------------
 *     Loop through the markers, place them on the map with needed functionality
 *  ------------------------------------------------------------------------------
 */

function setMarkers(map, points) {

    /*  ---  function needed for cleaning up infowindows ---  */
    function hideInfoWindowCloseControl() {
        //  $(".gm-style-iw").next("div").css('display', 'none'); // this function gets rid of close btn in infowindows
        // udacity doesn't like it for this project so having an x is fine
    }

    /*  ---  function gives all markers resting icon and a base layering ---  */
    function resetMarkerIcons() {
        for (var i = 0; i < currentMarkers.length; i++) {
            currentMarkers[i].setIcon(markerIcon.resting);
            currentMarkers[i].setZIndex(4);
            currentMarkers[i].setAnimation(null); // turn BOUNCE Animation off
        }
    }

    /*  ---  loop through placeCards and extract marker-related pieces ---  */
    for (var point in points) {
        var place = points[point];
        var siteLatLng = new google.maps.LatLng(place.location.coordinate.latitude, place.location.coordinate.longitude);
        var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            clickable: true,
            animation: google.maps.Animation.DROP, // TODO change to something else?
            icon: markerIcon.resting,
            title: place.marker.title,
            phone: place.marker.phone,
            imgSrc: place.marker.imgSrc,
            description: place.marker.description,
            lat: place.location.coordinate.latitude,
            lng: place.location.coordinate.longitude,
            idSelector: place.marker.idSelector,
            stars: place.marker.stars,
            windowContent: '<div class="infowindow-title">' + place.marker.title + '</div><br/><img style="max-width: 96px; height: auto" src="' + place.marker.stars + '"></img>',
        });

        /*  ---  push marker to currentMarkers ---  */
        currentMarkers.push(marker);

        /*
         *  -------------------------------------------------------
         *    event listeners for markers that set up infowindows
         *  -------------------------------------------------------
         */

        /*  ---  click ---  */
        google.maps.event.addListener(marker, "click", function(event) {
            resetMarkerIcons(); // put other markers back to resting state
            infowindow.setContent(this.windowContent); // set infowindow Content
            infowindow.open(map, this); // open the infowindow
            this.setAnimation(google.maps.Animation.BOUNCE); // bounce on click
            hideInfoWindowCloseControl(); // hide infoWindow close control
            map.panTo({
                lat: (this.lat - mapShift.up),
                lng: (this.lng - mapShift.right)
            }); // center map to marker with shift for search
            $('html, body').animate({
                scrollTop: $(this.idSelector).offset().top - (20 + scrollAdjustment)
            }, 100); // scroll to active placeCard in the DOM
            this.setIcon(markerIcon.active); // change icon to active
            this.setZIndex(5); // bring marker to top layer
        });

        /*  ---  mouseover ---  */
        google.maps.event.addListener(marker, "mouseover", function(event) {
            resetMarkerIcons(); // put other markers back to resting state
            infowindow.setContent(this.windowContent); // set infowindow Content
            infowindow.open(map, this); // open the infowindow
            hideInfoWindowCloseControl(); // hide infoWindow close control
            this.setIcon(markerIcon.active); // change icon to active
            this.setZIndex(5); // bring marker to top layer
        });

        /*  ---  doubleclick (used for DOM scroll trigger) ---  */
        google.maps.event.addListener(marker, "dblclick", function(event) {
            resetMarkerIcons(); // put other markers back to resting state
            map.panTo({
                lat: (this.lat - mapShift.up),
                lng: (this.lng - mapShift.right)
            }); // center map to marker with shift for search
            infowindow.setContent(this.windowContent); // set infowindow Content
            infowindow.open(map, this); // open the infowindow
            hideInfoWindowCloseControl(); // hide infoWindow close control
            this.setIcon(markerIcon.active); // change icon to active
            this.setZIndex(5); // bring marker to top layer
        });

    }
    forceTop(); // scroll DOM back to top
}

/*  ------------------------------------------------------------------------
 *   Section monitors the DOM scrolling and trigger events when appropriate
 *  ------------------------------------------------------------------------
 */

/*  ---  pull trigger for a specific marker ---  */
function OpenInfowindowForMarker(index) {
    google.maps.event.trigger(currentMarkers[index], 'dblclick');
}

function openMarker(index) {
    OpenInfowindowForMarker(index);
}

/*  ---  compare window scroll count to offsets of each placeCard and    ---
    ---  trigger the appropriate marker as the card passes through view  --- */

var scrollAdjustment = 0; // zero on standard desktop view

function scrollingTriggersMarkers() {
    $(window).scroll(function() { // as user scrolls
        var pixelsScrolled = $(window).scrollTop() + scrollAdjustment; // store distance scrolled
        for (var resultCard in resultList()) { // for each placeCard
            var resultOffset = $(resultList()[resultCard].idSelector()).offset().top; // store the offset of the card
            if (resultOffset - pixelsScrolled < 60 && resultOffset - pixelsScrolled > -60) { // check if two distances are close
                OpenInfowindowForMarker(resultCard); // open Infowindow for placeCard being viewed in DOM
            }
        }
    });
}

/** ----------------------------------------------------------------------------
 *    Handles changing mapShift vars in responsive manner using matchMedia
 * ----------------------------------------------------------------------------
 */

function reformatOnSize() {
    if (window.matchMedia("(min-width: 680px)").matches) { // for "big" screen
        mapShift = {
            right: 0.08,
            up: 0.04
        };
        scrollAdjustment = 0;
        map.setZoom(12);
        $('#map').removeClass("fixed");
    } else if (window.matchMedia("(orientation: portrait)").matches) { // small screen portrait
        mapShift = {
            right: -0.01,
            up: 0.01
        };
        scrollAdjustment = 260;
        map.setZoom(11);
    }
    else { // small screen landscape
      mapShift = {
          right: 0.09,
          up: 0
      };
      scrollAdjustment = 0;
      map.setZoom(11);
      $('#map').removeClass("fixed");
    }
}


$(window).resize(function() {
    reformatOnSize();
});

/*  ---  force scroll the DOM to the top --- */
function forceTop() {
    $('html, body').animate({
        scrollTop: $('body').offset().top,
    }, 200);
}

/*  ---  googleError in case it breaks --- */
function googleError() {
    alert("Google Maps did not load");
}
