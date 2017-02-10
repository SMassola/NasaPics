import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './main/main';

import Header from './header/header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: ""};
    this._handleTab = this._handleTab.bind(this);
  }

  _handleTab(tab) {
    this.setState({currentTab: tab});
  }

  render() {
    return (
      <div>
        <Header handleTab={this._handleTab} />
        {React.cloneElement(this.props.children, {tab: this.state.currentTab})}
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
