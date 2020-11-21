export default function artist() {
  return {
    getArtist: (id) => this.request(`${this.apiURL}/artists/${id}`),
    getArtistAlbums: (id) => this.request(`${this.apiURL}/artists/${id}/albums`),
    getArtistTopTracks: (id) => this.request(`${this.apiURL}/artists/${id}/top-tracks`),
    getRelatedArtists: (id) => this.request(`${this.apiURL}/artists/${id}/related-artists`)
  };
}
