/* global fetch */

import API_URL from './config';
import toJSON from './utils';

const TOKEN = 'BQDARYEjIe_XhxANGT3N_Qc_PqMjeKsSx2vaWuQf-F6UL_eB1qKQS1o8E1lmsZJYsxY0m6UfnPYrFOZLf85JZXMisiC35vsdqqpcYUj3fYBpfgjy0brB9jhQu32U6k_R4gm6Pfe_MQLhbSB_3VlmIPYS-9hz';
const HEADERS = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};

export const search = (query, type) => {
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
    .then(toJSON);
};
export const searchArtists = (query) => {
  search(query, 'artist');
};
export const searchAlbums = (query) => {
  search(query, 'album');
};
export const searchTracks = (query) => {
  search(query, 'track');
};
export const searchPlaylists = (query) => {
  search(query, 'playlist');
};
