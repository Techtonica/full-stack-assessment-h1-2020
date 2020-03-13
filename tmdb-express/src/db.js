const pgp = require('pg-promise')();

class TMDB {
  constructor(name) {
    const connectionString = `postgres://postgres@localhost:5432/${name}`;
    // eslint-disable-next-line no-console
    console.log('Postgres DB => ', connectionString);
    this.db = pgp(connectionString);
  }

  sanityCheck() {
    return this.getMovieCount().then(() => null);
  }

  getMovieCount() {
    return this.db.one('SELECT count(*) FROM movies').then(r => r.count);
  }

  getMovies() {
    return this.db.any('SELECT * FROM movies');
  }
}

module.exports = TMDB;
