 
 
import { useState } from 'react';
import "./Inputsection.css"
export default function Inputsection( {updatedata}){
    let[city,setCity]=useState("")
    function cityname(event){
    setCity(event.target.value)
     
    }

    let url="https://api.weatherapi.com/v1/current.json?key=24ea6ffef48748f2ad940422262806"
     let  API_KEY="39fcd336280845559a4111618262706"

    let data=async ()=>{
    let takedata= await fetch(`${url}&q=${city}&aqi=yes&units=metric`);
    let response= await takedata.json();
    // console.log(response);
    let result={
         city: response.location.name,
        Temperature:response.current.temp_c,
        Humidity:response.current.humidity,
        Feelslike:response.current.feelslike_c,
        Wind:response.current.wind_kph,
    }
    console.log(result)
    return result;
    }
     let displaycity=async (event)=>{
        event.preventDefault();
        console.log(city)
        setCity("")
         let datas=await data()
         updatedata(datas);
    }
    return(<div>
         <form>
             <input placeholder='Search city...' type='text' 
             value={city} onChange={cityname}></input>
       
      <button  onClick={displaycity}  >Search</button>
       
             
         </form>
    </div>)
}