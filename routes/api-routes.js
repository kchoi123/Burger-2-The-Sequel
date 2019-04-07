// Dependencies
// =============================================================

var express = require("express");
var app = express();

const util = require('util')

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Home
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      // We have access to the burgers as an argument inside of the callback function
      // console.log("submit button" + JSON.stringify(results));
      // console.log("KC FIRST" + util.inspect(results[0].dataValues, false, null, true /* enable colors */))
      var placeHolder = [];

      for (var i = 0; i < results.length; i++) {
        placeHolder.push(results[i].dataValues);
      }

      var hbsObject = {
        burgers: placeHolder
      };

      // console.log("this is hbsObject" + hbsObject);
      console.log("KC SECOND" + util.inspect(hbsObject, false, null, true /* enable colors */))


      res.render("index", hbsObject);
    });
  });

  // // GET route for getting all of the burgers
  // app.get("/api/burgers", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Burger.findAll({}).then(function(results) {
  //     // We have access to the burgers as an argument inside of the callback function
  //     res.json(results);
  //   });
  // });

  // POST route for saving a new burger
  app.post("/api/burgers", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      text: req.body.text,
      devoured: req.body.devoured
    }).then(function (results) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(results);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT
  app.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition = ", condition);
    console.log("req.body.devoured = " + req.body.devoured)
    console.log("req.body.id = " + req.body.id);

    db.Burger.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        console.log("PUT Result = " + results);
        res.json(results);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  // req.params.id
  // app.delete("/api/burgers/:id", function (req, res) {
  //   // We just have to specify which burger we want to destroy with "where"
  //   db.Burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (results) {
  //     res.json(results);
  //   });

  // });

};
