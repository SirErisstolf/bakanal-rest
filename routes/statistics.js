//File: routes/tvshows.js
module.exports = function(app) {

  var Statistics = require('../models/statistics.js');


  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
    Statistics.findById(req.params.id, function(err, stats) {
      if(!err) {
        console.log('GET /stats/' + req.params.id);
        res.send(stats);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };



  //GET - Return all tvshows in the DB

  findAllStats = function(req, res) {
  	Statistics.find(function(err, stats) {
  		if(!err) {
        console.log('GET /stats');
        //console.log(req.headers);
       // console.log(req.headers['mytoken']);
        if(req.headers['mytoken'] == 'perrogato'){
           res.send(stats);
        }
  			  else {

            res.status(403).send('Sorry! you cant see that.');
          }
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

    //POST - Insert a new TVShow in the DB
  addStat = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var stat = new Statistics({
      time:   req.body.time,
      ip:  req.body.ip,
      browser:   req.body.browser,
      login :     req.body.login

    });

    stat.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(stat);
  };

  
  app.get('/stats', findAllStats);
  app.post('/stats', addStat);

}