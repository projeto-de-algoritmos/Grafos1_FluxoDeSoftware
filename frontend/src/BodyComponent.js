import React, { useEffect, useState } from 'react';
import grafo from './dfs';

const BodyComponent = () => {
  const [vertices, setVertices] = useState([]); // Estado para armazenar os vértices do grafo
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [dfsOutput, setDfsOutput] = useState(''); // Estado para armazenar a saída da função grafo.dfs()

  useEffect(() => {
    const grafoVertices = grafo.getVertices();
    setVertices(grafoVertices);
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

  const handleSelectChange = (e) => {
    setOpcaoSelecionada(e.target.value);
  };

  const handleSearchClick = () => {
    // Aqui você pode adicionar a lógica para lidar com a busca
    console.log("Botão de busca clicado. Opção selecionada:", opcaoSelecionada);

    // Chame a função grafo.dfs() e armazene a saída em uma variável
    const output = grafo.dfs(opcaoSelecionada);
    
    // Exiba a saída no console
    console.log("Saída da função dfs():", output);

    // Atualize o estado com a saída
    setDfsOutput(output);
  };

  return (
    <div className="body">
      <p style={p1Style} className="centered-text"><strong>Selecione a matéria de Software</strong></p>
      <p style={p2Style} className="centered-text"><strong>que você deseja analisar a continuação do fluxo</strong></p>

      <select className="custom-select" value={opcaoSelecionada} onChange={handleSelectChange}>
        {vertices.map((vertice, index) => (
          <option key={index} value={vertice}>
            {vertice}
          </option>
        ))}
      </select>

      <button className="custom-button" onClick={handleSearchClick}>Buscar</button>

      <div className="rounded-box">
        {/* Exiba a saída da função dfs() aqui */}
        {dfsOutput && (
          <div>
            <pre>{dfsOutput}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
