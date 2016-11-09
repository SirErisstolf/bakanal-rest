var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);

});



app.get('/', function(req, res) {
  res.send("Hello world!");
});
app.post('/', function(req, res, next) {
 // Handle the post for this route
})
routes = require('./routes/providers')(app);
routes = require('./routes/registers')(app);
routes = require('./routes/users')(app);
routes = require('./routes/statistics')(app);

mongoose.connect('mongodb://localhost/providers', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});



server.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});