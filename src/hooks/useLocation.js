import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const useLoc = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
    } catch (err) {
      console.log(err);
    }
  };

  //   useEffect(() => {
  //     getLocation();
  //   }, []);

  return [useLoc, location, errorMsg];
};
