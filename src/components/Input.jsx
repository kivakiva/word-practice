import { useEffect } from "react";

const Input = (props) => {

const {state, setState} = props;

const update = (text) => {
  setState((prev) => ({...prev, input : text.target.value }))
}

const sendIt = (input) => {
  console.log('submit', input);
}


useEffect(() => {
  
  
  const handleKeydown = (event) => {
    const key = event.key.toLowerCase();
    console.log(key);
    if (key === "enter" || key === " ") {
      console.log("key is enter or space");
      setState((prev) => ({
        ...prev, foundList: [...prev.foundList, prev.input], input : ""
      }))
    }
  }
  



  document.addEventListener("keydown", handleKeydown)

  return () => document.removeEventListener("keydown", handleKeydown)
}, [state.input])

    return (
        <input 
        onChange={ (text) => update(text) }
        value={ state.input }
        ></input>
    )
  }
export default Input;