# Foursquare API App Solution (Part 4) :tada:

Here is the code. Check, especially, the changes to:

- [`views/index.ejs`](views/index.ejs)
- [Line #16 of `controllers/search.js`](controllers/search.js#L16): the 
  rest of the file is the same, with only the comments removed.

Finally, this code won't work because of the lack of a `.env`
file! To check it out in action, add the file to the base of the app:

```bash
# .env

FOURSQUARE_CLIENT_ID=XXXXXXXXXXXXXXX-YOURCLIENTIDHERE-XXXXXXXXXXXXXXX
FOURSQUARE_CLIENT_SECRET=XXXXXXXXXXXXX-YOURSECRETTOKENHERE!-XXXXXXXXXXXXX

```
