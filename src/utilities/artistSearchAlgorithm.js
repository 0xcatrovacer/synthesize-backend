
// const getDistance = (str1 = '', str2 = '') => {
//     const track = Array(str2.length + 1).fill(null).map(() =>
//         Array(str1.length + 1).fill(null));
//     for (let i = 0; i <= str1.length; i += 1) {
//         track[0][i] = i;
//     }
//     for (let j = 0; j <= str2.length; j += 1) {
//         track[j][0] = j;
//     }
//     for (let j = 1; j <= str2.length; j += 1) {
//         for (let i = 1; i <= str1.length; i += 1) {
//             const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
//             track[j][i] = Math.min(
//                 track[j][i - 1] + 1, // deletion
//                 track[j - 1][i] + 1, // insertion
//                 track[j - 1][i - 1] + indicator, // substitution
//             );
//         }
//     }
//     return track[str2.length][str1.length];
// };

// function sort(artists, arr) {
//     const len = arr.length;
//     let checked;
//     do {
//         checked = false;
//         for (let i = 0; i < len; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let tmp1 = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = tmp1;

//                 let tmp2 = artists[i];
//                 artists[i] = artists[i + 1];
//                 artists[i + 1] = tmp2;

//                 checked = true;
//             }
//         }
//     } while (checked);
//     return artists;
// }

// function getArtists(input, trackNames) {

//     const len = trackNames.length;
//     var arr = new Array(len);
//     for (let i = 0; i < len; i += 1) {
//         const artlen = trackNames[i].artists.length;
//         for (let j = 0; j < artlen; j += 1) {
//             dist = getDistance(input, trackNames[i].artists[j]);
//             arr[i] = dist;
//         }
//     }

//     return sort(trackNames, arr);

// }

// const arts = getArtists('dj snake', [{
//     title: 'A',
//     artists: ['Major Lazer', 'DJ Snake']
// }, {
//     title: 'B',
//     artists: ['Justin Bieber']
// }, {
//     title: 'C',
//     artists: ['HelpMeIAm', 'PrettyMuchStuck']
// }, {
//     title: 'D',
//     artists: ['DJ Snake', 'Justin Bieber']
// }, {
//     title: 'E',
//     artists: ['Ed Sheeran', 'DJ Snake']
// }, {
//     title: 'F',
//     artists: ['Justin Bieber', 'Ed Sheeran']
// },
// ]
// )

// console.log(arts)

// module.exports = getArtists;
