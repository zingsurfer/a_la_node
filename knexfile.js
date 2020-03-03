// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'a_la_node',
      filename: 'postgres://localhost/a_la_node'
    },
    migrations: './migrations'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'a_la_node',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'a_la_node',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
