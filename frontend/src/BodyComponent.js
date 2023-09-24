import React, { useEffect, useState } from 'react';
import grafo from './dfs';

const BodyComponent = () => {
  const [vertices, setVertices] = useState([]); // Estado para armazenar os vértices do grafo

  useEffect(() => {
    const grafoVertices = grafo.getVertices();
    setVertices(grafoVertices);
  console.log(vertices);
  }, []);

  const p1Style = {
    color: '#020E7D',
    textAlign: 'center',
    fontFamily: 'Jockey One',
    fontSize: 30,
  };

  const p2Style = {
    color: '#105013',
    textAlign: 'center',
    fontFamily: 'Jockey One',
    fontSize: 30,
  };

  return (
    <div className="body">
      <p style={p1Style} className="centered-text"><strong>Selecione a matéria de Software</strong></p>
      <p style={p2Style} className="centered-text"><strong>que você deseja analisar a continuação do fluxo</strong></p>

      <select className="custom-select">
        {vertices.map((vertice, index) => (
          <button>
          <option key={index} value={vertice}>
            {vertice}
          </option>
          </button>
        ))}
      </select>

      <div className="rounded-box">
        {/* Conteúdo da caixa */}
      </div>
    </div>
  );
};

export default BodyComponent;