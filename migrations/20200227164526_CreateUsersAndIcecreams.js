
exports.up = function(knex) {
  return knex.schema
    .createTable( 'users', function( usersTable ) {
      // Primary key
      usersTable.increments('id').primary();

      // Data
      usersTable.string( 'email' ).notNullable().unique();
      usersTable.string( 'name' ).notNullable();
      usersTable.string( 'password' ).notNullable();
      usersTable.string( 'username' ).notNullable().unique();

      usersTable.timestamps(true, true);
    })

    .createTable( 'icecreams', function( icecreamsTable ) {

      // Primary Key
      icecreamsTable.increments('id').primary();
      // Foreign Key
      icecreamsTable.integer( 'user_id' ).unsigned();
      icecreamsTable.foreign( 'user_id' ).references( 'users.id' );

      // Data
      icecreamsTable.string( 'category' ).notNullable().defaultTo( 'traditional' );
      icecreamsTable.string( 'name' ).notNullable();
      icecreamsTable.string( 'picture_url' ).notNullable().defaultTo(
        'https://images.unsplash.com/photo-1526653054275-5a4f37ea1c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
      );
      icecreamsTable.boolean( 'has_dairy' ).notNullable().defaultTo( true );
      icecreamsTable.boolean( 'has_eggs' ).notNullable().defaultTo( false );
      icecreamsTable.boolean( 'has_fruit' ).notNullable().defaultTo( false );
      icecreamsTable.boolean( 'is_public' ).notNullable().defaultTo( true );
      icecreamsTable.boolean( 'has_nuts' ).notNullable().defaultTo( false );
      icecreamsTable.boolean( 'has_soy' ).notNullable().defaultTo( false );
      icecreamsTable.boolean( 'is_vegan' ).notNullable().defaultTo( false );

      icecreamsTable.timestamps(true, true);
    } );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists( 'icecreams' )
    .dropTableIfExists( 'users' );
};
