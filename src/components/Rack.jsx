import RackLetter from "./RackLetter"

const Rack = (props) => {

  const { state, setState } = props;

  const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

  const emptyRack = ["","","","","","",""];

  const pickRandomLetter = (alphabet) => {
    const pseudoRandom = Math.floor(Math.random() * alphabet.length);
    return alphabet[pseudoRandom];
  }
  const rack = emptyRack.map(letter => pickRandomLetter(alphabet))

  const letters = rack.map((letter, index) => < RackLetter letter={ letter } key={ index } state={state} setState={setState} />)

  return (
    <div>
      { letters }
    </div>
  )

}

export default Rack;