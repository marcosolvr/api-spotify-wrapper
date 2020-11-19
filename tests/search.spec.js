/* eslint-disable no-unused-vars */
import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', function () {
  let fetchedStub;
  let spotify;

  beforeEach(function () {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(function () {
    fetchedStub.restore();
  });

  describe('Smoke Tests', function () {
    it('Should exist the spotify.search.albums method', function () {
      expect(spotify.search.albums).to.exist;
    });

    it('Should exit the spotify.search.artists method', function () {
      expect(spotify.search.artists).to.exist;
    });

    it('Should exist the spotify.search.tracks method', function () {
      expect(spotify.search.tracks).to.exist;
    });

    it('Should exist the spotify.search.playlists method', function () {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('searchArtists', function () {
    it('Should call fetch function', function () {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = spotify.search.artists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', function () {
    it('Should call fetch function', function () {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = spotify.search.albums('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchTracks', function () {
    it('Should call fetch function', function () {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', function () {
    it('Should call fetch function', function () {
      const playlist = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const playlist = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlist2 = spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
