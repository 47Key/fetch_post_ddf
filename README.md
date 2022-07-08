# API for querying RETS-DDF server, and storing the information into a realtime database(firebase).

The database I am using in this project is a firebase realtime-database, if you are using a different database you will have to alter the database storage methods in the fetchPropDetails.js file. I am also using the RETS-DDF client in another one of my repo's, set up as a firebase function, to act as a client for accessing the RETS-DDF server. This will only work in Canada and will not work in the US.


## To store the information:

Run the file fetchPropDetails, which handles logging in to the RETS server, fetching all active listing IDs, using the IDs to fetch further information on the property, and filtering that information to only store the relevant data in the database.

If you are running on your computer, you will need to call this file with: node fetchPropDetails.js  . Otherwise, you will have to call the file from a timed function on the website. Should update your db once a day to avoid displaying outdated/sold property data.

You will need to change the firebase urls to your own, for this to work.


This will require a database function setup with the RETS-DDF client as the app function, or another way of querying the CREA-DDF database to communicate with your firebase realtime-database.

