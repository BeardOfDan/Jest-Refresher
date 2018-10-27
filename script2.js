const axios = require('axios');

const getPeoplePromise = (caller) => {
  return caller.get('https://swapi.co/api/people')
    .then((res) => {
      // console.log(JSON.stringify(res, '', 2));
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

// getPeoplePromise(axios);

module.exports = {
  getPeoplePromise,
  getPeople
};
