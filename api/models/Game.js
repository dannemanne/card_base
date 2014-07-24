/**
 * Game
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text'
    },
    noOfDecks: {
      type: 'integer',
      defaultsTo: 1
    },
    includeJokers: {
      type: 'boolean',
      defaultsTo: true
    },
    minPlayers: {
      type: 'integer',
      defaultsTo: 1,
      required: true
    },
    maxPlayers: {
      type: 'integer',
      defaultsTo: 4,
      required: true
    },
    allowedActions: {
      type: 'array'
    }
  }

};
