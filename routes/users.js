//File: routes/tvshows.js
module.exports = function(app) {

  var User = require('../models/user.js');


  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
    User.findById(req.params.id, function(err, users) {
      if(!err) {
        console.log('GET /user/' + req.params.id);
        res.send(users);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };


  findMails = function(req, res) {

   // console.log("bad");
    User.find(function(err, users) {
      if(!err) {
        console.log('GET /users');
        var mails = [];
        for(var i = 0; i < users.length ; i++){

          mails.push(users[i].email)
        }
        //console.log(req.headers);
       // console.log(req.headers['mytoken']);
        if(req.headers['mytoken'] == 'perrogato'){

           res.send(mails);
        }
          else {

            res.status(403).send('Sorry! you cant see that.');
          }
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };
  //GET - Return all tvshows in the DB

  findAllUsers = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
        console.log('GET /users');
        //console.log(req.headers);
       // console.log(req.headers['mytoken']);
        if(req.headers['mytoken'] == 'perrogato'){
           res.send(users);
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
  addUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var user = new User({
      username:   req.body.username,
      password:  req.body.password,
      email:   req.body.email,
      key :     req.body.key

    });

    user.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(user);
  };


  //PUT - Update a user already exists
  updateUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {

      user.password =   req.body.password;

      user.save(function(err) {
        if(!err) {
          console.log('Updated');
        } else {
          console.log('ERROR: ' + err);
        }
        res.send(user);
      });
    });
  }
  /*
  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	User.findById(req.params.id, function(err, users) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };



  //PUT - Update a user already exists
  updateUser = function(req, res) {
  	User.findById(req.params.id, function(err, user) {

      user.nombre =   req.body.nombre;
      user.mensaje =  req.body.mensaje;
      user.precio =   req.body.precio;
      user.medidas =   req.body.medidas;
      user.servicios =  req.body.servicios;
      user.foto =     req.body.foto;
      user.galeria =  req.body.galeria;
      user.edad =     req.body.edad;
      user.estatura =   req.body.estatura;
      user.peso =     req.body.peso;
      user.horario =  req.body.horario;
      user.sector =   req.body.sector;




  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteUser = function(req, res) {
  	User.findById(req.params.id, function(err, user) {
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }
*/
  //Link routes and functions
  app.get('/users', findAllUsers);
  app.get('/user/:id', findById);
  app.get('/mails', findMails);
  app.post('/user', addUser);
  app.put('/user/:id', updateUser);
  //app.delete('/user/:id', deleteUser);

}