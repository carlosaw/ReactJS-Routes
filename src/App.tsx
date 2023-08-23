import { MainRoutes } from './routes/MainRoutes';

const App = () => {
  
  return (
    <div className="container mx-auto">
      <header>
        <h1>Título do site</h1>
      </header>      
      <hr/>

      <div className="py-4">
        <MainRoutes />
      </div>
      <hr/>
      <footer>
        <h3>Todos os direitos reservados.</h3>
      </footer>
            
    </div>
  ); 
}

export default App;