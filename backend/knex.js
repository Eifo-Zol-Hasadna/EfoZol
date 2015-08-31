var knex = require('knex')({
  client: 'pg',
  connection: GLOBAL.Settings.connectionObject
});

module.exports = knex;