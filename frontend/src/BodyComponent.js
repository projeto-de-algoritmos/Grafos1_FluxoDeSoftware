import React from 'react';

const BodyComponent = () => {

  const p1Style = {
    color: '#020E7D',             // Cor do texto
    textAlign: 'center',        // Alinhamento do texto
    fontFamily: 'Jockey One', // Família da Fonte
    fontSize: 30, //tamanho do texto
  };

  const p2Style = {
    color: '#105013',             // Cor do texto
    textAlign: 'center',        // Alinhamento do texto
    fontFamily: 'Jockey One', // Família da Fonte
    fontSize: 30, //tamanho do texto
  };

  return (
    <div className="body">
      <p style={p1Style} className="centered-text"><strong>Selecione a matéria de Software</strong></p>
      <p style={p2Style} className="centered-text"><strong>que você deseja analisar a continuação do fluxo</strong></p>
      
      <select className="custom-select">
        <option value="matematica">Matemática</option>
        <option value="historia">História</option>
        <option value="geografia">Geografia</option>
        <option value="ciencias">Ciências</option>
      </select>

      <div className="rounded-box">
        
      </div>
    </div>
  );
};

export default BodyComponent;
