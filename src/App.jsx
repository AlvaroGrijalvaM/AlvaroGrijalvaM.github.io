import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Tecnologias from './pages/Tecnologias';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App(){
  return(
    <ThemeProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobre-mi" element={<SobreMi/>}/>
          <Route path="/tecnologias" element={<Tecnologias/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;