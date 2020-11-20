import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Artist', function() {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach(function() {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ artist: 'name' }) });
  });

  afterEach(function() {
    stubedFetch.restore();
  });

  describe('Smoke Tests', function() {
    it('should have the getArtist method', function() {
      expect(spotify.artist.getArtist).to.exist;
    });

    it('should have the getArtistAlbums', function() {
      expect(spotify.artist.getArtistAlbums).to.exist;
    });

    it('should have the getArtistTopTracks method', function() {
      expect(spotify.artist.getArtistTopTracks).to.exist;
    });

    it('should have the getRelatedArtists method', function() {
      expect(spotify.artist.getRelatedArtists).to.exist;
    });
  });
});
