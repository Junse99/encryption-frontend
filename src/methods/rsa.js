import React, { useState } from 'react';
import JSEncrypt from 'jsencrypt';

function RSAMethod() {
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;

  const encryptMessage = () => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt('Mensaje Secreto');
    setEncryptedMessage(encrypted);
  };

  const decryptMessage = () => {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    const decrypted = decrypt.decrypt(encryptedMessage);
    setDecryptedMessage(decrypted);
  };

  return (
    <article>
      <h1>Cifrado con RSA en React</h1>
      <button onClick={encryptMessage}>Cifrar Mensaje</button>
      <button onClick={decryptMessage}>Descifrar Mensaje</button>
      <h3>Mensaje Cifrado:</h3>
      <p>{encryptedMessage}</p>
      <h3>Mensaje Descifrado:</h3>
      <p> {decryptedMessage}</p>
    </article>
  );
}

export default RSAMethod;