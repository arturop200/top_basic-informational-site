import express from 'express';
import path from 'node:path';

const app = express();

const options = {
  root: path.join(import.meta.dirname),
};

app.get('/', (req, res) => res.sendFile('pages/index.html', options));

app.get('/about', (req, res) => res.sendFile('pages/about.html', options));

app.get('/contact-me', (req, res) =>
  res.sendFile('pages/contact-me.html', options),
);

app.get('/*splat', (req, res) =>
  res.status(404).sendFile('pages/404.html', options),
);

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app running at http://localhost:${PORT}/!`);
});
