import './App.css';

import Letrero from './Letrero';
import Lista from './Lista';
import {useState} from "react";

function App() {

    const [coders, setCoders] = useState([]);
    const [coder, setCoder] = useState("");

    function addCoder() {
        // spread operator
        setCoders([...coders, coder]);
    }


    return (
        <div className="App">
            <input onChange={event => setCoder(event.target.value) } type="text"/>
            <button onClick={addCoder}>Nueva coder</button>
            <Letrero texto="🍕" diaDeLaSemana="viernes"/>
            <Lista elements={coders}/>
        </div>
    );
}

export default App;
