const TOKEN = 'BQCxAjLeD8NAV_S4c5qA9mvEIa0QF753PgnzSa9qZ4ca1Er-eFZdt2iBc3yk9orAuSbTo20r0rIPJFsoNXYndxewWmA3fFP59BRRtNl8ev1wcl0oiOXxd-R_qWknT622AcsZiZ7seRRXBfj4Lp103B-r8dQx';
const HEADERS = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};
// eslint-disable-next-line no-undef
export const getAlbum = (query) => fetch(`https://api.spotify.com/v1/albums/?ids=${query}`, HEADERS).then((data) => data.json);

export const getAlbumTracks = () => {};
