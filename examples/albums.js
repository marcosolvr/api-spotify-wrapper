/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAhjPP5N3pxtFnjuIwNXpkRsRt9LKCxVCv3-krF7_Aj3u4cPZT-i3lx80pZz4V7y2QQFLRg0M7oDCn4sE6fu1nofHFIA0UJkgdLTJN2LHuhiXys4bL-QSsXJdlvDW9C70Ne2MHFZ27cV1hGo_uaVS5uDjVH'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.nome)));
