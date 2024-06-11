// "use server";
// import querystring from "querystring";

import { NextResponse } from "next/server";

// const client_id = process.env.SPOTIFY_CLIENT_ID;
// const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// const basic = btoa(`${client_id}:${client_secret}`);
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// export const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: querystring.stringify({
//       grant_type: "refresh_token",
//       refresh_token,
//     }),
//   });

//   const data = await response.json();
//   return data.access_token;
// };

// export const getNowPlaying = async (accessToken) => {
//   const response = await fetch(NOW_PLAYING_ENDPOINT, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     cache: "no-store",
//   });

//   if (response.status === 204 || response.status > 400) {
//     return { isPlaying: false };
//   }

//   const data = await response.json();

//   return {
//     isPlaying: data.is_playing,
//     song: data.item.name,
//     artist: data.item.artists.map((artist) => artist.name).join(", "),
//     album: data.item.album.name,
//     albumImageUrl: data.item.album.images[0].url,
//   };
// };

export async function GET() {
  // const accessToken = await getAccesToken();
  // const nowPlaying = await getNowPlaying(accessToken);

  return NextResponse.json({ isPlay: true });
}
