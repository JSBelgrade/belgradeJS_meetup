var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  email: { type: String, unique: true },
  register_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
