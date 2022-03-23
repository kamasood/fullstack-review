import React from 'react';

const RepoListEntry = ({repo}) => (
  <div>
    <a href={repo.url}>{repo.name}</a>
    <span>  ---  {repo.owner}  ---  stars: {repo.stargazers}</span>
  </div>
);




export default RepoListEntry;