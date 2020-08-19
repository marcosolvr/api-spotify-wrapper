import { expect } from 'chai';

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

describe('Spotify Wrapper', function () {
  describe('Smoke Tests', function () {
    it('Should exist the search method', function () {
      expect(search).to.exist;
    });

    it('Should exist the searchAlbums method', function () {
      expect(searchAlbums).to.exist;
    });

    it('Should exit the searchArtists method', function () {
      expect(searchArtists).to.exist;
    });

    it('Should exist the searchTracks method', function () {
      expect(searchTracks).to.exist;
    });

    it('Should exist the searchPlaylists method', function () {
      expect(searchPlaylists).to.exist;
    });
  });
});
