import react, {useEffect} from "react";

const RackLetter = (props) => {

 const { letter, state, setState } = props;

 console.log(letter);

 useEffect(() => {

   setState((prev) => {
     return {...prev, rack: [...prev.rack, letter]}
   })
 }, [])

 return (
   <span>{ letter }, </span>
 )

};

export default RackLetter;