import '../../node_modules/leaflet/dist/leaflet.js';

var map = L.map('mymap').setView([48.85, 2.35], 12.5);
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//* */
var stadiumIcon = L.icon({
    iconUrl: 'assets/imgs/StadiumMarker.svg',

    iconSize: [48, 95], 
});

var sportFootIcon = L.icon({
    iconUrl: 'assets/imgs/SportFootMarker.svg',

    iconSize: [48, 95], 
});

var swimmingIcon = L.icon({
    iconUrl: 'assets/imgs/SwimmingMarker.svg',

    iconSize: [48, 95],
});

//** Icon Marker */
var stadium1 = L.marker([48.856733165553415, 2.3523920390334476], { icon: stadiumIcon }).addTo(map).on('click', onClick).bindPopup("TEST",{className: 'custom-style'});;
var stadium2 = L.marker([48.83875206325527, 2.378384466017137], { icon: stadiumIcon}).addTo(map).on('click', onClick);
var stadium3 = L.marker([48.86501913060675, 2.321809123667704], { icon: stadiumIcon }).addTo(map).on('click', onClick);


var sportFoot1 = L.marker([48.83950057766891, 2.3797041128357037], { icon: sportFootIcon }).addTo(map).on('click', onClick);
var sportFoot2 = L.marker([48.84696932095714, 2.2544237635759394], { icon: sportFootIcon }).addTo(map).on('click', onClick);

var swim1 = L.marker([48.89548191718493, 2.2291156736958513], { icon: swimmingIcon }).addTo(map).on('click', onClick);
var swim2 = L.marker([48.92392722417749, 2.35472254525514], { icon: swimmingIcon }).addTo(map).on('click', onClick);



//**TEST */

function onClick(event) {
    console.log('test clique'+ event.latlng.toString());
}
//**Circle marker */
{
//var lille = L.circle([50.62979631507327, 3.057067555387757], 5000, {
//    color: 'purple',
//    fillColor: '#f03',
//    fillOpacity: 0.1
//}).addTo(map);
}
//**Geolocalisation */
{
//if (!navigator.geolocation) {
//    console.log('Geolocation is not supported by your browser.');
//}
//else {
//    navigator.geolocation.getCurrentPosition(function (position) {
//        marker.setLatLng([position.coords.latitude, position.coords.longitude]);
//        map.flyTo([position.coords.latitude, position.coords.longitude], 16);
//    }, function (error) {
//        console.error('Error getting location:', error);
//    });
}