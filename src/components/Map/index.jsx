import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import icon from '../../images/icon-location.svg'


function Map({ location }){

  const IconLocation = new L.Icon({
    iconUrl: icon,
    iconSize: [45, 55], // tamanho do icone
    iconAnchor: [20, 51], // ponto do ícone que corresponderá à localização do marcador
    popupAnchor: [0, -51] // ponto a partir do qual o pop-up deve abrir em relação ao iconAnchor                                
  });

  function ChangeView(coords) { //função para chamar a render de um "novo mapa" após requisição por IP
    const map = useMap();
    map.setView(coords.center, 15); //objeto com localização / zoom
    return null;
  }
    
       
    return(
   <div style={{overflow:"scrollY"}}>
    <MapContainer center={location.location ? [location.location.lat , location.location.lng] : [-23.5489, -46.6388]} zoom={15} scrollWheelZoom={false} style={{ height: "100%" , width: "100%", position: "absolute"}}>
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        />

        <ChangeView center={location.location ? [location.location.lat , location.location.lng] : [-23.5489, -46.6388]} />
  
        <Marker position={location.location ? [location.location.lat , location.location.lng] : [-23.5489, -46.6388]} icon={IconLocation}>
         
        </Marker>
      </MapContainer>
       </div>
    )
}


export default Map;
