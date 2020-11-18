/* eslint-disable no-unused-vars */
import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(function () {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(function () {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should have the getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have the getAlbumTrack method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch function', () => {
      const album = spotify.album.getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', () => {
      const album = spotify.album.getAlbum('123456789a');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/123456789a');

      const album2 = spotify.album.getAlbum('123456789b');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/123456789b');
    });

    it('should return the currect data from Promise', () => {
      const album = spotify.album.getAlbum('53A0W3U0s8diEn9RhXQhVz');
      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call the fetch function', () => {
      const albums = spotify.album.getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', () => {
      const albums = spotify.album.getAlbums(['53A0W3U0s8diEn9RhXQhVz', '53A0W3U0s8diEn9RhXQhVa']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=53A0W3U0s8diEn9RhXQhVz,53A0W3U0s8diEn9RhXQhVa');
    });

    it('should return the currect data from Promise', () => {
      const albums = spotify.album.getAlbums(['53A0W3U0s8diEn9RhXQhVz', '53A0W3U0s8diEn9RhXQhVa']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getTracks', () => {
    it('should call the fetch function', () => {
      const albumTracks = spotify.album.getTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', () => {
      const albumTracks = spotify.album.getTracks('53A0W3U0s8diEn9RhXQhVz');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/53A0W3U0s8diEn9RhXQhVz/tracks');
    });

    it('should return the currect data from Promise', () => {
      const albumTracks = spotify.album.getTracks('53A0W3U0s8diEn9RhXQhVz');
      albumTracks.then((data) => {
        expect(data).to.be.eql({ album: 'name'});
      });
    });
  });
});
