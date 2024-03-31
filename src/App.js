
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Gamma from './components/Gamma/Gamma';
import Flavonoids from './components/flavnoids/Flavonoids';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Nav/>
     <Routes>
        <Route path="/" element={<Gamma/>}/>
        <Route path="/flav" element={<Flavonoids/>}/>

        <Route/>
    

     </Routes>
     
     </BrowserRouter>


    </div>
  );
}

export default App;
