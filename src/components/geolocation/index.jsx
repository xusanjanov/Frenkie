import Geolocation from '@react-native-community/geolocation';

const getUserLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log('Latitude:', latitude, 'Longitude:', longitude);
      calculateQiblaDirection(latitude, longitude);
    },
    error => {
      console.error("Geolocation error:", error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};
