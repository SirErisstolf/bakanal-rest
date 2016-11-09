//File: routes/tvshows.js
module.exports = function(app) {

  var Provider = require('../models/provider.js');

  //GET - Return all tvshows in the DB
  findAllProviders = function(req, res) {
  	Provider.find(function(err, providers) {
  		if(!err) {
        console.log('GET /providers');
       // console.log(req.headers);
       // console.log(req.headers['mytoken']);
        if(req.headers['mytoken'] == 'perrogato'){
           res.send(providers);
        }
  			  else {

            res.status(403).send('Sorry! you cant see that.');
          }
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
    console.log ('req: ----->' + req.params.id);
    console.log('GET /provider/' + req.params.id);
  	Provider.findById(req.params.id, function(err, providers) {
  		if(!err) {
        console.log('GET /provider/' + req.params.id);
  			res.send(providers);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findOne = function(req, res) {

   // console.log("bad");
    Provider.findOne({ 'key': req.params.id }, function (err, provider) {
       if(!err) {
        res.send(provider);
      }
      if (err) return handleError(err);
      //console.log('ERROR: ' + err) // Space Ghost is a talk show host.
    })
  };

  //POST - Insert a new TVShow in the DB
  addProvider = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var provider = new Provider({

      nombre:   req.body.nombre,
      frase:   req.body.frase,
      mensaje:  req.body.mensaje,
      precio:   req.body.precio,
      medidas:   req.body.medidas,
      telefono:   req.body.telefono,
      servicios:  req.body.servicios,
      foto:     req.body.foto,
      galeria:  req.body.galeria,
      edad:     req.body.edad,
      estatura:   req.body.estatura,
      peso:     req.body.peso,
      horario:  req.body.horario,
      sector:   req.body.sector,
      user:   req.body.user,
      key:   req.body.key,
      tv:    req.body.tv,
      website:   req.body.website,
      facebook:   req.body.facebook,
      instagram:   req.body.instagram,
      twitter:   req.body.twitter




  	});

  	provider.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(provider);
  };

  //PUT - Update a register already exists
  updateProvider = function(req, res) {
  	Provider.findById(req.params.id, function(err, provider) {

      provider.nombre =   req.body.nombre;
      provider.frase =   req.body.frase;
      provider.mensaje =  req.body.mensaje;
      provider.precio =   req.body.precio;
      provider.medidas =   req.body.medidas;
      provider.telefono =   req.body.telefono;
      provider.servicios =  req.body.servicios;
      provider.foto =     req.body.foto;
      provider.galeria =  req.body.galeria;
      provider.edad =     req.body.edad;
      provider.estatura =   req.body.estatura;
      provider.peso =     req.body.peso;
      provider.horario =  req.body.horario;
      provider.sector =   req.body.sector;
      provider.tv =   req.body.tv;
      provider.website =   req.body.website,
      provider.facebook =   req.body.facebook,
      provider.instagram =   req.body.instagram,
      provider.twitter =   req.body.twitter




  		provider.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(provider);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteProvider = function(req, res) {
  	Provider.findById(req.params.id, function(err, provider) {
  		provider.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/providers', findAllProviders);
  app.get('/provider/:id', findOne);
  app.post('/provider', addProvider);
  app.put('/provider/:id', updateProvider);
  app.delete('/provider/:id', deleteProvider);

}