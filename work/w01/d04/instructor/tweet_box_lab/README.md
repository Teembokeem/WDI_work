# Tweet Box

Your assignment for this lab is to recreate the functionality 
(not the style!) of Twitter's famous tweet box. For those of you who are
unfamiliar with Twitter, its whole gimmick is that each tweet is 140 
characters. 

Your assignment is to take this inert text box, and make it more closely
imitate the behavior of Twitter's interface.

> Note: this lab has been designed so that the only thing you need to 
> modify is `main.js`. `index.html` and `main.css` do not need to be 
> (and should not be) modified.

### Part 1

Every time a user types in to the text area, do the following:

- Check if the length of the input is between 0 and 140 characters.
  - If it's 0 characters, disable the "Tweet!" button (no empty tweets!).
  - If it's more than 140 characters, disable the "Tweet!" button and
    change the text area to have a red border.

### Part 2

When the user clicks on the button, a tweet is triggered. When a tweet
is triggered, print to the console:

```
Tweet: <content of the text area>
```

### Part 3

If the user types "Return"/"Enter", have that trigger a tweet. Only
trigger the tweet if the rules from part 1 are met!

### Part 4

When a tweet is triggered, have the content of the text area also appear
as a new `<li>` in the Posted Tweets list.

### Part 5 (Bonus)

At the far right of every posted tweet, have a button labeled "Remove".
If "Remove" is clicked, it deletes the tweet from the list.
