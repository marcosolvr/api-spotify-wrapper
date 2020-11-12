'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var TOKEN = 'BQCxAjLeD8NAV_S4c5qA9mvEIa0QF753PgnzSa9qZ4ca1Er-eFZdt2iBc3yk9orAuSbTo20r0rIPJFsoNXYndxewWmA3fFP59BRRtNl8ev1wcl0oiOXxd-R_qWknT622AcsZiZ7seRRXBfj4Lp103B-r8dQx';
var HEADERS = {
  headers: { Authorization: 'Bearer ' + TOKEN }
};

var getAlbum = exports.getAlbum = function getAlbum(query) {
  return fetch(_config2.default + '/albums/?ids=' + query, HEADERS).then(_utils2.default);
};
var getAlbums = exports.getAlbums = function getAlbums(query) {
  return fetch(_config2.default + '/albums/?ids=' + query, HEADERS).then(_utils2.default);
};
var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(query) {
  return fetch(_config2.default + '/albums/' + query + '/tracks').then(_utils2.default);
};