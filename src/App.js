import React, {useState, useEffect} from 'react';
import logo_bb from './logo_bb.svg'
import './App.css';
import Frase from './componets/Frase'

function App() {

    //State Frases
    const [frase,guardarFrase] = useState({});


    const consultarAPI = async () => {
        const resultado = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
        const frase = await resultado.json();
        guardarFrase(frase[0]);
    }

    //cargar las frases con useEffect
    useEffect(()=>{consultarAPI()
    },[])

    return (
        <div className="App-header">
            <img src={logo_bb} className="App-logo" alt="logo"/>
            <Frase
                frase={frase}
            />
            <button onClick={consultarAPI}>
                Nueva Frase
            </button>
        </div>
    );
}

export default App;
