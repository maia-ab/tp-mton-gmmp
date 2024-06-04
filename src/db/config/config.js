module.exports = {
development: {
    username: "root",
    password: "123456",
    database: "universidad_db",
    host: "127.0.0.1",
    port: 3307,
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
