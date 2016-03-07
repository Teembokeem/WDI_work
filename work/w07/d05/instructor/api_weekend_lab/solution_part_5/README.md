# Foursquare API App Solution (Part 5) :tada:

Here is the code. Check, especially, the changes to:

- [`models/search.js`](models/search.js)
- [`seeds.js`](seeds.js)
- [`config/routes.js`](config/routes.js): moved and renamed the routes
  to the controller to share all of the setup (loading model, etc.), and
  because we're now beginning to CRUD resources.
- [`controllers/search.js`](controllers/search.js): not only have the
  [search Create](controllers/search.js#L36-L54) and the 
  [search Read](controllers/search.js#L61-L64) been added to the handlers,
  but:
  1.  [we are pulling specific data](controllers/search.js#L28-L34)
      out of the Foursquare API response, and
  2.  we refactored the Foursquare API URI creation
      [into its own function](controllers/search.js#L70-L81)
- [`views/index.ejs`](views/index.ejs)

Finally, this code won't work because of the lack of a `.env`
file! To check it out in action, add the file to the base of the app:

```bash
# .env

FOURSQUARE_CLIENT_ID=XXXXXXXXXXXXXXX-YOURCLIENTIDHERE-XXXXXXXXXXXXXXX
FOURSQUARE_CLIENT_SECRET=XXXXXXXXXXXXX-YOURSECRETTOKENHERE!-XXXXXXXXXXXXX

```
