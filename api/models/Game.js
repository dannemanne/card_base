/**
 * Game
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    gameTypeId: {
      type: 'integer',
      required: true
    },
    creator: {
      type: 'integer',
      required: true
    },
    noOfPlayers: {
      type: 'integer',
      defaultsTo: 0
    },
    status: {
      type: 'integer',
      defaultsTo: 0
    }
  }

};
