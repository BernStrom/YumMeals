const url = require('url');
const { mocks, addMockImage } = require('./mock');

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  const data = mocks[location];

  if (data) {
    data.results = data.results.map(addMockImage);
  }

  response.json(data);
};
