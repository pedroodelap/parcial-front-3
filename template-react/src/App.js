  import React, { useState } from 'react';
  import './App.css'; 
  import Card from './Card'; 
  import './styles.css'

  const Form = () => {
    const [cancion, setCancion] = useState('');
    const [artista, setArtista] = useState('');
    const [error, setError] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [submittedCancion, setSubmittedCancion] = useState('');
    const [submittedArtista, setSubmittedArtista] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();

      if (cancion.trim().length < 3 || cancion.startsWith(' ') || artista.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        setShowCard(false);
      } else {
        setError('');
        setShowCard(true);
        setSubmittedCancion(cancion);
        setSubmittedArtista(artista);
      }

    };

    return (
      <div className="Form"> {/* Agrega la clase CSS Form */}
        <h1>Hola, soy MusiBot. Dime qué canción y artista te gusta escuchar.</h1>
        <form onSubmit={handleSubmit}>
        <div>
    <label htmlFor="cancion">Nombre de la canción:</label>
    <input
      type="text"
      id="cancion"
      value={cancion}
      onChange={(e) => setCancion(e.target.value)}
      className={error && (cancion.trim().length < 3 || cancion.startsWith(' ')) ? 'error' : (showCard && !error ? 'success' : '')}
    />
  </div>
  <div>
    <label htmlFor="artista">Nombre del artista:</label>
    <input
      type="text"
      id="artista"
      value={artista}
      onChange={(e) => setArtista(e.target.value)}
      className={error && artista.length < 6 ? 'error' : (showCard && !error ? 'success' : '')}
    />
  </div>

          <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
        {showCard && !error && (
          <Card input1={submittedCancion} input2={submittedArtista} />
        )}
      </div>
    );
  };

  function App() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }

  export default App;
