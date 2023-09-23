import './App.css';
import Humedad from './componentes/humedad';
import IndiceUV from './componentes/indiceUV';
import Viento from './componentes/viento';
import AmanecerAtardecer from './componentes/amanecerAtardecer';
import Visibilidad from './componentes/visibilidad';
import CalidadDelAire from './componentes/calidadDelAire';
import Maxima from './componentes/maxima';
import Minima from './componentes/minima';
import TemperaturaActual from './componentes/temperaturaActual';

function App() {
  return (
    <div className="App">

    <div id='primerfila'>
      <IndiceUV />
      <Viento/>
      <Humedad/>
      <TemperaturaActual/>
    </div>

    <div id='segundafila'>
      <AmanecerAtardecer/>
      <Visibilidad/>
      <CalidadDelAire/>
      <Maxima/>
      <Minima/>
    </div>

    </div>
  );
}

export default App;
