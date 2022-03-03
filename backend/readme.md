# Creating a Rest Api
* npm install --save epress
* npm install --save-dev nodemon

## Package.json update

* Inside scripts section add "start": "nodemon app.js"
* make sure to create an app.js file

## Inside app.js file
* create express variable and require express
* create app variable using express()
* make the app listen to any port of your choice

## To add routes and do something about incoming requests
* npm install --save body-parser

## now add routes
* create routes folder
* inside create a js file
* create express variable and require express
* create router variable using express.Router()
* define some routes eg:
  * router.get('/posts')
* then add module.exports = router

## Now add controllers folder
create a js file similiar to the one inside the routes folder
* In here create your exports.getPosts = (req, res, next) = {}

// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/