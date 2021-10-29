import React from "react";
import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { selectLocation } from "../features/location/locationSlice";

function Location() {
  const locations = useSelector(selectLocation);

  return (
    <>
      {locations.map((loc, index) => (
        <Marker key={index} position={{ lat: loc.lat, lng: loc.lng }} />
      ))}
    </>
  );
}

export default Location;
