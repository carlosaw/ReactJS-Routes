import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from './pages/About';

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