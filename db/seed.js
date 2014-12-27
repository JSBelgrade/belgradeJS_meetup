// require modules
var mongoose  = require('mongoose'),
    _         = require('lodash'),
    charlatan = require('charlatan'),
    async     = require('async');

var User = require('./User.js');
var NUM_USERS = 100;

function run() {
  mongoose.set('debug');

  mongoose.connect('mongodb://localhost/belgradejs_meetup');
  var conn = mongoose.connection;

  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', seedData);
}

function seedData() {
  var db = mongoose.connection.db;

  async.waterfall([
    // Clean db
    function clean(cb) {
      db.dropDatabase(cb);
    },

    generateUsers(NUM_USERS),

  ], function(err) {
    if (err) console.log('failed to seed the db');

    mongoose.disconnect();
  });
}

function generateUsers(limit) {

  var generateUsers = function() {
    return {
      name: charlatan.Name.name(),
      address: charlatan.Address.streetName(),
      city: charlatan.Address.city(),
      country: charlatan.Address.country(),
      email: charlatan.Internet.freeEmail()
    };
  };

  return function( __ignore, cb ) {

    var createFns = _.range(limit).map(function() {

      // poziv ovde da bi se uvek vratili novi podaci
      // jer se u generators.js izvrsavaju funkcije sa return objektom
      // koji su zapravo izgenerisani charlatan podaci
      var dummyUser = generateUsers();

      return User.create.bind(User, dummyUser);
    });

    return async.parallel(createFns, cb);
  };
}

// Check if being invoked as main module
if (require.main === module) {
  run();
}
