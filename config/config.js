
module.exports = {
  "development": {
    "username": "zeer",
    "password": "",
    "database": "survey",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
