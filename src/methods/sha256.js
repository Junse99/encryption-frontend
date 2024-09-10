import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function SHA256Method() {
  const [hashedMessage, setHashedMessage] = useState('');

  const hashMessage = () => {
    const message = 'Mensaje Secreto';
    const hash = CryptoJS.SHA256(message).toString();
    setHashedMessage(hash);
  };

  return (
    <article>
      <h1>Hashing con SHA-256 en React</h1>
      <button onClick={hashMessage}>Hashear Mensaje</button>
      <h3>Mensaje Hasheado:</h3>
      <p>{hashedMessage}</p>
    </article>
  );
}

export default SHA256Method;