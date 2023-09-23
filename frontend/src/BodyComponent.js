import React from 'react';

const BodyComponent = () => {
  return (
    <div className="body">
      <p className="centered-text">Selecione a matéria de Software</p>
      <p className="centered-text">que você deseja analisar a continuação do fluxo</p>
      
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
