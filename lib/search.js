'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var TOKEN = 'BQDARYEjIe_XhxANGT3N_Qc_PqMjeKsSx2vaWuQf-F6UL_eB1qKQS1o8E1lmsZJYsxY0m6UfnPYrFOZLf85JZXMisiC35vsdqqpcYUj3fYBpfgjy0brB9jhQu32U6k_R4gm6Pfe_MQLhbSB_3VlmIPYS-9hz';
var HEADERS = {
  headers: { Authorization: 'Bearer ' + TOKEN }
};

var search = exports.search = function search(query, type) {
  fetch(_config2.default + '/search?q=' + query + '&type=' + type, HEADERS).then(_utils2.default);
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
  search(query, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};