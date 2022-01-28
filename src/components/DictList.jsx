import axios from "axios";

const DictList = (props) => {

  const {state, wordLength, setState} = props;

  const getDefinition = (word) => {

    //don't popup if hidden
    if (!state.foundList.includes(word) && !state.show) {
      return;
    }

    //dont allow pop-up removal if awaitinging api
    if (state.fetchingDefinitionOfWord === word) {
      return;
    }

    const popup = document.getElementById(word)
    popup.classList.toggle("show");
    
    //don't fetch data twice
    if (state.definition[word] && state.definition[word] !== "could not load definition") {
      return;
    }
    
    setState(s => ({...s, fetchingDefinitionOfWord : word}))

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(url)
    .then(res => {
      const meanings = res.data[0].meanings
      const firstDefinition = meanings[0].definitions[0].definition
      setState(s => ({...s, fetchingDefinitionOfWord : "" , definition: {...s.definition, [word]: firstDefinition}}))
      
    }
    )
    .catch(err=> {
      console.log(err.message);
      const definitionError = "could not load definition";
      setState(s => ({...s, fetchingDefinitionOfWord : "" , definition: {...s.definition, [word]: definitionError}}));
    })
  }


  let words = state.dict.filter(word => word.length === wordLength);
  words = words.map((word, index, array) => (<span className="popup" key={word} onClick={()=> getDefinition(word)}>
    {(!state.foundList.includes(word) && !state.show) && <span>🐔</span>}
    {state.foundList.includes(word) && <span>{ word }</span>}
    {(!state.foundList.includes(word) && state.show) && <span className="red">{ word }</span>}
    <span id={word} className="popuptext">{state.definition[word]}</span>{index !== array.length - 1 && <>,&ensp;</>}</span>))

  return (
    <div className="list-item">
    { words.length > 0 && <div><h3>{wordLength}-letter word{words.length > 1 && <>s</>}</h3>< div>{words}</div></div> }
    </div>
  )
}

export default DictList;