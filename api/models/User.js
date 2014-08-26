/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
    },

    email: {
      type: 'string',
      required: true,
      unique: true
    },

    encryptedPassword: {
      type: 'string',
      required: true
    }

  },

  // Encrypts password
  beforeCreate: function (attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(attrs.password, salt, function(err, hash) {
        if (err) return next(err);

        attrs.encryptedPassword = hash;
        next();
      });
    });
  }

};
