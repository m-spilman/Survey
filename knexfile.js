// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'surveyTest',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'survey',
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
      database: 'my_db',
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

// Update with your config settings.

// module.exports = {

 
//     development: {
//       client: 'postgresql',
//       connection: {
//         database: 'twitter',
//         user:     '',
//         password: ''
//       },
//       pool: {
//         min: 2,
//         max: 10
//       },
//       migrations: {
//         tableName: 'knex_migrations'
//       }
//     },
  
//     staging: {
//       client: 'postgresql',
//       connection: {
//         database: 'my_db',
//         user:     'username',
//         password: 'password'
//       },
//       pool: {
//         min: 2,
//         max: 10
//       },
//       migrations: {
//         tableName: 'knex_migrations'
//       }
//     },
  
//     production: {
//       client: 'postgresql',
//       connection: {
//         database: 'my_db',
//         user:     'username',
//         password: 'password'
//       },
//       pool: {
//         min: 2,
//         max: 10
//       },
//       migrations: {
//         tableName: 'knex_migrations'
//       }
//     }
  
//   };
  
  