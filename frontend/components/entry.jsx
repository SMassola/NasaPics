import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './main/main';

import Header from './header/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});
