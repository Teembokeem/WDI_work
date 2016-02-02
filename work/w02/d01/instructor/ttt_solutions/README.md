# A Solution to the Tic Tac Toe Callback Lab

**Note**: this solution only works with the first **two** parts of the lab,
since they are sincerely difficult and the code is already complex enough.

Here are the requests of the lab:

> #### Part One: Simple Callbacks
> 
> Make sure that your program now uses `domElement.addEventListener` and the
> events associated with:
> 
> 1. **the page load**: set up a new game,
> 2. **clicking a square**: moving,
> 3. **hovering over a square**: 
>    1. show a somewhat transparent icon ("X" or "O", or something like that)
>       to represent what value will be entered in the square if clicked, and
>       the square is a valid move, and
>    2. if the square is an invalid move, make the background a different shade 
>       than if it is a valid move.
> 
> #### Part Two: Timers & Intervals
> 
> 1. Implement a visible timer that counts the number of seconds that a given
>    player has had to move. It starts at `00:00` and counts up, every move!
> 2. Once the timer has reached 10 seconds, make it flash red!
> 3. Once the timer has reached 15 seconds, alert the player that they have
>    take too long, and chose a random move for them!

**[And here is the previous solution.](../../../d02/instructor/ttt_solution)**

## Things to do with this solution

1. Look at the structure:
  1. **There no change to the JavaScript "model."** Tic-Tac-Toe is 
     still Tic-Tac-Toe, so the model is the exact same! This is a great aspect
     of keeping your model and view (DOM) logic separate.
  2. There is one addition to the model code, however: a helper 
     function, `randomEmptySquareCoords`, that returns the `[y, x]` coordinates
     for a random, empty square on the board (obviously)!
     [It's cool code.][randomEmptySquareCoords]
  2. Style and all JavaScript have been moved to their own files for 
     readability.
  3. Style has only been changed to include [a few new classes][newClasses] for
     the "hover" effects, but they are just normal class selectors (with new
     content attributes, :).
  4. DOM Interaction has been broken into three parts, which you should
     get used to:
    - [Global variable declarations][variableDeclarations]
    - [Function declarations][functionDeclarations]
    - Finally, [a "page load" event listener][pageLoad] that loads the 
      functions on to DOM elements.
2. Almost all work has been done in `tictactoe-dominteraction.js`. The 
   functions in there include:
  - `hoverAction`: a function to add classes/effects for square hovers
  - `unHoverAction`: a function to remove classes/effects for square hovers
  - `tick`: a function to increment the timer
  - `resetTimer`: a function to start or reset the timer
  - `startDOMGame`: a function to start a new game in the DOM
  - `endDOMGame`: a function for ending the game in the DOM
  - `clickTheBoard`: the function that runs when you click the board

Look at each part of the code in isolation, to keep from being overwhelmed by 
it!

[randomEmptySquareCoords]: tictactoe-model.js#L107
[newClasses]:              main.css#L53
[variableDeclarations]:    tictactoe-domInteraction.js#L2
[functionDeclarations]:    tictactoe-domInteraction.js#L14
[pageLoad]:                tictactoe-domInteraction.js#L162
