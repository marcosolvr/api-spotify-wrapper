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

var TOKEN = 'BQDARYEjIe_XhxANGT3N_Qc_PqMjeKsSx2vaWuQf-F6UL_eB1qKQS1o8E1lmsZJYsxY0m6UfnPYrFOZLf85JZXMisiC35vsdqqpcYUj3fYBpfgjy0brB9jhQu32U6k_R4gm6Pfe_MQLhbSB_3VlmIPYS-9hz';
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