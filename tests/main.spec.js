/* eslint-disable no-unused-vars */
import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', function () {
  let fetchedStub;

  beforeEach(function () {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(function () {
    fetchedStub.restore();
  });

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

  describe('Generic Search', function () {
    it('Should call fetch function', function () {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the current URL', function () {
      context('Passing one type', function () {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('Passing more than one type', function () {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });
  });

  describe('searchArtists', function () {
    it('Should call fetch function', function () {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artists2 = searchArtists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', function () {
    it('Should call fetch function', function () {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const albums = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchTracks', function () {
    it('Should call fetch function', function () {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const tracks = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', function () {
    it('Should call fetch function', function () {
      const playlist = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the currect URL', function () {
      const playlist = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlist2 = searchPlaylists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
