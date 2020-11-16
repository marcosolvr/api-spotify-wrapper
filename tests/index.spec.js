import { expect } from 'chai';

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
});
