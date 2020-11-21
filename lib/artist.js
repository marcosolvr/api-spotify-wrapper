"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = artist;
function artist() {
  var _this = this;

  return {
    getArtist: function getArtist(id) {
      return _this.request(_this.apiURL + "/artists/" + id);
    },
    getArtistAlbums: function getArtistAlbums(id) {
      return _this.request(_this.apiURL + "/artists/" + id + "/albums");
    },
    getArtistTopTracks: function getArtistTopTracks(id) {
      return _this.request(_this.apiURL + "/artists/" + id + "/top-tracks");
    },
    getRelatedArtists: function getRelatedArtists(id) {
      return _this.request(_this.apiURL + "/artists/" + id + "/related-artists");
    }
  };
}