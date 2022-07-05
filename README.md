# fetch_post_ddf
REST API for querying ddf database, and storing the information into a realtime database(firebase).


Using the fetchPropId.js file you can pull the ID numbers from a DDF server, and store those ID's inside a firebase realtime database

Using the fetchPropDetails.js file, you can pull the ID numbers that were stored, request information on the MLS property from the DDF server, and store the property information in your own database for review, and to access on a website.

This will require a database function setup with the RETS-DDF client as the app function, or another way of querying the CREA-DDF database to communicate with your firebase realtime-database.

