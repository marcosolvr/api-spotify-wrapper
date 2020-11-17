import { API_URL } from './config';

import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }

  request(url) {
    const headers = {
      headers: { Authorization: `Bearer ${this.token}` },
    };

    fetch(url, headers);
  }
}
