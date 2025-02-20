import React, { useState, useEffect } from "react";
import { InfoIcon } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ExploreDestinations = ({ currentLocation }) => {
  const [userLocation, setUserLocation] = useState(null);

  // Get user's location when component mounts
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }, []);

  return (
    <div className="mt-10 w-full max-w-5xl">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200 mr-2">
          Find cheap flights from {currentLocation} to anywhere
        </h2>
        <InfoIcon className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex space-x-2 mb-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {currentLocation}
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          New York
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          London
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          Prague
        </span>
      </div>

      <div className="relative">
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
          <MapContainer
            center={userLocation || [20, 0]} // Default center if location not available
            zoom={userLocation ? 5 : 2} // Zoom in if location is found
            className="h-64 w-full"
            style={{ borderRadius: "10px" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & contributors'
            />

            {/* Marker for User's Location */}
            {userLocation && (
              <Marker position={[userLocation.lat, userLocation.lng]}>
                <Popup>Your Location</Popup>
              </Marker>
            )}

            {/* Example Marker (Mount Kilimanjaro) */}
            <Marker position={[28.6139, 77.2090]}>
                <Popup>Delhi</Popup>
                </Marker>

          </MapContainer>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
            Explore destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;
