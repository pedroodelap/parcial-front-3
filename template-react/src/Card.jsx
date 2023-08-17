import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Tu cancion y artista favorito es:</h2>
      <p>Cancion: {input1}</p>
      <p>Artista: {input2}</p>
    </div>
  );
};

export default Card;
