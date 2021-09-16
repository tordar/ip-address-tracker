import './App.css';
import Header from '../src/components/Header'
import Information from '../src/components/Information'
import SearchBar from '../src/components/SearchBar'
import background from '../src/images/pattern-bg.png'
// import { ReactComponent as Location } from '../src/images/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  const [ipAddress, setipAddress] = useState(0);
  const [location, setLocation] = useState([51.505, -0.09]);
  const [city, setCity] = useState('London');
  const [timezone, setTimezone] = useState('UTC');
  const [isp, setIsp] = useState('Telia');

  // useEffect(() => {
  //   if(ipAddress !== 0){
  //     setCity = "hello"
  //   }
    
  // });

  // Create function that gives location of IP address

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
          /> 
          {/* <Button /> */}
           <button onClick={() => setCount( count + 1 ) }>You clicked state {count} times</button>
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
