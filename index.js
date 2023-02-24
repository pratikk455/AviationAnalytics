let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: new google.maps.LatLng(31.600222, -85.238308),
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");


  $.getJSON('airport.json', function(json){
    console.log('Test 2');
    for (let i = 0; i < json.length; i++) {
      const latLng = new google.maps.LatLng(json[i]['LAT_DECIMAL'], json[i]['LONG_DECIMAL']);
      new google.maps.Marker({
        scaledSize: new google.maps.Size(0.5, 0.5),
        position: latLng,
        map: map,
      });
    }
    
  });

  // map.data.loadGeoJson('airport.json');

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  // script.src =
    // "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
    // "airport.json";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  console.log("Test");
  // console.log(results);
  // for (let i = 0; i < results.features.length; i++) {
  //   const coords = results.features[i].geometry.coordinates;
  //   const latLng = new google.maps.LatLng(coords[1], coords[0]);

  //   new google.maps.Marker({
  //     position: latLng,
  //     map: map,
  //   });
  // }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;
