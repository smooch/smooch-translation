require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  language: process.env.LANGUAGE_CODE,
  serviceUrl: process.env.SERVICE_URL,
  yandex: {
    key: process.env.YANDEX_API_KEY
  },
  smooch: {
    keyId: process.env.SMOOCH_KEY_ID,
    secret: process.env.SMOOCH_SECRET
  }
};
