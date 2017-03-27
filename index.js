const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const pipeline = require('./modules/pipeline');
const processor = require('./modules/processor');

pipeline.setup()
  .then(data => {
    console.log(data);
    if (data && data.error) {
      throw new Error(data.error.description);
    }
    try {
      express()
        .get('/', (req, res) => res.send('Welcome to Smooch-Translation.'))
        .post('/processor', bodyParser.json(), processor)
        .listen(config.port, () => {
          console.log('Listening on', config.port);
        });
    } catch (err) {
      throw err;
    }
  })
  .catch(err => console.log('Failed to complete setup', err));
