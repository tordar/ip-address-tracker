import './App.css';
import Header from '../src/components/Header'
import Information from '../src/components/Information'
import SearchBar from '../src/components/SearchBar'
import background from '../src/images/pattern-bg.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('')
  const [ipAddress, setipAddress] = useState(0);
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const [city, setCity] = useState('London');
  const [timezone, setTimezone] = useState('UTC');
  const [isp, setIsp] = useState('Telia');

  return (
    <div className="App">
      <div className="hero">
        <Header />
        <img src={background} alt='background'></img>
      </div>


<div className="search">
          <SearchBar 
            inputText={inputText}
            setInputText={setInputText}
            ipAddress={ipAddress}
            setipAddress={setipAddress}
            city={city}
            setCity={setCity}
            timezone={setTimezone}
            setTimezone={setTimezone}
            isp={isp}
            setIsp={setIsp}
            latitude={latitude}
            setLatitude={setLatitude}
            longitude={longitude}
            setLongitude={setLongitude}
          />
      </div>
      
      <div className='output'>
        <Information 
          header='IP Address'
          output={ipAddress}
        />
        <Information 
          header='Location'
          output={city}
        />
        <Information 
          header='Timezone'
          output={timezone}
        />
        <Information 
          header='ISP'
          output={isp}
        />
      </div>
   
    <MapContainer center={[latitude, longitude]} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[latitude, longitude]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
