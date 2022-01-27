import RackLetter from "./RackLetter";
import {useEffect} from "react";
import { alphabet } from '../helpers/helper'

const Rack = (props) => {

  const { state, setState  } = props;

  const emptyRack = ["","","","","","",""];

  const alphabetProbabilityArray = [];
  for (const [letter, info] of Object.entries(alphabet)) {
    for (let i = 0; i < info.count; i++) {
      alphabetProbabilityArray.push(letter)
    }
  }

  const pickRandomLetter = (alphabet) => {
    const pseudoRandom = Math.floor(Math.random() * alphabet.length);
    return alphabet[pseudoRandom];
  }
  const rack = emptyRack.map(letter => pickRandomLetter(alphabetProbabilityArray))

  useEffect(()=> {
  setState(prev => ({...prev, rack: rack}))
  },[])


  const letters = state.rack.map((letter, index) => < RackLetter letter={ letter } key={ index } index={ index } state={state} setState={setState} />)

  return (
    <div>
      { letters }
    </div>
  )

}

export default Rack;