const axios = require('axios');
const swapi = require('./script2');

describe('The swapi api', () => {
  it('calls swapi to get people', async (done) => {
    expect.assertions(1);

    const data = await swapi.getPeople(axios);

    expect(data.count).toBe(87);

    done();
  });

  it('calls swapi to get people with a promise', (done) => {
    expect.assertions(1);

    swapi.getPeoplePromise(axios)
      .then((res) => {
        expect(res.count).toBe(87);
        done();
      })
      .catch((e) => {
        expect(false).toBe(true);
        done();
      });
  });
});
