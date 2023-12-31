import { render } from '@wordpress/element';
import GoogleMapFrontend from './render-maps-frontend';


// render on page load
document.addEventListener('DOMContentLoaded', () => {
  const starRatingItems = document.querySelectorAll('.zolo-google-map');
  if (starRatingItems.length) {
    starRatingItems.forEach((item) => {
      const latitude = item.dataset.latitude;
      const longitude = item.dataset.longitude;
      const height = item.dataset.height;
      const apiKey = item.dataset.apikey;
      const language = item.dataset.language;
      const zoom = item.dataset.zoom;

      const position = { lat: latitude, lng: longitude };
      const attributes = { latitude, longitude, height, apiKey, language, zoom }
      console.log('attributefs', typeof attributes);

      render(<GoogleMapFrontend
        center = { position }
        zoom = { zoom }
        apiKey = { apiKey }

      />, item);
    });
  }
});
