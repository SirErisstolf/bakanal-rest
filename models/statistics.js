var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var statisticsSchema = new Schema({
 time: 		{ type: String },
 ip: 		{ type: String },
 browser: 	{ type: String },
 login: 	{ type: Boolean }
});



module.exports = mongoose.model('Statistics', statisticsSchema);