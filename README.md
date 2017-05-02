_**Intended use:** This code is a proof of concept and is not meant to be used in production. It should be used as a reference only to create your own implementation._

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This Smooch message processor uses the Yandex translation API to auto detect language and translate appUser messages into a target language. The translation is added as metadata to the message.

This is an example of a Smooch message payload containing translation metadata:

```javascript
{
  metadata: {
    translationAction: 'Translated from English to French',
    translation: 'Les collines sont vivantes avec le son de la musique'
  },
  text: 'The hills are alive with the sound of music',
  type: 'text',
  role: 'appUser',
  received: 1490642950.254,
  authorId: '58299436874ed1abb9717264',
  name: 'Anastasi Theodore',
  _id: '58d9680626a1b02700490079',
  source: {
    type: 'web',
    id: 'd0f0d815087b4f749dadc59d56ebc6f8'
  },
  id: '58d9680626a1b02700490079'
}
```

Here's a screenshot of a message with the translation metadata displayed below the original message:

<img width="497" alt="screen shot 2017-03-27 at 3 29 17 pm" src="https://cloud.githubusercontent.com/assets/2235885/24374451/ed840a58-1302-11e7-88e7-4861f7707563.png">

This screenshot was created using an open source reference implementation of Smooch, [Smooch-Desk](https://github.com/smooch/smooch-desk).
