var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var providerSchema = new Schema({
	nombre: 	{ type: String },
	frase : 	{ type: String },
	mensaje: 	{ type: String },
	precio: 	{ type: Number },
	medidas:  	{ type: String },
	telefono:  	{ type: String },
	servicios: 	{ type: String },
	foto: 		{ type: String },
	galeria: 	[{ type: String }],
	edad: 		{ type: Number },
	estatura: 	{ type: String },
	peso: 		{ type: String },
	horario: 	{ type: String },
	sector: 	{ type: String }, 
	user: 		{ type: String },
	key:     	{ type: String },
	tv:         { type: Boolean},
	website: 	{ type: String },
	facebook: 	{ type: String },
	instagram: 	{ type: String },
	twitter: 	{ type: String }

});



module.exports = mongoose.model('Provider', providerSchema);