import './App.css';
import Header from '../src/components/Header'
import Information from '../src/components/Information'
import background from '../src/images/pattern-bg.png'
import SearchBar from '../src/components/SearchBar'
// import { ReactComponent as Location } from '../src/images/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react';


function App() {
  
  const [ipAddress, setipAddress] = useState('');
  const [location, setLocation] = useState([51.505, -0.09]);

  // Create function that gives location of IP address


  return (
    <div className="App">
      <div className="hero">
        <Header />
        <img src={background} alt='background'></img>
      </div>

<div className="search">
          <SearchBar 
            ipAddress={ipAddress}
            setipAddress={setipAddress}
          /> 
          </div>
      
      <div className='output'>
        <Information 
          header='IP Address'
          output={ipAddress}
        />
        <Information 
          header='Location'
          output='New York'
        />
        <Information 
          header='Timezone'
          output='UTC'
        />
        <Information 
          header='ISP'
          output='Telia'
        />
        
      </div>
   
      
    <MapContainer center={location} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={location}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
