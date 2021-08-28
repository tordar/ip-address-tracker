import './App.css';
import Header from '../src/components/Header'
import Information from '../src/components/Information'
import background from '../src/images/pattern-bg.png'
// import SearchBar from '../src/components/SearchBar'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <img src={background} alt='background'></img>
          
      </div>

{/* <div className="search">
          <SearchBar /> 
          </div> */}
      
    
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
    
      
    </div>
  );
}

export default App;
