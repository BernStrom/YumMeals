const localHost = 'http://localhost:5001/yummeals-e8d3d/us-central1';
const liveHost =
  'https://us-central1-yummeals-e8d3d.cloudfunctions.net/placesNearby';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = isDevelopment ? localHost : liveHost;
