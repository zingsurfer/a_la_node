module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: '192.168.33.10',

            user: 'user',
            password: 'password',

            database: 'a_la_node',
            charset: 'utf8',

        }

    }

};
