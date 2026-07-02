 import "./Atoms.css"
 import SunnyIcon from '@mui/icons-material/Sunny';
 import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Atoms({res}){
     
    return (<div style={{display:"flex", justifyContent:"center"}}> <div className="Atoms">
        <h1><b>{res.city}</b></h1>
        <h1><big><big><big><big>{res.Temperature}&deg;C</big></big></big> </big>  </h1>
       <div className="suhani">  {res.Temperature<30 ?(<p id="cold" className="vinay"><AcUnitIcon  /></p>   ):res.Temperature>35?(<p className="vinay" id="sun"><SunnyIcon /></p>  )  :(<p  id="rain" className="vinay">< ThunderstormIcon /></p> )}
        {res.Temperature<30 ?(<p className="kumar"> Cold weather</p>   ):res.Temperature>35?(<p className="kumar">Hot weather</p>  )  :(<p className="kumar"> Raining weather</p> )}
  </div>
     <div className="subh"> <div className="uma">   <div className="flex"><h3>Humidity <br></br>{res.Humidity}%</h3>
          
         </div>
          <div className="flex"><h3>Wind <br></br>{res.Wind}Km/h</h3>
          
         </div>
          <div className="flex"><h3>Feels like <br></br>{res.Feelslike}&deg;C</h3>
          
         </div></div></div> 
        
        
          </div></div>)
}