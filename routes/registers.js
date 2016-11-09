//File: routes/tvshows.js
module.exports = function(app) {

  var Register = require('../models/register.js');


  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
    Register.findById(req.params.id, function(err, registers) {
      if(!err) {
        console.log('GET /register/' + req.params.id);
       // console.log(registers);
        res.send(registers);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  findOne = function(req, res) {

   // console.log("bad");
    Register.findOne({ 'status': 'waiting' }, '_id', function (err, register) {
       if(!err) {
        res.send(register._id);
      }
      if (err) return handleError(err);
      //console.log('res: ' + register._id) // Space Ghost is a talk show host.
    })
  };

  //GET - Return all tvshows in the DB

  findAllRegisters = function(req, res) {
  	Register.find(function(err, registers) {
  		if(!err) {
        console.log('GET /registers');
        //console.log(req.headers);
       // console.log(req.headers['mytoken']);
        if(req.headers['mytoken'] == 'perrogato'){
           res.send(registers);
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
  addRegister = function(req, res) {
    console.log('POST');
    console.log('sdsfdsfsdffdsfsdffdfdsdf',req);
    console.log(req.headers);

    var register = new Register({
      id:   req.body.id,
      key:  req.body.key,
      status:   req.body.status

    });

    register.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(register);
  };


  //PUT - Update a register already exists
  updateRegister = function(req, res) {
    Register.findById(req.params.id, function(err, register) {

      register.status =   req.body.status;
      

      register.save(function(err) {
        if(!err) {
          console.log('Updated');
        } else {
          console.log('ERROR: ' + err);
        }
        res.send(register);
      });
    });
  }
  /*
  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Register.findById(req.params.id, function(err, registers) {
  		if(!err) {
        console.log('GET /register/' + req.params.id);
  			res.send(registers);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };



  //PUT - Update a register already exists
  updateRegister = function(req, res) {
  	Register.findById(req.params.id, function(err, register) {

      register.nombre =   req.body.nombre;
      register.mensaje =  req.body.mensaje;
      register.precio =   req.body.precio;
      register.medidas =   req.body.medidas;
      register.servicios =  req.body.servicios;
      register.foto =     req.body.foto;
      register.galeria =  req.body.galeria;
      register.edad =     req.body.edad;
      register.estatura =   req.body.estatura;
      register.peso =     req.body.peso;
      register.horario =  req.body.horario;
      register.sector =   req.body.sector;




  		register.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(register);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteRegister = function(req, res) {
  	Register.findById(req.params.id, function(err, register) {
  		register.remove(function(err) {
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
  app.get('/registers', findAllRegisters);
  app.get('/oneregister', findOne);
  app.get('/register/:id', findById);
  app.post('/register', addRegister);
  app.put('/register/:id', updateRegister);
  //app.delete('/register/:id', deleteRegister);

}