import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    <h3> Top Repos: </h3>
    <h4>There are {repos.length} top repos...</h4>
    {repos.map((repo) => (
      <RepoListEntry key={repo.id} repo={repo} />
    ))}
  </div>
)

export default RepoList;