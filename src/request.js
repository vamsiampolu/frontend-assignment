const axios = require('axios');

module.exports = request;

async function request(url) {
  try {
  const { data } = await axios.get(url);
  return data;
  } catch (e) {
    console.error(e);
  }
}

