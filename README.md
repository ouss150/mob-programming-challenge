# mob-programming-challenge

## Hey DevSquad 806, let's GIT together !

You've been added as a collaborator to a github repo.  
**Accept** the invite and clone the initial code. 
The challenge includes several **iteration**.  
You'll be randomly assigned to one of these.
When your turn comes, you are be the **driver** and the other are the **navigators**.  
Push your code with **explicit** commit messages.


### -------- Iteration 1 --------
- iniitialize the folder for GIT
- link the local repo with the remote repo
- initialize the folder for npm
- install hbs express mongoose dotenv


### -------- Iteration 2 --------

- create the folders + files structure:
- /views
  - /partials
- /public
  - /assets
    - /img
    - /video
    - /audio
  - /css
  - /js
- /models
- /config
- visit [unsplash.com](https://unsplash.com/) to find 3 nice coding related image
- download them in the appropriate folder

### -------- Iteration 3 --------

- create the hbs layout with the minimal markup
- create a .env file containing: 
  - PORT = 3030
  - MONGO_URI = mongodb://localhost/dev-squad-806


### -------- Iteration 4 --------

- create /config/mongodb.js 
- use the [Mongoose Introduction](https://preview.my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202006_PAR/units/ironhack-course-chapter_4-sequential_3-vertical) 
- connect to the database
- you can test your code separately with nodemon


### -------- Iteration 5 --------

- create the app.js using the express doc's hello world example
- include the .env configuration
- require the database config file ;)


### -------- Iteration 6 --------

- create the app's **get** routes:
- /                     (renders home)
- /my-dev-squad         (renders allUsers)  
- /add-new-ironhacker   (renders formUser)            
- /api/users            (respond an **hardcoded** array of user objects)

- create the related views, with a html title only


### -------- Iteration 7 --------

- add an index.css with some **basic** styling (you may use the code provided @ day-3)

### -------- Iteration 8 --------

- create a navMain partial to navigate the app (3 links)
- include [fontawesome](https://fontawesome.com/) in the layout
- add a home icon to the navMain


### -------- Iteration 9 --------

- create an imageGallery view partial (without any styling)
- imageGallery expects an array of strings as argument
- the images are displayed with a hbs loop (iterate through **this**)

### -------- Iteration 10  --------

- update home view : 
  - include the partial imageGallery
  - the partials argument comes from the route, update app.js accordingly

### -------- Iteration 11  --------

- code the css for the previous partial (imageGallery)
- locate the file in /public/css/mod.image-gallery.css 
- use flex OR grid for the job
- import the css module in index.css

### -------- Iteration 12 --------

- update allUsers view : 
  - displays a list of users with a hbs loop
  - users is an array of objects (name, email, favoriteProgLangage) passed as a view parameter
  - update app.js accordingly


### -------- Iteration 13 --------

- update formUser view : 
  - displays a form with labels and input
  - each input MUST have a name attribute
    - user-name
    - user-email
    - user-favorite-langage


### -------- Iteration 14 --------

add a models folder a the project's root
create a new file models/User.js


### -------- Iteration 15 --------

When done Squad !
Everybody should pull the last version
We will finish the app together, with our first POST request