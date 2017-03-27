const qs = require('qs');
const fetch = require('node-fetch');
const service = 'https://translate.yandex.net/api/v1.5/tr.json';

const requestFunctionGenerator = (key) => (path, data) => {
  const query = qs.stringify(Object.assign(data, { key }));

  return fetch(service + path + '?' + query, {
    headers: { Accept: 'application/json' }
  })
    .then(res => res.json());
}

module.exports = creds => requestFunctionGenerator(creds.key);
