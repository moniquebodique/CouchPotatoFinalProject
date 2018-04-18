// Requiring our CastMember constructor function we exported from castMember.js
var db = require("../models");

const axios = require("axios");

// Constructor function for creating tv show objects
var updateDB = function(url) {
  axios
  .get(url)
  .then(response => {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      db.Show.create({
        showID: results[i].show.id,
        name: results[i].show.name,
        status: JSON.stringify(results[i].show.status),
        genres: JSON.stringify(results[i].show.genres),
        time: JSON.stringify(results[i].show.schedule.time),
        days: JSON.stringify(results[i].show.schedule.days),
        rating: JSON.stringify(results[i].show.rating),
        image: results[i].show.image.medium
      }).then(function(show) {
      });

   }
  })
  .catch(error => {
    console.log(error);
  }); 

}




// Exporting the Movie constructor which we will use in main.js
module.exports = updateDB;