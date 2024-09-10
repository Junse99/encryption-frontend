import './App.css';
import AESMethod from './methods/aes';
import HMACMethod from './methods/hmac';
import RSAMethod from './methods/rsa';
import SHA256Method from './methods/sha256';

function App() {
  return (
    <div className="App">
      <AESMethod />
      <RSAMethod />
      <SHA256Method />
      <HMACMethod />
    </div>
  );
}

export default App;
