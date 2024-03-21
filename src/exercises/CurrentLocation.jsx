import React, { useEffect, useState } from "react";

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (e) => {
        setError(e.message);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const clearLocation = () => {
    setLocation(null);
  };

  return { location, getCurrentLocation, clearLocation, error, loading };
}

export default function CurrentLocation() {
  const { location, getCurrentLocation, clearLocation, error, loading } =
    useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <button onClick={clearLocation}>Clear Location</button>
        </div>
      ) : (
        <button onClick={getCurrentLocation}>Get Current Location</button>
      )}
    </div>
  );
}
