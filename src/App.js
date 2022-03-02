import Navb from "./componentes/Navb/Navb";
import Categores from './componentes/Categores/index'
import Cards from './componentes/Cards/Cards'
import Ptabel from './componentes/Tabels/Ptabel'
function App() {

  const name = 'mobile';
  return (
    <div className="App">
     <Navb/>
     <Categores name={name}/>

      <Ptabel/>
    </div>
  );
}

export default App;
