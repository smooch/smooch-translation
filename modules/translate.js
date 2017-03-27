const yandex = require('../endpoints/yandex');
const lookup = require('../config/language-codes.json')

module.exports = ({ key, lang, text }) => {
  const urlStrippedText = text.replace(/https:\/\/[^\s]*/, '[url]');
  const request = yandex({ key });
  return request('/translate', { lang, text: urlStrippedText })
    .then(({ code, lang, text }) => {
      const languages = lang.split('-');
      const from = lookup[languages[0]];
      const to = lookup[languages[1]];
      const translationAction = `Translated from ${from} to ${to}`;
      return { translation: text[0], translationAction };
    });
}
