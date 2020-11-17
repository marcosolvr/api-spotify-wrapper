import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

Chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWraper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({ apiURL: 'blabla' });
    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive TOKEN as an option', () => {
    let spotify = new SpotifyWrapper({ token: 'fawfq21' });
    expect(spotify.token).to.be.equal('fawfq21');
  });

  describe('request method', () => {
    let stubedFecth;

    beforeEach(() => {
      stubedFecth = sinon.stub(global, 'fetch');
      stubedFecth.resolves({ json: () => {} });
    });

    afterEach(() => {
      stubedFecth.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubedFecth).to.have.been.calledOnce;
    });

    it('should call fetch with the currect url', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubedFecth).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: { Authorization: `Bearer foo` },
      };

      spotify.request('url');
      expect(stubedFecth).to.have.been.calledWith('url', headers);
    });
  });
});
