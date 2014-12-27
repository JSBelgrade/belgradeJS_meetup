module.exports = function (app, pg) {
  'use strict';

  var path = require('path');
  var User = require('../db/User.js');


  // Categories
  // -------------------------
  app.get('/api/users', function(req, res) {

    User.find(function(err, docs) {
      if (err) return console.log('error fetching users');
      return res.json(docs);
    });
  });

  app.get('/api/users/:user_id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) res.send(err);
      return res.json(user);
    });
  });

  app.post('/api/users', function (req, res) {
    var user = new User(req.body);

    user.save(function(err, u) {
      if (err) return console.log(err);
      return res.send(u);
    })
  });

  app.put('/api/users/:user_id', function(req, res) {
    var userData = req.body;
    return console.log(userData);

    User.update({ _id: req.params.user_id }, userData, function(err) {
      if (err) return console.log('error updating user');

      console.log('user is updated');
      return res.send(true);
    });
  });

  app.delete('/api/users/:user_id', function(req, res) {
    console.log(req.params.user_id);

    User.remove({ _id: req.params.user_id }, function(err) {
      if(!err) {
        console.log('user is removed');
        return res.send(true);
      } else {
        console.log(err);
      }
    });
  });



  // frontend routes
  // -------------------------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(path.resolve('./public/views/index.html'));
  });
};
