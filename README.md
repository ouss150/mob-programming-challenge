# mob-programming-challenge

## Hey DevSquad 806, let's git together !

You've been added as a collaborator to a github repo.  
Accept the invite and clone the initial code. You'll be randomly assigned to a team.  
Design who's the driver and who's the navigator.  
The challenge includes several iterations.  
Each team is responsible for one iteration.  
Each team must push the code**regularly**, with explicit commits.

-------- 1 --------

- install hbs express mongoose
- create the folders + files structure
- /views
-- /partials
- /public
-- /assets
---- /img
---- /video
-- /css
-- /js
- /models
- /config


-------- 2 --------

- install dotenv
- create a .env file containing PORT = 3030, MONGO_URI = mongodb://- localhost/dev-squad-806
- create a mongodb.js file in /config
- use the Mongoose Introduction course to connect to the database

-------- 3 --------

- create some files
-- the hbs layout
-- an index css with some really basic styling
- visit unsplash.com and download 3 nice coding related image
- include fontawesome to the layout

-------- 4 --------

- create the app's routes
/                     (renders home)
/my-dev-squad         (renders allUsers)  
/add-new-ironhacker   (renders formUser)            
/api/users            (respond an array of user objects)

- create the related view, with only a title


-------- 5 (3 teams at the same time working on different files (watchout the conflicts)) --------

upgrade the views : 

- home : 
-- displays a list of 3 images 
-- the images are displayed with a hbs loop
-- images is an array of strings passed as a view parameter

- allUsers : 
-- displays a list of users with a hbs loop
-- users is an array of objects (name, email, favoriteProgLangage) passed as a view parameter

- formUser
-- displays a form with labels and input
-- each input MUST have a name attribute
---- ironhacker-name
---- ironhacker-email
---- ironhacker-favorite-langage


-------- 6 --------

add a models folder a the project's root
create a new file models/User.js


-------- 7 --------

When done, everybody should pull the last version
We'll finish the app together