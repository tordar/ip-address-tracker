import $ from 'jquery'
// import React, { useEffect } from 'react';



export const IpTracker = ({
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
     

    // useEffect(() => {
    //     ipTracker()
    // return () => {
            
    //     }
    // })

    const ipTracker = () => {
        console.log('hey')
        $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: process.env.REACT_APP_IPifyPasskey, ipAddress: inputText},
            success: function(data) {
                console.log(data)
                setipAddress(data.ip);
                setCity(data.location.city)
                setTimezone(data.location.timezone)
                setIsp(data.isp)
                setLatitude(data.location.lat)
                setLongitude(data.location.lng)
            }
        });
        });
    }
 

     
    return (
        <div>
            <button id="ipButton" onClick={ipTracker}>Get IP info</button>
        </div>
    )
}

export default IpTracker