const smooch = require('../endpoints/smooch');
const translate = require('./translate');
const config = require('../config');

module.exports = async (req, res) => {
  try {
    const text = req.body.message.text;
    const appId = req.body.app._id;
    const nonce = req.body.nonce;
    const metadata = await translate({
      key: config.yandex.key,
      lang: config.language,
      text
    });

    await smooch({ nonce }).post('/middleware/continue', { metadata });
    res.end();
  } catch(err) {
    console.log('ERROR IN HANDLER', err);
    res.status(500).send(err.message);
  }
};
