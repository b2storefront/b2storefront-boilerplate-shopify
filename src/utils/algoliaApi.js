import axios from 'axios'

const algoliaApi = axios.create({
  baseURL: process.env.ALGOLIA_API_REST,
  headers: {
    'X-Algolia-API-Key': process.env.ALGOLIA_ADMIN_KEY,
    'X-Algolia-Application-Id': process.env.GATSBY_ALGOLIA_APP_ID
  }
})

export const getTopSearchesAnalytic = async (index) => {
  const { data } = await algoliaApi.get(`2/searches?index=${index}&limit=6`)
  return data
}