const request = require('./request');

module.exports = useRequest;

async function useRequest() {
  const url = 'https://pb-api.herokuapp.com/bars';
  const { buttons, bars } = await request(url);

  return {
    buttons: buttons.map(x => x * 10),
    bars
  };
}
