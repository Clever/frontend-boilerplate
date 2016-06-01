import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express();
const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo', 'index.html'));
});

router.get('/ip', (req, res) => {
  fetch('https://api.ipify.org?format=json').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }).then((response) => {
    res.json(response);
  }).catch((err) => {
    console.error(err); // eslint-disable-line no-console
    res.status(500);
    res.send('Something went wrong!');
  });
});
app.use(router);
export default app;
