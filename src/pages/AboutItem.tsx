import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  }
  const handleHomeButton = () => {
    // let name: string = 'ciclano';
    // navigate(`/about/${name}`);
    navigate('/');
  }

  return (
    <div>
      Página sobre: {params.slug?.toUpperCase()} ({params.slug?.length} letras)
      <button onClick={handleBackButton}>Voltar</button>
      <button onClick={handleHomeButton}>Home</button>       
    </div>
  );
}