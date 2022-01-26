const FoundList = (props) => {

  const { state, setState } = props;

  const foundLetters = state.foundList.map((word, index) => (<span key={index}>{word}, </span>))

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