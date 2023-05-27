import React from "react"; 
import { Route, Routes } from "react-router-dom";

// Importar componentes 
import Home from "./components/pages/Home";
import Informacion from "./components/pages/Informacion";
import Monitoreo from "./components/pages/Monitoreo";
import Consejos from "./components/pages/Consejos";
import AcercaDe from "./components/pages/AcercaDe";
import Navbar from "./components/navigates/Navbar"

function App() {
  return (
    <>
    
    <Routes className="App">
      <Route path='/' element={<Home />} />
      <Route path='/informacion' element={<Informacion />} />
      <Route path='/monitoreo' element={<Monitoreo />} />
      <Route path='/consejos' element={<Consejos />} />
      <Route path='/acercaDe' element={<AcercaDe />} />
    </Routes>
    </>
  );
}

export default App;
