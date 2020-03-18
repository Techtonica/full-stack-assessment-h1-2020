const express = require('express');
const TMDB = require('./src/db');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/**
 * A way to change the defaults.
 * You can run this app like:
 * `DB_NAME=osito npm start` and it will
 * use the DB named osito instead of tmdb-dev.
 */
const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;
const DEFAULT_DB_NAME = 'tmdb-dev';
const DB_NAME = process.env.DB_NAME || DEFAULT_DB_NAME;

const api = express();

// Middlewares
api.use(morgan('tiny'));
api.use(bodyParser.json());

/**
 * This will just print the incoming request bodies
 * which is useful for debugging. You can skip it if you want
 * by removing
 */
const bodyDebugMiddleware = require('./src/body-debug-middleware');
api.use(bodyDebugMiddleware);

/**
 * Creates a new database object.
 * Add new database queries there.
 */
const db = new TMDB(DB_NAME);

// GET /movies
api.get('/movies', (_unused, res) =>
  db.getMovies().then(movies => res.send(movies))
);

// POST /movies
api.post('/movies', (req, res) =>
  db.addMovie(req.body).then(movie => res.send(movie))
);

// sanityCheck will make sure the DB is working before listening
db.sanityCheck().then(() => {
  api.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`
    
      🎬 🎞  🍿 🎥 tmdb express api listening on port ${PORT}
      
    `);
  });
});
