# Introduction to Express

## Objectives
* What is a framework? How is it different from a Library?
* What is Express?
* Why are we using Express?

## Frameworks v. Libs
* [Frameworks v Toolkits v Libraries](https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library)
  * Inversion of Control
    * With libs you are in control. Basically you can call the functionality when and where you want.
    * With frameworks the control flow is already in the framework and there is just a bunch of predefined "white spots" that you can fill out with your code.

## Express and Why
* Express
  * it does a lot of the menial, basic work for us.
  * it uses JS
  * most popular framework on npm
  * it is a lightweight framework
  * unopinionated means that it is flexible


# First Express App
* Review an existing app (Dogdemo).
* Review HTTP response/request lifecycle
* create our own simple express app


## Review of Dog Demo App
* it seems like the bulk of the backend has to do with:
    * listening for requests
    * how to respond to them
    * persistently storing data.
## Review of HTTP res/req cycle
* when you make a GET request you are querying a database for some info
* the server then decides on how to respond

# The package.json

## Objectives
*use the `--save` flag to install packages
*Explain what the package.json file does
*Use `npm init` to create a new package.json

## What is the package.json
* [article about package.json](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)
* a manifest about an applications information
* meant to make modern development streamlined, modular, and efficient
*
## - -save
*  It will take the package name and automatically save it into our dependecies.
## `npm init`
* this is the method that I have been using to install node packages locally
* creates the package.json

# Route Params

## Objectives
* Show the `*`, or splatt, route matcher
* Write routes containing route parameters
* Discuss the route order

## app.get('*')
* acts like the else statement.
* the prior app.gets act like the if/else if statements.

## Route Parameters
* prepend parameters with : in a route pattern
    * (/r/:subredditName/comment/:id/:title) will have the following params:
        * subredditName
        * id
        * title
* You can access the params using req.params.
    * this can be used to dynamically update pages.


