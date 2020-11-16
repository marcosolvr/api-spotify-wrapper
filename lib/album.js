'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(query) {
  return fetch(_config.API_URL + '/albums/?ids=' + query, _config.HEADERS).then(_utils2.default);
};
var getAlbums = exports.getAlbums = function getAlbums(query) {
  return fetch(_config.API_URL + '/albums/?ids=' + query, _config.HEADERS).then(_utils2.default);
};
var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(query) {
  return fetch(_config.API_URL + '/albums/' + query + '/tracks').then(_utils2.default);
};