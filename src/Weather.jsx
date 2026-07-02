 import { useState } from "react"
import Atoms from "./Atoms.jsx"
 import Inputsection from "./Inputsection.jsx"
import "./Weather.jsx"
import "./Weather.css"
import CloudIcon from '@mui/icons-material/Cloud';
export default function Weather(){
    let [weather, setWeather]=useState({
         city:"New Delhi",
         Temperature:45,
        Humidity: 54,
        Feelslike: 34,
        Wind: 34,
    })
    function updatedata(result){
        setWeather(result)
    }
    return( <div> 
          
       
   
        <h1 className="adjust"><big><big><bigger> <b> <CloudIcon fontSize="large"/>    SkyCast</b></bigger></big></big></h1>
        
        <Inputsection updatedata={updatedata}/>
        <Atoms res={weather}/>
        {weather. Temperature>35?(<img src="https://static.vecteezy.com/system/resources/thumbnails/056/657/274/small_2x/a-serene-landscape-showcasing-a-vibrant-sunset-over-a-calm-river-surrounded-by-lush-greenery-photo.JPG"></img>):
        weather.Temperature<30?(<img src="https://wallpaperaccess.com/full/1254037.jpg"></img>):<img src="https://tse4.mm.bing.net/th/id/OIP.iOzSOztquQUHwIIZ894csAHaEJ?pid=Api&h=220&P=0"></img>
        }
           </div> )
}