// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },

  // },

  production: {
    client: 'postgresql',
    connection: {
      database: 'users',
      user:     'username',
      password: 'password',
      filename: './data/users.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    }
  }

};
