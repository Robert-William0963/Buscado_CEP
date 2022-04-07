import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css';

function App() {
const[input, setInput] = useState('')

  return (
    <div className="container">
      <h1 className="title">Bucascador CEP</h1>

      <div className="ContainerInput">
        <input type="text"
        placeholder="Digite o seu CEP..." 
        value={input} 
        onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch">
          <FiSearch size={15} color="#FFF "/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: {input} </h2>

        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Estado</span>
      </main>
     
    </div>
  );
}

export default App;
