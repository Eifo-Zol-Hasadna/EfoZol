var knex = require('knex')({
  client: 'pg',
  connection: GLOBAL.Settings.connectionObject
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;