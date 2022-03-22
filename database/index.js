const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  // url: String,
  // description: String,
  // created: Date,
  // updated: Date,
  stargazers: Number
  // forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

  const options = {
    upsert: true // if none found, create a new document
  };

  repos.forEach((repo) => {
    Repo.findOneAndUpdate(
      { id: repo.id },
      {
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        stargazers: repo.stargazers_count
      },
      options)
      .then((document) => {
        (console.log(document))
      })
      .catch(err => console.log(err));
  });

};

let find = () => {

  return Repo.find({})
    .sort({ stargazers: 'desc'})
    .limit(25);

};

module.exports.save = save;
module.exports.find = find;