
- create the hbs layout with the minimal markup
- use the [Mongoose Introduction](https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202006_PAR/units/ironhack-course-chapter_4-sequential_3-vertical) 
- you can test your file separately with node
- in app.js
- for the moment, let's **hardcode** 2 arrays
-  A / const **users** (an array objects)
  - each object has 3 properties:
    - name
    - email
    - favorite-langage
-  B / const **images** (an array strings)
    - each string represent the path to an image (see iteration 3)

- /                             (renders home  + pass **images** as a view parameter )
- /my-dev-squad                 (renders allUsers + pass **users** as a view parameter)  
- /add-new-ironhacker           (renders formUser)            
- **Bonus**: /api/ironhackers   (respond users as a json string :)
- create the related views, with a h1 title only
## **Team splitting starts here **

- modify home view : 
 - have a look to the app.get("/") route **before** to pass the partial's widget
- modify allUsers view : 
  - displays a list of **users** with a hbs loop
  - **users** is an array of objects (name, email, favoriteProgLangage) passed as a view parameter
  - have a look to the app.get(" /my-dev-squad") route !!!
- modify formUser view : 
  - each input MUST have a name attribute (check @mdn)
    - userName
    - userEmail
    - userFavoriteLangage
### -------- Iteration 14 (and counting :) --------
When done Squad !!!
Let's finish the app together with our first POST requests

----->

- add a models folder a the project's root
- add a new file @ models/User.js
- add a create route
- add a detail view with an update form
- add an update route
- add a remove button on the hackers list
- add a delete route

