const pgp = require('pg-promise')();

/**
 * An object that has methods matching useful database queries.
 * Use `this.db` to access a connected pg-promise connection.
 * Make sure to return the promise!
 *
 * For examples of other queries, see
 * [pghttps://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
 */
class TMDB {
  /**
   * @param {String} name - name of database to connect to
   */
  constructor(name) {
    const connectionString = `postgres://localhost:5432/${name}`;
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

  addMovie(movie) {
    // Set some defaults. Otherwise pg-promise complains if any keys are missing.
    const values = Object.assign(
      {},
      {
        summary: null
      },
      movie
    );
    return this.db.one(
      `
      INSERT INTO movies (title, year, poster_image_url, director, summary)
      VALUES ($/title/, $/year/, $/poster_image_url/, $/director/, $/summary/)
      RETURNING *
    `,
      values
    );
  }
}

module.exports = TMDB;
