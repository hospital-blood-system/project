import React from 'react';

const Logo = () => {
  const logoStyle = {
    width: '100px',
    height: 'auto',
    borderRadius: '10px', // Örneğin, 10 piksel olarak belirlenmiş bir değer
  };

  return (
    <div>
      <img src="img/ISSlogo.jpg" alt style={logoStyle} />
    </div>
  );
};

export default Logo;
