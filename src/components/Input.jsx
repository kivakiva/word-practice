import React, { useEffect } from "react";
import { wordScore, alphabet, totalScore, send } from '../helpers/helper'

const Input = (props) => {

const {state, setState} = props;

const { foundList } = state;

const update = (text) => {
  setState((prev) => ({...prev, input : text.target.value }))
}

useEffect(() => {
  
  
  const handleKeydown = (event) => {
    const key = event.key.toLowerCase();
    if (key === "enter" || key === " ") {

      const lowercaseAttempt = state.input.toLowerCase();

      const attemptArray = [ ...lowercaseAttempt];

      const destructibleRack = JSON.parse(JSON.stringify(state.rack));

      const match = attemptArray.reduce((rack, attemptLetter) => {
        if (!rack) {return false}
        const index = rack.indexOf(attemptLetter);
        if (!rack.includes(attemptLetter)) {
          return false;
        } else {
          rack[index] = 0;
          return rack;
        }
      }, destructibleRack)
      if (match) {

        if (state.dict.includes(state.input.toLowerCase())) {
          if (!foundList.includes(state.input.toLowerCase())) {

        setState((prev) => ({
          ...prev, 
          foundList: [...prev.foundList, prev.input.toLowerCase()], 
          input : "", 
          lastWord: `${state.input.toLowerCase()}: ${wordScore(state.input, alphabet)}`
        }))
        setState((prev) => ({
          ...prev, 
          totalScore: totalScore(prev.foundList, wordScore, alphabet)
        }))
          } else {
            send();
            setState((prev) => ({
              ...prev, message: "already played", input: ""
            }))
            setTimeout(() => {
              setState((prev) => ({
                ...prev, message: ""
              }))
            }, 1000);
          }
        }
        else {
          send();
          setState((prev) => ({
            ...prev, message: "not in dictionary", input: ""
          }))
          setTimeout(() => {
            setState((prev) => ({
              ...prev, message: ""
            }))
          }, 1000);
        }
      } else {
        send();

        setState((prev) => ({
          ...prev, message: "letters unavailable", input: ""
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
}, [state.input, state.dict, setState, state.rack, foundList])

    return (
      <div>
        <input 
        onChange={ (text) => update(text) }
        value={ state.input }
        id="guess"
        ></input>
      </div>
    )
  }
export default Input;