const axios = require('axios');

const getPeople = (caller) => {
  return caller.get('https://swapi.co/api/people')
    .then((res) => {
      const thing = { 'count': res.data.count, 'results': res.data.results };
      console.log(thing);
      return thing;
    });
}

getPeople(axios);
