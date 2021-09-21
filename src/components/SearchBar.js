// import arrow from '../images/icon-arrow.svg'
import IpTracker from './IpTracker'


export const SearchBar = ({
    ipAddress, 
    setipAddress,
    city,
    setCity,
    timeZone,
    setTimezone,
    isp,
    setIsp,
    inputText,
    setInputText,
    latitude,
    setLatitude,
    longitude,
    setLongitude
    }) => {

   

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        if (inputText) {
          setipAddress(inputText);
        }
        e.preventDefault()
    }
        
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={inputTextHandler}
                className='searchBar' 
                type='text' 
                placeholder='' 
                
            ></input>
            <IpTracker 
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
            </form>
            
        
    )
}

export default SearchBar