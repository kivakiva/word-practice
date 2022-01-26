import react, {useEffect} from "react";

const RackLetter = (props) => {

 const { letter, state, setState, index } = props;
 
 useEffect(() => {
  

   setState((prev) => {
    prev.rack[index] = letter;

     return {...prev}
   })
 }, [])


 return (
   <span>{ state.rack[index] }, </span>
 )

};

export default RackLetter;