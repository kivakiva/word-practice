import RackLetter from "./RackLetter";
import {useEffect} from "react";
import { alphabet, generateRack } from '../helpers/helper'

const Rack = (props) => {

  const { state, setState  } = props;

  
  
  useEffect(()=> {

    generateRack(alphabet, setState);


  },[setState])


  const letters = state.rack.map((letter, index) => < RackLetter letter={ letter } key={ index } index={ index } state={state} setState={setState} />)

  return (
    <div>
      { letters }
    </div>
  )

}

export default Rack;