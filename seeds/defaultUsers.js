exports.seed = function seed( knex ) {

  var tableName = 'users';

  var rows = [

    {
      email: 'test@test.com',
      name: 'Marvel Marvelous',
      password: 'password',
      username: 'test',
    },

  ];

  return knex( tableName )
    // Empty the table (DELETE)
    .del()
    .then( function() {
        return knex.insert( rows ).into( tableName );
    });

};
