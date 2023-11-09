import './App.css';
import Weather from './componentes/weather';
import { MapContainer } from 'react-leaflet';
import Transito from './componentes/Transito';


  
function App (){
  return(
    <div id='proyectos'>
    <Weather/>
    <Transito/>
    </div>
  )
}


export default App;
