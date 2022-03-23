const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  owner: String,
  url: String,
  stargazers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

  // dropCollection(); // nothing to see here...

  const options = {
    upsert: true, // if none found, create a new document
    useFindAndModify: false
  };

  repos.forEach((repo) => {
    Repo.findOneAndUpdate(
      { id: repo.id },
      {
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        url: repo.html_url,
        stargazers: repo.stargazers_count
      },
      options,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};

let find = () => {
  return Repo.find({})
    .sort({ stargazers: 'desc'})
    .limit(25)
    .catch(err => console.log(err));
};

// just my little helper
let dropCollection = () => {
  Repo.collection.drop();
}

module.exports.save = save;
module.exports.find = find;