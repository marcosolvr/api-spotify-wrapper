/* eslint-disable no-unused-vars */
import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchedStub;

  beforeEach(function () {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(function () {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should have the getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have the getAlbumTrack method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch function', () => {
      const album = getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the current URL', () => {
      const album = getAlbum('123456789a');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=123456789a');

      const album2 = getAlbum('123456789b');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=123456789b');
    });

    it('should return the currect data from Promise', () => {
      fetchedStub.resolves({ album: 'name' });

      const album = getAlbum('53A0W3U0s8diEn9RhXQhVz');
      album
        .then((data) => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbums', () => {
    it('should call the fetch function', () => {
      const albums = getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', () => {
      const albums = getAlbums(['53A0W3U0s8diEn9RhXQhVz', '53A0W3U0s8diEn9RhXQhVa']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=53A0W3U0s8diEn9RhXQhVz,53A0W3U0s8diEn9RhXQhVa');
    });

    it('should return the currect data from Promise', () => {
      fetchedStub.resolves({ albums: 'name' });

      const albums = getAlbums(['53A0W3U0s8diEn9RhXQhVz', '53A0W3U0s8diEn9RhXQhVa']);
      albums.then((data) => expect(data).to.be.eql({ albums: 'name' }));
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call the fetch function', () => {
      const albumTracks = getAlbumTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the currect URL', () => {
      const albumTracks = getAlbumTracks('53A0W3U0s8diEn9RhXQhVz');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/53A0W3U0s8diEn9RhXQhVz/tracks');
    });

    it('should return the currect data from Promise', () => {
      fetchedStub.resolves({ album: 'name' });
      const albumTracks = getAlbumTracks('53A0W3U0s8diEn9RhXQhVz');
      albumTracks.then((data) => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
