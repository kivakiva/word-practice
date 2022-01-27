import {alphabet} from '../helpers/helper'

const RackLetter = (props) => {

 const { state, index } = props;

 const dash = " "

  const letter = state.rack[index]

 return (
   <span>{ letter && letter.toUpperCase() }<sub>{alphabet[letter].value}</sub>{index !== 6 && dash}</span>
 )

};

export default RackLetter;