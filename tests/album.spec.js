import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbumTracks } from '../src/album';

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
      const TOKEN = 'BQCxAjLeD8NAV_S4c5qA9mvEIa0QF753PgnzSa9qZ4ca1Er-eFZdt2iBc3yk9orAuSbTo20r0rIPJFsoNXYndxewWmA3fFP59BRRtNl8ev1wcl0oiOXxd-R_qWknT622AcsZiZ7seRRXBfj4Lp103B-r8dQx';
      const HEADERS = {
        headers: { Authorization: `Bearer ${TOKEN}` },
      };
      fetchedStub.resolves({ album: 'name' });

      const album = getAlbum('53A0W3U0s8diEn9RhXQhVz');
      album
        .then((data) => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
