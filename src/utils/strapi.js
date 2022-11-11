const axios = require("axios");

export const fetchFromStrapi = async (apiId, query) => await axios.get(`${process.env.STRAPI_URL}/${apiId}?${query}`)
