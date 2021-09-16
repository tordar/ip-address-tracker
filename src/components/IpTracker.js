import $ from 'jquery'
import { env } from 'process';


export const IpTracker = ({
    ipAddress, 
    setipAddress,
    inputText,
    setInputText
    }) => {
    // let output = 0


    console.log('hey')
    var ip = "8.8.8.8";
    var api_key = "";
    $(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: process.env.REACT_APP_IPifyPasskey, ipAddress: ipAddress},
        success: function(data) {
            $("#ip").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
            $("#ip").append("<pre>"+ JSON.stringify(data.ip,"",2)+"</pre>");

        }
    });
    });

     
    return (
        <div id='ip'></div>
    )
}

export default IpTracker