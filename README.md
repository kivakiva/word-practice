# core

## GUI
### rack component
- state controlled seven letters
- button for new rack
### input component
- state controlled input
- submit with enter space or tab
### correct guesses
- state controlled array of correct guesses
- guess must be in dictionary and be playable with given tiles

### stretch
- preload all playable moves
-- as object
- separate useEffect hooks for keydown and submit
- end session to show all playable moves
- normalize distribution of tiles 
-- turn alphabet into object with points and frequency
