import { useState, useEffect } from 'react';
import './App.css';

import Rack from "./components/Rack";
import Input from './components/Input';
import Dict from './components/Dict';
import alphabeticalLetterDict from './dict/shortDict'
import { allWords } from './helpers/helper';


function App() {

  const [state, setState] = useState({
    rack: [],
    input: "",
    foundList: [],
    dict: [],
    show: false,
    message: "",
    lastWord: "",
    totalScore: 0,
    definition: {}
  })


  const show = () => {
    setState(prev => ({...prev, show: (prev.show ? false : true)}))
  }


  
  useEffect(() => {
    
    let allLegalLettersUnscrambled = [];

    const dict = alphabeticalLetterDict;
    //take rack and all words
    let rack = state.rack;

    if (rack.length !== 0) {
      const allTileCombinations = allWords(rack);
      const allLegalLetters = allTileCombinations.filter((word) => {
        return dict[word]
      })
      
      allLegalLettersUnscrambled = 
      allLegalLetters.reduce((array, word) => [...array, ...dict[word]], []);

      //set placeholder definition for each word so they can be clicked
      // for (const word of allLegalLettersUnscrambled) {
      //   setState(s => ({...s, definition: {...s.definition, [word]: "loading"}}))
      // }

      setState(s => ({...s, dict: allLegalLettersUnscrambled}))

    }

  }, [state.rack])


  return (
    <div className="App">
      <header className="App-header">
        <div className="error">
          { state.message }
          </div>
      <Rack state={state} setState={setState} />
      <Input state={state} setState={setState} />
      <div 
      onClick={ () => { show() } }
      >{state.show? <span>Hide</span> : <span>Show</span>}</div>
      {/* <div>{state.lastWord} -- <b>Total:</b> {state.totalScore}</div> */}
      {state.foundList.length === state.dict.length && <div>🐣🐣🐣 Good baby 🐣🐣🐣</div>}
      <Dict state={state} setState={setState}/>
      {/* {state.show && <div>{state.foundList}/{state.dict} found</div>} */}
      </header>
    </div>
  );
}

export default App;
