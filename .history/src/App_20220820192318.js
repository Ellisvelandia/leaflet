import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import

const center = [4.13384, -74.71967];
export default function App() {
  return <MapContainer center={center} zoom={10}  style={{width:'100vw', height: '100vh'}}>

  </MapContainer>;
}
