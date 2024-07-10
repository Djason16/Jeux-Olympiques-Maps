import '../../node_modules/leaflet/dist/leaflet.js';
import { card } from './html.js'



var map = L.map('mymap').setView([48.85, 2.35], 12.5);
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const leafletMarkerPane = document.getElementsByClassName('leaflet-marker-pane')[0];

const storeCard = document.createElement('div');
storeCard.id = 'storeCard';
storeCard.className = 'storeCard';
leafletMarkerPane.appendChild(storeCard);

let selectedMarker = null;
let selectedLogo = null;


const closeModal = () => {
  if (selectedLogo) {
    selectedLogo.classList.remove('open');
  }
  setTimeout(() => {
    storeCard.classList.remove('open');
    setTimeout(() => {
      console.log(selectedMarker);
      if (selectedMarker) {
        const loc = selectedMarker._icon._leaflet_pos;
        storeCard.style.transform = `translateX(${loc.x}px) translateX(-50%) translateY(${loc.y - 15}px) translateY(-100%)`;

        setTimeout(() => {
          if (selectedMarker._icon) {
            selectedMarker._icon.style.zIndex = 350;
          }
          storeCard.style.display = 'none';
          storeCard.innerHTML = '';
          selectedMarker = null;
          selectedLogo = null;
        }, 150);
      }
    }, 150);
  }, 150);
};


const openModal = (e, marker, record) => {
  selectedMarker = marker;
  storeCard.innerHTML = card(record);
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = 'assets/imgs/info_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png';
  storeCard.appendChild(logo);
  selectedLogo = logo;

  storeCard.style.transform = `translateX(${e.layerPoint.x}px) translateX(-50%) translateY(${e.layerPoint.y - 15}px) translateY(-100%)`;
  storeCard.style.display = 'block';


  selectedMarker._icon.style.zIndex = 900;


  setTimeout(() => {
    storeCard.style.transform = `translateX(${e.layerPoint.x}px) translateX(-50%) translateY(${e.layerPoint.y - 50}px) translateY(-100%)`;
    setTimeout(() => {
      storeCard.classList.add('open');
      setTimeout(() => {
        logo.classList.add('open');
      }, 150);
    }, 150);
  }, 10);
}

map.on('click', closeModal)

const getData = async () => {
  const response = await fetch('https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=20')
  const data = await response.json();

  console.log(data);


  if (data && data.results) {
    data.results.forEach(record => {
      if (record.point_geo) {
        const lat = record.point_geo.lat;
        const lon = record.point_geo.lon;

        const marker = L.marker([lat, lon]).addTo(map);

        marker.on('click', (e) => {
          if (selectedMarker == null || selectedMarker == marker) {
            openModal(e, marker, record);
          } else {
            closeModal();
            setTimeout(() => {
              openModal(e, marker, record);
            }, 500);
          }

        });
      }


    });
  } else {
    console.error('No results found in the API response.');
  }
}


map.on('zoom', () => {
  if (!selectedMarker) return;
  const loc = selectedMarker._icon._leaflet_pos;
  storeCard.style.transform = `translateX(${loc.x}px) translateX(-50%) translateY(${loc.y - 50}px) translateY(-100%)`;
});



// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     map.setView([lat, lon], 13);
//   });
// }

getData();


// Si clique sur le button darkModeButton, tu toggle le site en dark mode en utilsant la classe .invert

const darkModeButton = document.getElementById('darkModeButton');

document.getElementById('darkModeButton').addEventListener('click', () => {
  document.body.classList.toggle('invert');
});