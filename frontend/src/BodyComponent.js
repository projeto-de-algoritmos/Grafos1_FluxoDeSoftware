import React, { useEffect, useState } from 'react';
import grafo from './dfs';

const BodyComponent = () => {
  const [vertices, setVertices] = useState([]); // Estado para armazenar os vértices do grafo
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [dfsOutput, setDfsOutput] = useState('');


  useEffect(() => {
    const grafoVertices = grafo.getVertices();
    setVertices(grafoVertices);
  }, []); 
  


  const handleSelectChange = (e) => {
    setOpcaoSelecionada(e.target.value);
  };

  const handleSearchClick = () => {
    // ...
  
    if (opcaoSelecionada) {
      // Se uma opção estiver selecionada, chama a função grafo.dfs() com a opção selecionada
      const output = grafo.dfs(opcaoSelecionada);
  
      // Atualiza o estado com a estrutura de dados do grafo
      setDfsOutput(output);
    } else {
      // Se nenhuma opção estiver selecionada, exibe o grafo completo
      const grafoCompleto = grafo.dfs(); // Chama grafo.dfs() sem argumentos para exibir o grafo completo
  
      // Atualiza o estado com a estrutura de dados do grafo completo
      setDfsOutput(grafoCompleto);
    }
  };
  
  

  return (
    <div className="body">
      <p className="centered-text1"><strong>Selecione a matéria de Software</strong></p>
      <p  className="centered-text2"><strong>que você deseja analisar a continuação do fluxo</strong></p>

      <select className="custom-select" value={opcaoSelecionada} onChange={handleSelectChange}>
      <option value="">Fluxo Completo</option> {/* Opção padrão */}
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
    <div className="graph">
      {dfsOutput.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  )}
</div>


    </div>
  );
};

export default BodyComponent;
