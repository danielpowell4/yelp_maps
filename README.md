# yelp_maps
Built on top of the yelp and google maps api, this simple app gives yelp results a sleek new UX

# Directions To View
To view go to http://danielpowell4.github.io/yelp_maps/ or clone a copy of the repo
to your machine and open index.html in your browser of choice

# Overview
This the 5th project in Udacity's Frontend developer nanodegree program

Project requirements can be found here: https://www.udacity.com/course/viewer#!/c-nd001/l-2711658591/m-2629448638

Using the knockoutJS framework, a GET request is sent to the yelp api to retrieve
the top 15 results--sorted by yelp rating--for an item in a specified location.

These results are placed onto a GoogleMaps and shown in placeCards in the DOM.

Additional functionality is added so that the markers are synced with which
result card is most prominent in the DOM and shown to be active after a mouseover
or click.
