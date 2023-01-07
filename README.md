
# Word Practice
![screencapture-word-practice-2](https://user-images.githubusercontent.com/93347658/211149079-36afa9e2-c303-4f3e-a2c5-ef2cf16037c7.gif)

This app is live and you can play it here: [Word Practice on Github](https://kivakiva.github.io/word-practice/). 

I created this mini application to practice using states in React.

It is designed to provide practice finding words for various word unscrambling games likes Scrabble. The app generates a random hand based on common letter distribution in these games. From that hand it then generates a list of all possible playable words. The user can see how many words are possible and what their length is, but not what they are. They can then input guesses which, if correct, will reveal the word from the hidden list.
The application also fetches dictionary definitions from an API that the user can access by clicking on revealed words.
At any time, the user can give up and reveal the remaining words playable with their current rack or reset their tiles and receive a new rack.

I am happy with how this app turned out! I think it's a genuinely useful and enjoyable practice tool to improve one's word searching ability. Researching and writing an optimized algorithm for finding all of the playable words for a given rack was the most interesting part to script. 

