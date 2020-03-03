exports.seed = function seed( knex ) {

  var tableName = 'icecreams';

  var rows = [

    {
      name: 'Chocolate',
    },
    {
      name: 'Vanilla',
    },

  ];

  return knex( tableName )
      // Empty the table (DELETE)
    .del()
    .then( function() {
      return knex.insert( rows ).into( tableName );
    });

};
