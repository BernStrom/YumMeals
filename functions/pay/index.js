module.exports.payRequest = (request, response, stripe) => {
  const body = JSON.parse(request.body);
  console.log(body.token, body.amount, body.name);
  response.send('success');
};
