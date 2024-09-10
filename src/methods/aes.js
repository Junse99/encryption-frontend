import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function AESMethod() {
  const [encryptedToken, setEncryptedToken] = useState('');
  const [decryptedToken, setDecryptedToken] = useState('');

  const secretWord = process.env.REACT_APP_SECRET_KEY_AES;
  const token = 'token-de-autenticacion';

  const encryptToken = () => {
    const encrypted = CryptoJS.AES.encrypt(token, secretWord).toString();
    setEncryptedToken(encrypted);
    localStorage.setItem('token', encrypted);
  };

  const decryptToken = () => {
    const storedToken = localStorage.getItem('token');
    const decrypted = CryptoJS.AES.decrypt(storedToken, secretWord).toString(CryptoJS.enc.Utf8);
    setDecryptedToken(decrypted);
  };

  return (
    <article>
      <h1>Cifrado con AES en React</h1>
      <button onClick={encryptToken}>Cifrar Token</button>
      <button onClick={decryptToken}>Descifrar Token</button>

      <div>
        <h3>Token Cifrado:</h3>
        <p>{encryptedToken}</p>
      </div>

      <div>
        <h3>Token Descifrado:</h3>
        <p>{decryptedToken}</p>
      </div>
    </article>
  );
}

export default AESMethod;