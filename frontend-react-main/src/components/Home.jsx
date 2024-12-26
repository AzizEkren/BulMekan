import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import VenueDataService from "../services/VenueDataService";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [coordinate, setCoordinate] = React.useState({ lat: 1, long: 1 });
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const venues = useSelector((state) => state.data);
  const isError = useSelector((state) => state.isError);
  const isSuccess = useSelector((state) => state.isSuccess);
  const isLoading = useSelector((state) => state.isLoading);

  // Kullanıcı girişine göre arama yapmak için mekanları filtreleme
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinate({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  React.useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    VenueDataService.nearbyVenues(coordinate.lat, coordinate.long)
      .then(function (response) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, [coordinate.lat, coordinate.long]);

  // Kullanıcı girişi değiştiğinde searchTerm state'ini güncelle
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        type="text"
        isFocused
        onInputChange={handleInputChange}
        value={searchTerm}
      />
      <hr />
      <div className="row">
        {isError ? (
          <p>Veri alınamadı</p>
        ) : isLoading ? (
          <p>Veriler yükleniyor</p>
        ) : (
          isSuccess && (
            <VenueList venues={Array.isArray(filteredVenues) ? filteredVenues : []} />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
