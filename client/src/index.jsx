import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getTopRepos = this.getTopRepos.bind(this);
  }

  componentDidMount() {
    this.getTopRepos((data) => {
      this.setState({
        repos: data
      })
    })
  }

  getTopRepos (callback) {
    $.ajax({
      url: '/repos',
      type: 'GET',
      contentType: 'application/json',
      success: function(response) {
        callback(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  search (term) {
    // AJAX post the search term
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'application/json',
      data: `{"query":"${term}"}`,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });

    console.log(`${term} was searched`);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));