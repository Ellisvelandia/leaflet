import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

const center = [4.13384, -74.71967];
export default function App() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
       url= "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=d6yS6MfdHXOqNKlFs19u"
       attribution=
      />
    </MapContainer>
  );
}
