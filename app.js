// Defines an express app that runs the boilerplate codebase.

import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express();
const router = express.Router(); // eslint-disable-line new-cap

// root: displays react-redux-boilerplate webpage.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo', 'index.html'));
});

// ip: fetches IP from an API. Either returns the IP as JSON, or sends a 500 on any error.
router.get('/quote', (req, res) => {
  fetch('http://quotes.stormconsultancy.co.uk/random.json').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }).then((response) => {
    res.json(response);
  }).catch((err) => {
    // TODO: in a real app, this should actually handle errors
    console.error(err); // eslint-disable-line no-console
    res.status(500);
    res.send('Something went wrong!');
  });
});
app.use(router);
export default app;
