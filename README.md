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
- you can test your file separately with node


### -------- Iteration 5 --------

- in app.js
- include the .env configuration
- then, require the database config file ;)
- then, set the intial config for hbs and public assets

- for the moment, let's **hardcode** 2 arrays
-  A / const **users** (an array objects)
  - each object has 3 properties:
    - name
    - email
    - favorite-langage
-  B / const **images** (an array strings)
    - each string represent the path to an image (see iteration 3)

- listen to the PORT stored in .env



### -------- Iteration 6 --------

- create the app's **get** routes:
- /                             (renders home  + pass **images** as a view parameter )
- /my-dev-squad                 (renders allUsers + pass **users** as a view parameter)  
- /add-new-ironhacker           (renders formUser)            
- **Bonus**: /api/ironhackers   (respond users as a json string :)

- create the related views, with a h1 title only


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


## Team splitting starts here !

### -------- Iteration 10  --------

- modify home view : 
  - **include** the partial imageGallery
 - have a look to the app.get("/") route **before** to pass the partial's widget


### -------- Iteration 11  --------

- create /public/css/mod.image-gallery.css 
- code the styling for the previous partial (imageGallery)
- advice : use flex OR grid for the job :)
- import the css module in index.css


### -------- Iteration 12 --------

- modify allUsers view : 
  - displays a list of **users** with a hbs loop
  - **users** is an array of objects (name, email, favoriteProgLangage) passed as a view parameter
  - have a look to the app.get(" /my-dev-squad") route !!!


### -------- Iteration 13 --------

- modify formUser view : 
  - displays a form with labels and input
  - each input MUST have a name attribute (check @mdn)
    - userName
    - userEmail
    - userFavoriteLangage


### -------- Iteration 14 (and counting :) --------


When done Squad !!!

Everybody should pull the last version
Let's finish the app together with our first POST requests

----->

- add a models folder a the project's root
- add a new file @ models/User.js
- add a create route
- add a detail view with an update form
- add an update route
- add a remove button on the hackers list
- add a delete route


