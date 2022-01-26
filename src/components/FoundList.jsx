const FoundList = (props) => {

  const { state, setState } = props;

  const foundLetters = state.foundList.map((word, index) => (<div key={index}>{word}, </div>))

  return (
    <div>
      FoundList
      <div>{foundLetters}</div>
    </div>
  )
}

export default FoundList