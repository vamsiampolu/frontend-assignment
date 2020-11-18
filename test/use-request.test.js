const useRequest = require('../src/use-request');

jest.mock('../src/request');
const request = require('../src/request');

request.mockImplementation(() => ({
  buttons: [1,2,3],
  bars: [4,5,6]
}));


describe('useRequest', () => {
  beforeEach(() => {
     jest.clearAllMocks();
  });

  it('calls the request with the bars url', async () => {
    await useRequest(); 
    expect(request).toBeCalled();
  });

  it('calls the request with the bars url', async () => {
    await useRequest(); 
    const url = 'https://pb-api.herokuapp.com/bars';
    expect(request).toBeCalledWith(url);
  });

  it('returns the response as expected', async () => {
     const result =  await useRequest();
     expect(result).toEqual({
       buttons: [10,20,30],
       bars: [4,5,6]
    });
  });
});
