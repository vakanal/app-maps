import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { addLocation } from "../features/location/locationSlice";

function Search({ panTo }) {
  const dispatch = useDispatch();

  const searchRef = React.useRef();

  const onSearchLoad = React.useCallback((search) => {
    searchRef.current = search;
  }, []);

  const onPlacesChanged = () => {
    const { lat, lng } = searchRef.current.getPlaces()[0].geometry.location;
    const location = {
      lat: lat(),
      lng: lng(),
    };
    dispatch(addLocation(location));
    panTo(location);
  };

  return (
    <>
      <StandaloneSearchBox
        onLoad={onSearchLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input type="text" placeholder="Search places..." className="search" />
      </StandaloneSearchBox>
    </>
  );
}

Search.propTypes = {
  panTo: PropTypes.func.isRequired,
};

export default Search;
