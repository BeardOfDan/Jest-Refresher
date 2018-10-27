const axios = require('axios');
const swapi = require('./script2');

describe('The swapi api', () => {
  it('calls swapi to get people', async (done) => {
    expect.assertions(1);

    try { // protects against malformed url in swapi.getPeople
      const data = await swapi.getPeople(axios);
      expect(data.count).toBe(87);
    } catch (e) {
      console.log(`Error: ${e}`);
      expect(true).toBe(false);
    } finally {
      done();
    }
  });

  it('calls swapi to get people with a promise', (done) => {
    expect.assertions(2);

    swapi.getPeoplePromise(axios)
      .then((res) => {
        expect(res.count).toBe(87);
        expect(res.results.length).toBeGreaterThan(5);
        done();
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
        expect(false).toBe(true);
        done();
      });
  });
});

describe('getPeoplePromise', () => {
  it('returns count and results', () => {
    expect.assertions(4);

    const mockAxios = {};
    mockAxios.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: { count: 87, results: new Array(87) } });
    });

    return swapi.getPeoplePromise(mockAxios)
      .then((res) => {
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith('https://swapi.co/api/people');
        expect(res.count).toBe(87);
        expect(res.results.length).toBeGreaterThan(5);
      });
  });
});
