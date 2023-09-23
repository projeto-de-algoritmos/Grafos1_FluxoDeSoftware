import React from 'react';

const HeaderComponent = () => {
  // Estilos para o cabeçalho
  const headerStyle = {
    backgroundColor: '#629CDF',  // Cor de fundo azul
    opacity: 0.8,               // Opacidade de 80%
    padding: '20px',            // Espaçamento interno
    color: 'white',             // Cor do texto
    textAlign: 'center',        // Alinhamento do texto
  };

  return (
    <div style={headerStyle}>
      <h1>Mergulhando nas Profundezas da Engenharia de Software</h1>
    </div>
  );
};

export default HeaderComponent;
