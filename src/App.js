import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css';
import api from './services/api';

// Webservice utilizado: https://viacep.com.br/
//  Projeto de estudo requisição .GET

function App() {
const[input, setInput] = useState('')
const[CEP, setCEP] = useState('')

async function handleSearch(){
    if(input === ''){
      alert("Preencha Algum CEP!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCEP(response.data)
      setInput('');
      console.log(response);
    }catch{
      alert("Ops, erro ao Buscar")
    }
}
  return (
    <div className="container">
      <h1 className="title">Bucascador CEP</h1>

      <div className="ContainerInput">
        <input type="text"
        placeholder="Digite um CEP..." 
        value={input} 
        onChange={(e) =>setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={15} color="#FFF "/>
        </button>
      </div>
    {CEP && 
      <main className='main'>
        <h2>CEP: {CEP.cep}  </h2>

        <span>Logradouro: {CEP.logradouro}</span>
        <span>Bairro: {CEP.bairro}</span>
        <span>Estado: {CEP.localidade} - {CEP.uf}</span>
      </main>
    }
      
     
    </div>
  );
}

export default App;
