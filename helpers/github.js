const axios = require('axios');
const config = require('../config.js');

const getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  console.log(username);
  console.log(typeof username);
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
    })

}

module.exports.getReposByUsername = getReposByUsername;