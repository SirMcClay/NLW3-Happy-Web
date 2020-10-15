import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

export const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [38,48],
  iconAnchor: [19, 48],
  popupAnchor: [160, 13],
})