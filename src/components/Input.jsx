import { useEffect } from "react";
import { wordScore, alphabet, totalScore } from '../helpers/helper'

const Input = (props) => {

const {state, setState} = props;

const update = (text) => {
  setState((prev) => ({...prev, input : text.target.value }))
}




useEffect(() => {

  
  const handleKeydown = (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter" || key === " ") {

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

        if (state.dict.includes(state.input)) {
          if (!state.foundList.includes(state.input)) {

        setState((prev) => ({
          ...prev, 
          foundList: [...prev.foundList, prev.input], 
          input : "", 
          lastWord: `${state.input}: ${wordScore(state.input, alphabet)}`
        }))
        setState((prev) => ({
          ...prev, 
          totalScore: totalScore(prev.foundList, wordScore, alphabet)
        }))
          } else {
            setState((prev) => ({
              ...prev, message: "already played"
            }))
            setTimeout(() => {
              setState((prev) => ({
                ...prev, message: ""
              }))
            }, 1000);
          }
        }
        else {
          setState((prev) => ({
            ...prev, message: "not in dictionary"
          }))
          setTimeout(() => {
            setState((prev) => ({
              ...prev, message: ""
            }))
          }, 1000);
        }
      } else {
        setState((prev) => ({
          ...prev, message: "letters unavailable"
        }))
        setTimeout(() => {
          setState((prev) => ({
            ...prev, message: ""
          }))
        }, 1000);

      }
    }
  }
  document.addEventListener("keydown", handleKeydown)

  return () => document.removeEventListener("keydown", handleKeydown)
}, [state.input, state.dict])

    return (
      <div>
        <input 
        onChange={ (text) => update(text) }
        value={ state.input }
        ></input>
      </div>
    )
  }
export default Input;