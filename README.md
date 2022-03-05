
# Polling Api

In this project i have created an api in which the user can add,remove,view questions and add options to that questions and in options you can add votes to it

## Authors

- [Chirag Bansal](https://www.github.com/chiragbansal123)

## Directory Structure


    |-- index.js
    |-- package-lock.json
    |-- package.json
    |-- config
    |   |-- mongoose.js
    |-- controllers
    |   |-- api
    |       |-- v1
    |           |-- homeController.js
    |           |-- optionsController.js
    |           |-- questionsController.js
    |-- model
    |   |-- option.js
    |   |-- question.js
    |-- routes
        |-- index.js
        |-- api
            |-- index.js
            |-- v1
                |-- index.js
                |-- options.js
                |-- questions.js



## How to Use

### To get all the data(use get)

localhost:7000/api/v1 

### To add questions(use post)

localhost:7000/api/v1/questions/create

###  To add options(use post)

localhost:7000/api/v1/options/:id/options/create

### To add votes(use post)

localhost:7000/api/v1/options/:id/addvotes

### To remove question(use delete) 

localhost:7000/api/v1/questions/:id/delete

## To install libraries

### npm install

## Create the Directory Structure

### on current directory:  mddir

## Tech Stack

NodeJs

MongoDB

Express

