const axios = require('axios');

const getPeoplePromise = (caller) => {
  return caller.get('https://swapi.co/api/people')
    .then((res) => {
      const thing = { 'count': res.data.count, 'results': res.data.results };
      // console.log(thing);
      return thing;
    });
};

const getPeople = async (caller) => {
  const getRequest = await caller.get('https://swapi.co/api/people')
    .then((res) => res.data);

  const result = { 'count': getRequest.count, 'results': getRequest.results };

  // console.log(result);
  return result;
};

// getPeople(axios);

module.exports = {
  getPeoplePromise,
  getPeople
};
