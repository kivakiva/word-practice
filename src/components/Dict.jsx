import DictList from './DictList'

const Dict = (props) => {

  const {state, setState} = props;

  let wordLengths = [2,3,4,5,6,7];

  const lettersByLengthList = wordLengths.map(element => < DictList key={ element } wordLength={ element } state={ state } setState={ setState } />)

  const filteredList = lettersByLengthList.filter((value, index) => state.dict.filter(word => word.length === Number(index) + 2).length !== 0)

  return (
    <div className="list">
      { filteredList }
    </div>
  )
}

export default Dict;