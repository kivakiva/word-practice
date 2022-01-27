import react, {useEffect} from "react";
import {alphabet} from '../helpers/helper'

const RackLetter = (props) => {

 const { state, setState, index } = props;

 const dash = " "
 
//  useEffect(() => {
  

//    setState((prev) => {
//     prev.rack[index] = letter;

//      return {...prev}
//    })
//  }, [])

  const letter = state.rack[index]

 return (
   <span>{ letter && letter.toUpperCase() }<sub>{alphabet[letter].value}</sub>{index !== 6 && dash}</span>
 )

};

export default RackLetter;