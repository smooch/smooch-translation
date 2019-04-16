require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  language: process.env.LANGUAGE_CODE,
  serviceUrl: process.env.SERVICE_URL,
  yandex: {
    key: process.env.YANDEX_API_KEY
  },
  smooch: {
    keyId: process.env.SMOOCH_KEY_ID, // app key ID
    secret: process.env.SMOOCH_SECRET, // app key secret
  },
  service: process.env.SMOOCH_SERVICE || 'https://api.smooch.io/v1'
};
