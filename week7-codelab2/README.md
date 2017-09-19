# week7-codelab2

Rule:
+ function 
- explanation
```command line```

# --------------------- client ---------------------------
# Start    
    - build from previous work
```cp -r week6 week7-codelab2```

# Auth/Auth.js, function
    + authenticateUser(token, email)
    + isUserAuthenticated()
    + deauthenticate()
    + getToken()
    + getEmail()
# Base/Base.js, UI
    + render()
    - render, includes navbar and children
    - children, wait loading children
    - Base.propTypes = { children: PropType}
# Login/LoginPage.js, function
    + processForm(event)
    + changeUser(event)
    + render()   
    - post req to server
    - event includes name password
# Login/LoginForm.js, UI
    + render()
# SignUp/SingUpPage.js, function
    + processForm(event)
    + changeUser(event)
    + render()
# SignUp/SingUpForm.js,UI
    + render()
# react-router 
    - update latest later
```npm install --save react-router@"<4.0.0"```

# routes.js

# Delete node_modules & npm install again
    - reason: copy from previous floder may be not work

# --------------------- server ---------------------------
# Install cross origin
```npm install --save cors```
# app.js
    - import cors
# Server/config/config.json
    - mongodb connecting info
    - jwt secret
    - install mongoose  
```npm install --save mongoose```
# models/user.js
    - user.js using schema
    - index build B+ tree and unique
```npm install --save bcrypt```    

    - Install bcrypt
    - password hash
    - password compare
    - add salt

    + UserSchema.methods.comparePassword()
    + UserSchema.pre ()

# models/main.js
    - connect to mongo db and load

# app.js
    
    - use auth
    - config require
    - require (main.js).

# passport/login_passport.js

    - find a user by email address
    - check user's password

# web_server/server/
```npm install --save passport```
```npm install --save passport-local```
```npm install --save jsonwebtoken```

 

# passport/sign_passport.js


# app.js
    - use passport local stradge

# middleware/auth_checker.js
    - input: client post req, with jwt
    - output: checker


    - req.body -> json
```npm install --save body-parser```

    - email validator
```npm install --save validator```

# routes/auth.js
    + validateSigin()
    + validateLoginForm()

# Remove node_modules & reinstall
    - since path dependency
# app.js

# --------------------- Additional ---------------------------
# NewsPanel.js
    - loadMoreNews()
    - Header include 'type: token' 

# Q&A
    - is password encry from client post req? 
    - no, even encry not work, hacker can use encry password,  so use https
    
    - load passport stratages
    - only init when start server
    
