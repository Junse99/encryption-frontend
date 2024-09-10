import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function HMACMethod() {
  const [hmacMessage, setHmacMessage] = useState('');

  const secretKey = process.env.REACT_APP_SECRET_KEY_HMAC;

  const generateHmac = () => {
    const message = 'Mensaje a autenticar';
    const hmac = CryptoJS.HmacSHA256(message, secretKey).toString();
    setHmacMessage(hmac);
  };

  return (
    <article>
      <h1>HMAC en React</h1>
      <button onClick={generateHmac}>Generar HMAC</button>
      <h3>HMAC Generado:</h3>
      <p>{hmacMessage}</p>
    </article>
  );
}

export default HMACMethod;