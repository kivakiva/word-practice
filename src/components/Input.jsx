import { useEffect } from "react";

const Input = (props) => {

const {state, setState, shortDict} = props;

const update = (text) => {
  setState((prev) => ({...prev, input : text.target.value }))
}




useEffect(() => {

  
  const handleKeydown = (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter" || key === " ") {
      console.log("key is enter or space");

      const attemptArray = [...state.input];

      const rack = [...state.rack];

      const match = attemptArray.reduce((rack, attemptLetter) => {
        if (!rack) {return false}
        const index = rack.indexOf(attemptLetter);
        if (index === -1) {return false}
        rack[index] = 0;
        return rack
      }, rack)
      if (match) {
        console.log("match");

        if (shortDict.includes(state.input)) {
          if (!state.foundList.includes(state.input)) {

          console.log("legal word");
        setState((prev) => ({
          ...prev, foundList: [...prev.foundList, prev.input], input : ""
        }))
          } else {
            console.log("already played");
          }
        }
        else {
          console.log("not legal word");
        }
      } else {
        console.log("not playable with rack");

      }
    }
  }
  document.addEventListener("keydown", handleKeydown)

  return () => document.removeEventListener("keydown", handleKeydown)
}, [state.input, shortDict])

    return (
        <input 
        onChange={ (text) => update(text) }
        value={ state.input }
        ></input>
    )
  }
export default Input;