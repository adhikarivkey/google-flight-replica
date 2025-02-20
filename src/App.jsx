import React, { useState, useEffect } from "react";
import FlightSearchForm from "./components/FlightSearchForm";
import ExploreDestinations from "./components/ExploreDestinations";
import FlightDealTools from "./components/Flightdeals";
import FlightInfoDashboard from "./components/FlightInfo";
import FlightSearchTest from "./components/SearchFlightTest";
import images from "./assets/assets";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Loading location...");
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            setCurrentLocation(data.city || data.locality || "Your Location");
          } catch (error) {
            console.error("Error fetching location name:", error);
            setCurrentLocation("Your Location");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setCurrentLocation("Your Location");
        }
      );
    } else {
      setCurrentLocation("Your Location");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center">

        {/* Flight Image (Changes based on Theme) */}
        <img
          src={images["flights_nc_dark.svg"]}
          alt="Flight illustration"
          className="w-[80%] mx-auto h-[299px] object-cover object-center"
        />

        {/* Title Section */}
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-gray-200">
            Flights
          </h1>
        </div>

        {/* Flight Search Form */}
        <FlightSearchForm currentLocation={currentLocation} userCoordinates={coordinates} />

        {/* Explore Destinations Section */}
        <ExploreDestinations currentLocation={currentLocation} />

        {/* Flight Deals & Info */}
        <FlightDealTools />
        <FlightInfoDashboard currentLocation={currentLocation} />
      </div>
    </div>
  );
};

export default App;
