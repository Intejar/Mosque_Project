import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103, // Your latitude (Example: Dhaka, Bangladesh)
  lng: 90.4125, // Your longitude
};

const GoogleMapComponent = () => {
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Our Location</h2>
      <div className="w-full max-w-4xl mx-auto">
        <LoadScript googleMapsApiKey="AIzaSyCtceAm8Vs1PUXaNLR0rxHaGLw43OoTrYc">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
