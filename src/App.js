import { useState } from 'react';
import './App.css';

import Rack from "./components/Rack";
import Input from './components/Input';
import Dict from './components/Dict';
import alphabeticalLetterDict from './dict/shortDict'
import { allWords, reset, generateRack, alphabet, generateDict } from './helpers/helper';


function App() {

  const rack = generateRack(alphabet)
  
  const dict = generateDict(rack, alphabeticalLetterDict, allWords)

  const [state, setState] = useState({
    rack: rack,
    input: "",
    foundList: [],
    dict: dict,
    show: false,
    message: "",
    lastWord: "",
    totalScore: 0,
    definition: {},
    fetchingDefinitionOfWord: ""
  })


  const show = () => {
    setState(prev => ({...prev, show: (prev.show ? false : true)}))
  }

  const keepFocus = () => {
    console.log("clicked!");
    document.getElementById("guess").focus()
  
  };



  return (
    <div className="App"
    onClick={()=>keepFocus()}
    >
      <header className="App-header">
        <div className="error">
          { state.message }
          </div>
      <Rack state={state} setState={setState} />
      <Input state={state} setState={setState} />
      <div>
      <span 
      onClick={ () => { show() } }
      >{state.show? <>Hide</> : <>Show</>}</span>
      <>&nbsp;&nbsp;</>
      <span onClick={()=>reset(setState, generateRack, generateDict, alphabet, alphabeticalLetterDict, allWords)}>Reset</span>
      </div>
      {/* <div>{state.lastWord} -- <b>Total:</b> {state.totalScore}</div> */}
      {(state.foundList.length === state.dict.length && state.foundList.length !== 0) && <div>🐣🐣🐣 Good baby 🐣🐣🐣</div>}
      <Dict state={state} setState={setState}/>
      {/* {state.show && <div>{state.foundList}/{state.dict} found</div>} */}
      </header>
    </div>
  );
}

export default App;
