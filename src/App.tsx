import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { AboutPedro } from './pages/AboutPedro';
import { AboutCarlos } from './pages/AboutCarlos';
import { AboutItem } from './pages/AboutItem';

const App = () => {
  
  return (
    <div className="container mx-auto">
      <header>
        <h1>Título do site</h1>
      </header>      
      <hr/>

      <div className="py-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/about/carlos' element={<AboutCarlos />} />
          <Route path='/about/pedro' element={<AboutPedro />} /> */}
          <Route path='/about/:slug' element={<AboutItem />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <hr/>
      <footer>
        <h3>Todos os direitos reservados.</h3>
      </footer>
            
    </div>
  ); 
}

export default App;