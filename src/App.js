import './App.css';
import Header from '../src/components/Header'
import Information from '../src/components/Information'
import background from '../src/images/pattern-bg.png'
import SearchBar from '../src/components/SearchBar'
// import Map from '../src/components/Map'
// import { ReactComponent as Location } from '../src/images/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <img src={background} alt='background'></img>
          
      </div>

<div className="search">
          <SearchBar /> 
          </div>
      
    
      <div className='output'>
        <Information 
          header='IP Address'
          output='123.43.234'
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
   
      
    <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
