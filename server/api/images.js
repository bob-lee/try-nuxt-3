// import fetch from 'isomorphic-fetch'

const API = 'https://us-central1-joanne-lee.cloudfunctions.net/getUrlsOrdered';

// export default function getUrls(path) {
//   return fetch(`${API}/${path}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         console.error('getUrls failed: ' + response.statusText)
//       }
//     })
//     .catch(error => {
//       console.error('getUrls:', error)
//       throw new Error('getUrls error: ' + error)
//     })
// }
// import * as url from 'url'

export default async (req, res) => {
  const url = API + req.url // req.url to be like '/painting'
  const images = await $fetch(url)
  console.log('images', url, images.length)
  return images
}
// export default (req, res) => `Hello api ${ new Date().getTime() }`