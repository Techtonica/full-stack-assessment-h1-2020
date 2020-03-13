const express = require('express');
const TMDB = require('./src/db');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const bodyDebugMiddleware = require('./src/body-debug-middleware');

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;
const DEFAULT_DB_NAME = 'tmdb-dev';
const DB_NAME = process.env.DB_NAME || DEFAULT_DB_NAME;

const api = express();
api.use(morgan('tiny'));
api.use(bodyParser.json());
api.use(bodyDebugMiddleware);

const db = new TMDB(DB_NAME);

api
  .route('/movies')
  .get((_, res) => db.getMovies().then(movies => res.send(movies)))
  .post((req, res) => db.addMovie(req.body).then(movie => res.send(movie)));

db.sanityCheck().then(() => {
  api.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`
    
      🎬 🎞  🍿 🎥 tmdb express api listening on port ${PORT}
      
    `);
  });
});
