import react, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Rack from "./components/Rack";
import Input from './components/Input';
import FoundList from './components/FoundList';

function App() {

  const [state, setState] = useState({
    rack: [],
    input: "",
    foundList: []
  })

  
  useEffect(() => {
    
    //update input
    
  }, [state.input])
  
  
  useEffect(() => {
    
    const onSubmit = () => {
      return
    }
    //update input

  }, [onSubmit])


  return (
    <div className="App">
      <header className="App-header">
      <Rack state={state} setState={setState} />
      <Input state={state} setState={setState}/>
      <FoundList state={state} setState={setState}/>
      </header>
    </div>
  );
}

export default App;
