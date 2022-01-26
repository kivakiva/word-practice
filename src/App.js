import react, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Rack from "./components/Rack";
import Input from './components/Input';
import FoundList from './components/FoundList';
import sowpods from './dict/sowpods'


function App() {

  const [state, setState] = useState({
    rack: [],
    input: "",
    foundList: [],
    dict: []
  })


  const shortDict = sowpods.sowpods.split(" ").filter(word => word.length < 8)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Tiles:</h1>
      <Rack state={state} setState={setState} />
      <Input state={state} setState={setState} shortDict={shortDict}/>
      <FoundList state={state} setState={setState}/>
      </header>
    </div>
  );
}

export default App;
