/* eslint-disable no-unused-vars */
import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

Chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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

  describe('Generic Search', function () {
    let fetchedStub;

    beforeEach(function () {
      fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(function () {
      fetchedStub.restore();
    });

    it('Should call fetch function', function () {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOn;
    });

    it('Should call fetch with the current URL', function () {
      context('Passing one type', function () {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('Passing more than one type', function () {
        const artistAndAlbum = search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
      });
    });
  });
});
