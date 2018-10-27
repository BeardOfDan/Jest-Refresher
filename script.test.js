const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

it('this is a test', () => {
  googleSearch('testtest', dbMock);
});
