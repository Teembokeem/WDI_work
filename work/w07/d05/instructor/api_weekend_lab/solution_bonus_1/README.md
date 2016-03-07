# Foursquare API App Solution (Bonus 1) :tada:

Here is the code. Check, especially, the changes to:

- [`config/routes.js`](config/routes.js)
- [`controllers/search.js`](controllers/search.js): there is a new
  show handler and further refactoring.
- [`views/`](views): re-arranged in to a correctly structured folder,
  with a new search show page.

Finally, this code won't work because of the lack of a `.env`
file! To check it out in action, add the file to the base of the app:

```bash
# .env

FOURSQUARE_CLIENT_ID=XXXXXXXXXXXXXXX-YOURCLIENTIDHERE-XXXXXXXXXXXXXXX
FOURSQUARE_CLIENT_SECRET=XXXXXXXXXXXXX-YOURSECRETTOKENHERE!-XXXXXXXXXXXXX

```
