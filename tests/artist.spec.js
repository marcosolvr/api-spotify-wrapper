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

  describe('getArtist', function() {
    it('should call fetch function', function() {
      let artist = spotify.artist.getArtist('123456789a');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the currect URL', function() {
      let artist = spotify.artist.getArtist('123456789a');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/artists/123456789a');
    });

    it('should return the currect data from Promise', function() {
      let artist = spotify.artist.getArtist('123456789a');
      artist.then((data) => {
        expect(data).to.be.eql({ artist: 'name' })
      });
    });
  });

  describe('getArtistAlbums', function() {
    it('should call fetch function', function() {
      let artistAlbums = spotify.artist.getArtistAlbums('123456789a');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', function() {
      let artistAlbums = spotify.artist.getArtistAlbums('123456789a');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/artists/123456789a/albums');
    });

    it('should return the currect data from Promise', function() {
      let artistAlbums = spotify.artist.getArtistAlbums('123456789a');
      artistAlbums.then((data) => {
        expect(data).to.have.been.eql({ artist: 'name' });
      });
    });
  });

  describe('getArtistTopTracks', function() {
    it('should call fetch function', function() {
      let artistTopTracks = spotify.artist.getArtistTopTracks('123456789a');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', function() {
      let artistTopTracks = spotify.artist.getArtistTopTracks('123456789a');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/artists/123456789a/top-tracks');
    });

    it('should return the currect data from Promise', function() {
      let artistTopTracks = spotify.artist.getArtistTopTracks('123456789a');
      artistTopTracks.then((data) => {
        expect(data).to.have.been.eql({ artist: 'name' });
      });
    });
  });

  describe('getRelatedArtists', function() {
    it('should call fetch function', function() {
      let relatedArtists = spotify.artist.getRelatedArtists('123456789a');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', function() {
      let relatedArtists = spotify.artist.getRelatedArtists('123456789a');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/artists/123456789a/related-artists');
    });

    it('should return the currect data from Promise', function() {
      let relatedArtists = spotify.artist.getRelatedArtists('123456789a');
      relatedArtists.then((data) => {
        expect(data).to.have.been.eql({ artist: 'name' });
      });
    });
  });
});
