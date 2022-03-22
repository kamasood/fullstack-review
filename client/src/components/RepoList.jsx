import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.>
    {repos.map((repo) => (
      <RepoListEntry id={repo.id} repo={repo} />
    ))}
  </div>
)

export default RepoList;