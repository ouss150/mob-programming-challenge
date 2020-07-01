# mob-programming-challenge

## Hey DevSquad 806, let's GIT together !

You've been added as a collaborator to a github repo.  
**Accept** the invite and clone the initial code. 
The challenge includes several **iteration**.  
You'll be randomly assigned to one task.
When your turn comes, you are the **driver** and the other are the **navigators**.  
Push your code with **explicit** commit messages.


### -------- Iteration 1 --------

- initialize the folder for npm
- install hbs express mongoose dotenv
- add a .gitignore file excluding the node modules and .env

### -------- Iteration 2 --------


- create a .env file containing: 
  - PORT = 3030
  - MONGO_URI = mongodb://localhost/dev-squad-806
- create /app.js, just print a "hello, world" message 
- create the hbs layout with the minimal markup
- add a dev script in package.json to launch the server

### -------- Iteration 3 --------

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

- visit [unsplash.com](https://unsplash.com/) to find 3 nice coding related images
- download them in the appropriate folder

### -------- Iteration 4 --------

- create /config/mongodb.js 
- use the [Mongoose Introduction](https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202006_PAR/units/ironhack-course-chapter_4-sequential_3-vertical) 
- connect to the database
- you can test your file separately with nodemon


### -------- Iteration 5 --------

- update app.js
- include the .env configuration
- then, require the database config file ;)
- then, set the intial config for hbs and public assets

- for the moment, let's **hardcode** a const users (an array objects)
- each object has 3 properties:
  - name
  - email
  - favorite-langage
- listen to the PORT stored in .env



### -------- Iteration 6 --------

- create the app's **get** routes:
- /                         (renders home)
- /my-dev-squad             (renders allUsers + pass **users** as a parameter to the view)  
- /add-new-ironhacker       (renders formUser)            
- bonus: /api/ironhackers   (respond users as a json string :)

- create the related views, with a html title only


### -------- Iteration 7 --------

- add an index.css with some **basic** styling (you may use the code provided @ mod-2/week-1/day-3)


### -------- Iteration 8 --------

- create a navMain **partial** to navigate the app (3 links)
- include [fontawesome](https://fontawesome.com/) in the **layout**
- add a home **icon** to the navMain


### -------- Iteration 9 --------

- create an imageGallery view **partial** (without any styling)
- imageGallery expects an array of strings as **argument**
- have a look to the app.get("/") route **before** coding your widget
- the images are displayed with a hbs loop (iterate through **this**)


### -------- Iteration 10  --------

- update home view : 
  - **include** the partial imageGallery


### -------- Iteration 11  --------

- create /public/css/mod.image-gallery.css 
- code the styling for the previous partial (imageGallery)
- advice : use flex OR grid for the job :)
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