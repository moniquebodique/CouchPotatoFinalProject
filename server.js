var express = require ("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+"/view"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
  
var GetContent = require("./controller/getContent.js");
var updateDB = new GetContent("http://api.tvmaze.com/schedule");