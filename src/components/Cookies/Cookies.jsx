import React, { useState } from 'react';
import { Button } from "@nextui-org/react";

function CookieWarning() {
  const [accepted, setAccepted] = useState(localStorage.getItem('cookiesAccepted') === 'true');

  if (accepted) {
    return null;
  }

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setAccepted(true);
  };

  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.8)', padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <p style={{ color: 'white' }}>
        Este sitio utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas nuestra política de cookies.
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button
        size='sm' 
        auto 
        color="secondary" 
        rounded flat
        onPress={handleAccept}
        >
          Aceptar
        </Button>
      </div>

      {/* <button onClick={handleAccept}>Aceptar</button> */}
    </div>
  );
}

export default CookieWarning;