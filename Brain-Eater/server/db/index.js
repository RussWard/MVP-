const mysql = require('mysql')

module.exports = (function() {
  
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password:'',
      database: 'wisdom'
    }
  })
  knex.schema.createTableIfNotExists('wisdom', function(table) {
    table.increments();
    table.string('user');
    table.string('lesson');
    table.timestamps();
  }).then(() => {
    console.log('Table Created')
  })
  return knex
}())