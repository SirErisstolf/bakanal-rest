var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var registerSchema = new Schema({
 id: 	{ type: String },
 key: 	{ type: String },
 status: 	{ type: String }
});



module.exports = mongoose.model('Register', registerSchema);