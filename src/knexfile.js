require("dotenv").config();

module.exports = {
  development: {
    // this returns verbase output in console
    // debug: true,
    client: "pg",
    connection: {
      database: process.env.DB_NAME || "rbas",
      user: process.env.DB_USER || "admin" ,
      password: process.env.DB_PASSWORD || "password",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  test: {
    client: "pg",
    connection: {
      database: process.env.POSTGRES_TEST_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
