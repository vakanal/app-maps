import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import ClipLoader from "react-spinners/ClipLoader";
import Location from "./Location";
import Search from "./Search";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.389091,
  lng: -5.984459,
};

const options = {
  disableDefaultUI: true,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(9);
  }, []);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={5}
      center={center}
      options={options}
      onLoad={onMapLoad}
    >
      <Location />
      <Search panTo={panTo} />
    </GoogleMap>
  ) : (
    <ClipLoader />
  );
}

export default Map;
