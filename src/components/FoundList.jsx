import axios from "axios";

const FoundList = (props) => {

  const { state, setState } = props;

  const getDefinition = (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    console.log('url: ', url);
    axios.get(url)
    .then(res => console.log(res))
  }

  const foundLetters = state.foundList.map((word, index) => (<span key={index} onClick={()=>getDefinition(word)}>{word}, </span>))

  return (
    <div>
      <h1>
        FoundList:
        </h1>
      <div>{foundLetters}</div>
    </div>
  )
}

export default FoundList