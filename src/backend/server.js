import config from '../config.js';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send({ express: 'Test' });
  });

app.post('/submit', (req, res) => {
  res.json(`Order has been submitted, you'll receive an invoice for: ${req.body.items} SEK`,
  );
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));