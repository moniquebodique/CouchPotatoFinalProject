// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
var path = require("path");

// Dependencies
// Grabbing our models

var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting all of the tv shows
  app.get("/api/shows", function(req, res) {
    db.Show.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });

  function isIdUnique (id) {
    return db.User.count({ where: { username: id } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
  }

  // POST route for saving a new user. You can create a user using the data on req.body
  app.post("/api/new", function(req, res) {
    if (req.body.username==""){
     
    }else{
      isIdUnique(req.body.username).then(isUnique => {
        if (isUnique) {
          console.log("is unique")
          console.log(req.body);
          db.User.create({
            // text: req.body.name,
            username: req.body.username,
            password: req.body.password
          }).then(function() {  
            res.redirect("/main");
          }).catch(function(err) {
            console.log(err);
              res.json(err);
          
          });
        } else {
          //res.redirect("/")
        }
      });
    }
  });

  app.post('/signin',
  // passport.authenticate('local'),
  function(req, res) {
    res.redirect('/main/'+ req.user.username);
  });

  app.get("/api/rec", function(req, res) {
    db.Show.findAll({
      // where: {
      //   genres: '["Food"]'
      // }
    }).then(function(Show) {
      res.json(Show);
    });
  });

 

  // // DELETE route for deleting todos. You can access the todo's id in req.params.id
  // app.delete("/api/todos/:id", function(req, res) {

  // });

  // // PUT route for updating todos. The updated todo will be available in req.body
  // app.put("/api/todos", function(req, res) {

  // });
};

///////////////////////////////////////////////////////////////////////////////////////////

  // // GET route for getting all of the todos
  // app.get("/api/todos", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Todo.findAll({}).then(function(dbTodo) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });

  // // POST route for saving a new todo
  // app.post("/api/todos", function(req, res) {
  //   console.log(req.body);
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.Todo.create({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function(dbTodo) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });