/* global fetch */

import API_URL from './config';
import toJSON from './utils';

const TOKEN = 'BQCxAjLeD8NAV_S4c5qA9mvEIa0QF753PgnzSa9qZ4ca1Er-eFZdt2iBc3yk9orAuSbTo20r0rIPJFsoNXYndxewWmA3fFP59BRRtNl8ev1wcl0oiOXxd-R_qWknT622AcsZiZ7seRRXBfj4Lp103B-r8dQx';
const HEADERS = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};

export const getAlbum = (query) => fetch(`${API_URL}/albums/?ids=${query}`, HEADERS).then(toJSON);
export const getAlbums = (query) => fetch(`${API_URL}/albums/?ids=${query}`, HEADERS).then(toJSON);
export const getAlbumTracks = (query) => fetch(`${API_URL}/albums/${query}/tracks`).then(toJSON);
